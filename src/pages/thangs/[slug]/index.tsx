import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";
import generateLowResImagePath from "../../../utils/generateLowResImagePath";

import { definePageConfig, Link, useFileRouter } from "kiru/router";
import { allThangs } from "content-collections";
import { Avatar } from "../../../components/Avatar";
import { SEO } from "../../../components/SEO";
import { ArrowLeftIcon } from "../../../components/icons/ArrowLeft";

export default function Page() {
	const {
		state: { params },
	} = useFileRouter();

	return () => {
		const slug = params.value?.slug;
		const thangId = allThangs.findIndex((x) => x.slug === slug);
		const thang = allThangs[thangId];
		const nextThang =
			thangId !== allThangs.length - 1 ? allThangs[thangId + 1] : allThangs[0];

		if (!thang?.mdx) {
			return <div>Oops something went wrong rendering the page</div>;
		}

		return (
			<article className="text-sm mt-10 flex flex-col gap-10 max-w-2xl">
				<SEO
					title={thang.item}
					description={`${thang.item} - ${thang.type} item in Triston's collection of things`}
					image={thang.img}
					imageAlt={`${thang.item} - one of Triston's thangs`}
					url={`/thangs/${thang.slug}`}
				/>

				{/* Back to all thangs */}
				<div>
					<Link
						to="/thangs"
						className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-paper-card text-ink-soft hover:text-ink hover:bg-card hover:border-line transition text-xs font-medium backdrop-blur-sm no-underline"
						style="text-decoration: none;"
						transition
					>
						<ArrowLeftIcon size={14} />
						<span>All Thangs</span>
						<span className="text-ink-faint">·</span>
						<span className="text-ink-faint">{allThangs.length}</span>
					</Link>
				</div>

				{/* Header */}
				<header className="p-4 rounded-2xl bg-paper-card backdrop-blur-md ">
					<div className="flex items-start gap-3">
						<Avatar size="lg" />
						<div className="flex-1 min-w-0">
							<h1
								style={`view-transition-name: link-h-${thang.slug}; font-size: 1.6rem;`}
								className="font-display text-ink leading-tight"
							>
								{thang.item}
							</h1>
							<div className="flex items-center gap-2 mt-2 text-xs text-ink-faint">
								<span className="px-2 py-0.5 rounded-full bg-paper-card border border-line text-ink-soft">
									{thang.type}
								</span>
							</div>
						</div>
					</div>

					{/* Image */}
					<div
						className="h-48 sm:h-64 rounded-xl mt-4"
						style={`
							view-transition-name: image-${thang.slug};
							background-image: url(${thang.img}), url(${generateLowResImagePath(thang.img)});
							background-repeat: no-repeat;
							background-size: cover;
							background-position: center;
						`}
					></div>
				</header>

				<div className="w-full border-t border-dashed border-line" />

				{/* Content */}
				<main className="blogpost markdown-body">
					<MDXContent code={thang!.mdx} />
				</main>

				<div className="w-full border-t border-dashed border-line" />

				{/* Next thang */}
				<footer>
					<h2 className="text-xs font-medium tracking-wider text-ink-faint uppercase mb-4">
						Next Thang
					</h2>
					<Link
						to={`/thangs/${nextThang.slug}`}
						className="flex items-start gap-3 p-4 rounded-xl bg-paper-card backdrop-blur-md hover:bg-card transition group no-underline"
						style="text-decoration: none;"
						transition
					>
						<div
							className="w-16 h-16 rounded-lg shrink-0"
							style={`
								background-image: url(${nextThang.img}), url(${generateLowResImagePath(nextThang.img)});
								background-repeat: no-repeat;
								background-size: cover;
								background-position: center;
							`}
						></div>
						<div className="flex-1 min-w-0">
							<div className="flex items-center justify-between gap-4 mb-1">
								<h3 className="text-sm font-medium text-ink group-hover:text-accent-deep transition-colors tracking-tight">
									{nextThang.item}
								</h3>
								<span className="text-xs text-ink-faint whitespace-nowrap px-2 py-0.5 rounded-full bg-paper-card border border-line">
									{nextThang.type}
								</span>
							</div>
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
		return allThangs.map((p) => ({ slug: p.slug }));
	},
});
