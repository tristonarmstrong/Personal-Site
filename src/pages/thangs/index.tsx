import { allThangs } from "content-collections";
import { Link } from "kiru/router";
import generateLowResImagePath from "../../utils/generateLowResImagePath";
import { SEO } from "../../components/SEO";

export default function Thangs() {
	return () => (
		<main className="text-sm mt-10 flex flex-col gap-10 max-w-2xl">
			<SEO
				title="Thangs"
				description="A collection of things Triston Armstrong likes and uses, including tech, kitchen gear, and more."
				url="/thangs"
			/>

			{/* Header */}
			<section className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col gap-2">
				<h1 className="text-2xl font-bold tracking-tight text-gray-100">
					Thangs
				</h1>
				<p className="text-gray-400">Some things I like and use</p>
				<i className="text-yellow-500/70 text-xs">
					Still working on filling these in
				</i>
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* Tech */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Tech
				</h2>
				<FilteredThangsList group={"Tech"} />
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* Kitchen */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Kitchen
				</h2>
				<FilteredThangsList group={"Kitchen"} />
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* Day */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Day
				</h2>
				<FilteredThangsList group={"Day"} />
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* Furniture */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Furniture
				</h2>
				<FilteredThangsList group={"Furniture"} />
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* Travel */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Travel
				</h2>
				<p className="text-gray-500 text-sm">who travels these days?</p>
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* Languages */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Languages
				</h2>
				<FilteredThangsList group={"Lang"} />
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* Footer credit */}
			<p className="text-gray-500 text-xs">
				Idea stolen from{" "}
				<a
					className="text-yellow-500 hover:underline"
					href="https://favorite.emnudge.dev/"
					target="_blank"
					rel="noopener"
				>
					Emnudge.dev
				</a>
			</p>

			<div className="h-20" />
		</main>
	);
}

function FilteredThangsList({
	group,
}: {
	group: (typeof allThangs)[number]["type"];
}) {
	const filteredThangs = allThangs.filter((x) => x.type === group);

	if (filteredThangs.length === 0) {
		return <p className="text-gray-500 text-sm">Nothing here yet</p>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{filteredThangs.map((thang) => {
				return (
					<Link
						to={`/thangs/${thang.slug}`}
						className="transition bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/[0.06] cursor-pointer overflow-hidden group"
						transition
					>
						<div
							className="h-40"
							style={`
								view-transition-name: image-${thang.slug};
								background-image: url(${thang.img}), url(${generateLowResImagePath(thang.img)});
								background-repeat: no-repeat;
								background-size: cover;
								background-position: center;
							`}
						></div>
						<div className="p-3">
							<h3
								style={`view-transition-name: link-h-${thang.slug}`}
								className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors"
							>
								{thang.item}
							</h3>
							<p className="text-xs text-gray-500">{thang.type}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
