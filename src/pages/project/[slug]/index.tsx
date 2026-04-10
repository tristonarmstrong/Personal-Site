import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";

import { definePageConfig, useFileRouter } from "kiru/router";
import { allProjects } from "content-collections";
import { SEO } from "../../../components/SEO";

export default function Page() {
	const {
		state: { params },
	} = useFileRouter();

	return () => {
		const slug = params.value?.slug;
		const post = allProjects.find((x) => x.slug === slug);

		if (!post?.mdx) {
			return <div>Oops something went wrong rendering the page</div>;
		}

		return (
			<article className={"blogpost markdown-body"}>
				<SEO
					title={post.title}
					description={`${post.title} - A ${post.type} project by Triston Armstrong.`}
					url={`/project/${post.slug}`}
				/>
				<div
					style={"view-transition-name: navborder"}
					className={"border-b border-yellow-500"}
				/>
				<h1
					style={`view-transition-name: link-h-${post.slug}`}
					className="text-2xl font-bold w-fit"
				>
					{post.title}
				</h1>
				<MDXContent code={post!.mdx} />
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
		return allProjects.map((p) => ({ slug: p.slug }));
	},
});
