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
					image={post.image}
					imageAlt={post.image ? `${post.title} - Triston Armstrong` : undefined}
					imageWidth={post.image ? 1200 : undefined}
					imageHeight={post.image ? 630 : undefined}
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

				{/* Article header — playbook style */}
				<header className="flex flex-col gap-4 pt-2">
					<p className="dateline">
						{post.date.toLocaleDateString("en-US", {
							timeZone: "UTC",
							month: "long",
							day: "numeric",
							year: "numeric",
						})}
					</p>
					<h1 className="article-title">{post.title}</h1>
					<p className="lead">{post.summary}</p>
					<div className="flex items-center gap-2 text-xs text-ink-faint">
						<Avatar size="sm" />
						<span>Triston Armstrong</span>
						<span>·</span>
						<span>{formatReadingTime(calculateReadingTime(post.mdx))}</span>
					</div>
				</header>

				<div className="wave-divider" role="separator" aria-hidden="true" />

				{/* Content */}
				<main className="blogpost markdown-body">
					<MDXContent code={post!.mdx} />
				</main>

				{/* Next post */}
				<footer className="flex flex-col gap-3">
					<div className="wave-divider" role="separator" aria-hidden="true" />
					<p className="dateline">keep reading</p>
					<Link
						to={`/blog/${nextPost.slug}`}
						className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-paper-card hover:bg-card transition group no-underline border border-line"
						style="text-decoration: none;"
						transition
					>
						<h3 className="font-hand text-accent-deep group-hover:text-accent transition-colors" style="font-size: 1.7rem; line-height: 1.15;">
							{nextPost.title}
						</h3>
						<span className="text-xs text-ink-faint italic">
							{nextPost.date.toLocaleDateString("en-US", {
							timeZone: "UTC",
								month: "long",
								day: "numeric",
								year: "numeric",
							})}
						</span>
						<p className="text-xs text-ink-soft leading-relaxed line-clamp-2 max-w-md">
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
