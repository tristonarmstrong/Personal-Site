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
			<header className="flex flex-col items-center text-center gap-3 pt-4">
				<p className="dateline">things i actually use</p>
				<h1 className="font-hand text-accent" style="font-size: clamp(3rem, 9vw, 4.2rem); line-height: 1;">
					/uses
				</h1>
				<p className="lead max-w-xl">
					The gear, tools, and random stuff that powers my day-to-day —
					things I actually use and recommend.
				</p>
			</header>

			<div className="wave-divider" role="separator" aria-hidden="true" />

			{/* Tech */}
			<section>
				<h2 className="font-hand text-ink mb-4" style="font-size: 1.75rem;">
					Tech
				</h2>
				<FilteredThangsList group={"Tech"} />
			</section>

			{/* Kitchen */}
			<section>
				<h2 className="font-hand text-ink mb-4" style="font-size: 1.75rem;">
					Kitchen
				</h2>
				<FilteredThangsList group={"Kitchen"} />
			</section>

			{/* Day */}
			<section>
				<h2 className="font-hand text-ink mb-4" style="font-size: 1.75rem;">
					Day
				</h2>
				<FilteredThangsList group={"Day"} />
			</section>

			{/* Furniture */}
			<section>
				<h2 className="font-hand text-ink mb-4" style="font-size: 1.75rem;">
					Furniture
				</h2>
				<FilteredThangsList group={"Furniture"} />
			</section>

			{/* Travel */}
			<section>
				<h2 className="font-hand text-ink mb-4" style="font-size: 1.75rem;">
					Travel
				</h2>
				<p className="text-ink-faint text-sm pl-1">who travels these days?</p>
			</section>

			{/* Languages */}
			<section>
				<h2 className="font-hand text-ink mb-4" style="font-size: 1.75rem;">
					Languages
				</h2>
				<FilteredThangsList group={"Lang"} />
			</section>

			{/* Footer credit */}
			<p className="text-ink-faint text-xs">
				Idea stolen from{" "}
				<a
					className="text-accent hover:underline"
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
		return <p className="text-ink-faint text-sm pl-1">Nothing here yet</p>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{filteredThangs.map((thang) => {
				return (
					<Link
						to={`/thangs/${thang.slug}`}
						className="taped-photo no-underline group cursor-pointer"
						aria-label={thang.item}
						transition
					>
						<span
							className="block aspect-[4/3] w-full"
							style={`
								view-transition-name: image-${thang.slug};
								background-image: url(${thang.img}), url(${generateLowResImagePath(thang.img)});
								background-repeat: no-repeat;
								background-size: cover;
								background-position: center;
							`}
						/>
					</Link>
				);
			})}
		</div>
	);
}
