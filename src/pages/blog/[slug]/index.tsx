import { allPosts } from "content-collections";
import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";
import { definePageConfig, Link, useFileRouter } from "kiru/router";
import { Avatar } from "../../../components/Avatar";
import { SEO } from "../../../components/SEO";
import { t } from "../../../i18n/translations";
import { currentLanguage } from "../../../stores/language";
import {
	getAllPostSlugs,
	getLocalizedPost,
	getLocalizedPostsForListing,
	type LocalizedPost,
} from "../../../utils/localizedContent";

export default function Page() {
	const {
		state: { params },
	} = useFileRouter();

	return () => {
		const slug = params.value?.slug;
		const lang = currentLanguage.value;

		if (!slug) {
			return <div>Oops something went wrong rendering the page</div>;
		}

		// Get localized post (strict - no fallback to English)
		const post = getLocalizedPost(allPosts as LocalizedPost[], slug, lang);

		if (!post?.mdx) {
			// Post not available in this language
			return (
				<div className="text-sm mt-10 flex flex-col gap-4">
					<h1 className="text-2xl text-yellow-500">
						{lang === "th" ? "ไม่พบโพสต์" : "Post Not Available"}
					</h1>
					<p>
						{lang === "th"
							? "โพสต์นี้ไม่มีให้บริการในภาษาไทย"
							: "This post is not available in English."}
					</p>
					<Link to="/blog" transition className="text-yellow-500 underline">
						← {lang === "th" ? "กลับไปที่บล็อก" : "Back to Blog"}
					</Link>
				</div>
			);
		}

		// Get all posts in current language for navigation
		const localizedPosts = getLocalizedPostsForListing(
			allPosts as LocalizedPost[],
			lang,
		);
		const postId = localizedPosts.findIndex((x) => x.baseSlug === slug);
		const nextPost =
			postId !== -1 && postId !== localizedPosts.length - 1
				? localizedPosts[postId + 1]
				: localizedPosts[0];

		return (
			<article className={"blogpost markdown-body"}>
				<SEO
					title={post.title}
					description={post.summary}
					type="article"
					publishedTime={post.date.toISOString()}
					url={`/blog/${post.slug}`}
				/>
				<div
					style={"view-transition-name: navborder"}
					className={"border-b border-yellow-500"}
				/>
				<header className={"my-5 flex items-start gap-4"}>
					<span className={"mt-8"}>
						<Avatar size="lg" />
					</span>
					<div className={"flex flex-col items-start justify-center"}>
						<h1
							style={`view-transition-name: link-h-${params.value.slug}; margin-bottom: 0;`}
							className="text-2xl font-bold"
						>
							{post.title}
						</h1>
						<span className="text-gray-500 text-sm">
							{post.date.toDateString()}
						</span>
					</div>
				</header>

				<main>
					<MDXContent code={post!.mdx} />
				</main>

				<footer>
					<h3>{t("blog.nextPost")}</h3>
					<Link
						to={`/blog/${nextPost.slug}`}
						className={
							"border border-dashed rounded-lg px-2 py-2 opacity-40 hover:opacity-70 cursor-pointer block transition"
						}
						style={"text-decoration: unset;"}
						transition
					>
						<div className={"text-md font-bold text-white"}>
							{nextPost.title}
						</div>
						<div className={"text-sm"}>{nextPost.summary}</div>
					</Link>
				</footer>
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
		// Use unique baseSlugs to avoid generating duplicate routes
		const uniqueSlugs = getAllPostSlugs(allPosts as LocalizedPost[]);
		return uniqueSlugs.map((slug) => ({ slug }));
	},
});
