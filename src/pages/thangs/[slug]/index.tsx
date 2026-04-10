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
					url={`/thangs/${thang.slug}`}
				/>

				{/* Back to all thangs */}
				<div>
					<Link
						to="/thangs"
						className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-gray-200 hover:bg-white/[0.06] hover:border-white/20 transition text-xs font-medium backdrop-blur-sm no-underline"
						style="text-decoration: none;"
						transition
					>
						<ArrowLeftIcon size={14} />
						<span>All Thangs</span>
						<span className="text-gray-600">·</span>
						<span className="text-gray-500">{allThangs.length}</span>
					</Link>
				</div>

				{/* Header */}
				<header className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10">
					<div className="flex items-start gap-3">
						<Avatar size="lg" />
						<div className="flex-1 min-w-0">
							<h1
								style={`view-transition-name: link-h-${thang.slug}`}
								className="text-xl font-bold tracking-tight text-yellow-500 leading-tight"
							>
								{thang.item}
							</h1>
							<div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
								<span className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-400">
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

				<div className="w-full border-t border-dashed border-white/10" />

				{/* Content */}
				<main className="blogpost markdown-body">
					<MDXContent code={thang!.mdx} />
				</main>

				<div className="w-full border-t border-dashed border-white/10" />

				{/* Next thang */}
				<footer>
					<h2 className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-4">
						Next Thang
					</h2>
					<Link
						to={`/thangs/${nextThang.slug}`}
						className="flex items-start gap-3 p-4 border border-white/10 rounded-xl bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition group no-underline"
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
								<h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors tracking-tight">
									{nextThang.item}
								</h3>
								<span className="text-xs text-gray-500 whitespace-nowrap px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10">
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
