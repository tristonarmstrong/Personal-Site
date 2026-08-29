import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";

import { definePageConfig, Link, useFileRouter } from "kiru/router";
import { allPosts } from "content-collections";
import { Avatar } from "../../../components/Avatar";
import { SEO } from "../../../components/SEO";
import {
	calculateReadingTime,
	formatReadingTime,
} from "../../../utils/readingTime";
import { ArrowLeftIcon } from "../../../components/icons/ArrowLeft";

export default function Page() {
	const {
		state: { params },
	} = useFileRouter();

	return () => {
		const slug = params.value?.slug;
		const postId = allPosts.findIndex((x) => x.slug === slug);
		const post = allPosts[postId];
		const nextPost =
			postId !== allPosts.length - 1 ? allPosts[postId + 1] : allPosts[0];

		if (!post?.mdx) {
			return <div>Oops something went wrong rendering the page</div>;
		}

		return (
			<article className="text-sm mt-10 flex flex-col gap-10 max-w-2xl">
				<SEO
					title={post.title}
					description={post.summary}
					type="article"
					publishedTime={post.date.toISOString()}
					url={`/blog/${post.slug}`}
				/>

				{/* Back to all posts */}
				<div>
					<Link
						to="/blog"
						className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-paper-card  text-ink-soft hover:text-ink hover:bg-card hover:border-line transition text-xs font-medium backdrop-blur-sm no-underline"
						style="text-decoration: none;"
						transition
					>
						<ArrowLeftIcon size={14} />
						<span>All Posts</span>
						<span className="text-ink-faint">·</span>
						<span className="text-ink-faint">{allPosts.length}</span>
					</Link>
				</div>

				{/* Header */}
				<header className="p-4 rounded-2xl bg-paper-card backdrop-blur-md ">
					<div className="flex items-start gap-3">
						<Avatar size="lg" />
						<div className="flex-1 min-w-0">
							<h1 className="font-display text-ink leading-tight" style="font-size: 1.6rem; margin-top: 0px;">
								{post.title}
							</h1>
							<div className="flex items-center gap-2 mt-2 text-xs text-ink-faint">
								<span>
									{post.date.toLocaleDateString("en-US", {
										month: "long",
										day: "numeric",
										year: "numeric",
									})}
								</span>
								<span>·</span>
								<span>{formatReadingTime(calculateReadingTime(post.mdx))}</span>
							</div>
						</div>
					</div>
				</header>

				<div className="w-full border-t border-dashed border-line" />

				{/* Content */}
				<main className="blogpost markdown-body">
					<MDXContent code={post!.mdx} />
				</main>

				<div className="w-full border-t border-dashed border-line" />

				{/* Next post */}
				<footer>
					<h2 className="text-xs font-medium tracking-wider text-ink-faint uppercase mb-4">
						Next Post
					</h2>
					<Link
						to={`/blog/${nextPost.slug}`}
						className="flex flex-col p-4  rounded-xl bg-paper-card backdrop-blur-md hover:bg-card transition group no-underline"
						style="text-decoration: none;"
						transition
					>
						<div className="flex items-center justify-between gap-4 mb-1">
							<h3 className="text-sm font-medium text-ink group-hover:text-accent-deep transition-colors tracking-tight">
								{nextPost.title}
							</h3>
							<span className="text-xs text-ink-faint whitespace-nowrap">
								{nextPost.date.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								})}
							</span>
						</div>
						<p className="text-xs text-ink-faint leading-relaxed line-clamp-2">
							{nextPost.summary}
						</p>
					</Link>
				</footer>

				{/* Footer spacer */}
				<div className="h-20" />
			</article>
		);
	};
}

function useMDXComponent(code: string) {
	const scope = { Kiru, _jsx_runtime };
	const fn = new Function(...Object.keys(scope), code);
	return fn(...Object.values(scope)).default;
}

function MDXContent({ code, ...props }: { code: string }) {
	const Component = useMDXComponent(code);
	return /* @__PURE__ */ jsx(Component, { ...props });
}

export const config = definePageConfig({
	generateStaticParams: () => {
		return allPosts.map((p) => ({ slug: p.slug }));
	},
});
