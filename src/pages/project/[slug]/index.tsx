import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";

import { definePageConfig, Link, useFileRouter } from "kiru/router";
import { allProjects } from "content-collections";
import { Avatar } from "../../../components/Avatar";
import { SEO } from "../../../components/SEO";
import { ArrowLeftIcon } from "../../../components/icons/ArrowLeft";

export default function Page() {
	const {
		state: { params },
	} = useFileRouter();

	return () => {
		const slug = params.value?.slug;
		const projectId = allProjects.findIndex((x) => x.slug === slug);
		const project = allProjects[projectId];
		const nextProject =
			projectId !== allProjects.length - 1
				? allProjects[projectId + 1]
				: allProjects[0];

		if (!project?.mdx) {
			return <div>Oops something went wrong rendering the page</div>;
		}

		return (
			<article className="text-sm mt-10 flex flex-col gap-10 max-w-2xl">
				<SEO
					title={project.title}
					description={`${project.title} - A ${project.type} project by Triston Armstrong.`}
					url={`/project/${project.slug}`}
				/>

				{/* Back to all projects */}
				<div>
					<Link
						to="/"
						className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-paper-card border border-line text-ink-soft hover:text-ink hover:bg-card hover:border-line transition text-xs font-medium backdrop-blur-sm no-underline"
						style="text-decoration: none;"
						transition
					>
						<ArrowLeftIcon size={14} />
						<span>All Projects</span>
						<span className="text-ink-faint">·</span>
						<span className="text-ink-faint">{allProjects.length}</span>
					</Link>
				</div>

				{/* Header */}
				<header className="p-4 rounded-2xl bg-paper-card backdrop-blur-md border border-line">
					<div className="flex items-start gap-3">
						<Avatar size="lg" />
						<div className="flex-1 min-w-0">
							<h1
								style={`view-transition-name: link-h-${project.slug}; font-size: 1.6rem;`}
								className="font-display text-ink leading-tight"
							>
								{project.title}
							</h1>
							<div className="flex items-center gap-2 mt-2 text-xs text-ink-faint">
								<span className="px-2 py-0.5 rounded-full bg-paper-card border border-line text-ink-soft">
									{project.type}
								</span>
								<span>·</span>
								<a
									href={project.repo}
									target="_blank"
									rel="noopener"
									className="text-ink-faint hover:text-accent transition no-underline"
									style="text-decoration: none;"
								>
									View on GitHub
								</a>
							</div>
						</div>
					</div>
				</header>

				<div className="w-full border-t border-dashed border-line" />

				{/* Content */}
				<main className="blogpost markdown-body">
					<MDXContent code={project!.mdx} />
				</main>

				<div className="w-full border-t border-dashed border-line" />

				{/* Next project */}
				<footer>
					<h2 className="text-xs font-medium tracking-wider text-ink-faint uppercase mb-4">
						Next Project
					</h2>
					<Link
						to={`/project/${nextProject.slug}`}
						className="flex items-start gap-3 p-4 border border-line rounded-xl bg-paper-card backdrop-blur-md hover:bg-card transition group no-underline"
						style="text-decoration: none;"
						transition
					>
						<div className="w-10 h-10 rounded bg-paper flex items-center justify-center text-ink-faint text-xs font-medium shrink-0 mt-0.5">
							{nextProject.type.charAt(0)}
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-center justify-between gap-4 mb-1">
								<h3 className="text-sm font-medium text-ink group-hover:text-accent-deep transition-colors tracking-tight">
									{nextProject.title}
								</h3>
								<span className="text-xs text-ink-faint whitespace-nowrap px-2 py-0.5 rounded-full bg-paper-card border border-line">
									{nextProject.type}
								</span>
							</div>
							{nextProject.summary && (
								<p className="text-xs text-ink-faint leading-relaxed line-clamp-2">
									{nextProject.summary}
								</p>
							)}
						</div>
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
		return allProjects.map((p) => ({ slug: p.slug }));
	},
});
