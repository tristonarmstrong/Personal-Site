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
					/uses
				</h1>
				<p className="text-gray-400 leading-relaxed">
					The gear, tools, and random stuff that powers my day-to-day. From the
					desk setup to kitchen gadgets, these are things I actually use and
					recommend.
				</p>
			</section>

			{/* Tech */}
			<section>
				<div className="p-3 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 mb-4">
					<h2 className="text-sm font-bold tracking-tight text-gray-100">
						Tech
					</h2>
				</div>
				<FilteredThangsList group={"Tech"} />
			</section>

			{/* Kitchen */}
			<section>
				<div className="p-3 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 mb-4">
					<h2 className="text-sm font-bold tracking-tight text-gray-100">
						Kitchen
					</h2>
				</div>
				<FilteredThangsList group={"Kitchen"} />
			</section>

			{/* Day */}
			<section>
				<div className="p-3 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 mb-4">
					<h2 className="text-sm font-bold tracking-tight text-gray-100">
						Day
					</h2>
				</div>
				<FilteredThangsList group={"Day"} />
			</section>

			{/* Furniture */}
			<section>
				<div className="p-3 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 mb-4">
					<h2 className="text-sm font-bold tracking-tight text-gray-100">
						Furniture
					</h2>
				</div>
				<FilteredThangsList group={"Furniture"} />
			</section>

			{/* Travel */}
			<section>
				<div className="p-3 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 mb-4">
					<h2 className="text-sm font-bold tracking-tight text-gray-100">
						Travel
					</h2>
				</div>
				<p className="text-gray-500 text-sm pl-1">who travels these days?</p>
			</section>

			{/* Languages */}
			<section>
				<div className="p-3 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 mb-4">
					<h2 className="text-sm font-bold tracking-tight text-gray-100">
						Languages
					</h2>
				</div>
				<FilteredThangsList group={"Lang"} />
			</section>

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
		return <p className="text-gray-500 text-sm pl-1">Nothing here yet</p>;
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
