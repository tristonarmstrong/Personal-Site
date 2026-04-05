import { allThangs } from "content-collections";
import { Link } from "kiru/router";
import { generateSEODescription, SEO } from "../../components/SEO";
import { t } from "../../i18n/translations";
import generateLowResImagePath from "../../utils/generateLowResImagePath";

export default function Thangs() {
	return () => (
		<main className="text-sm mt-10 flex flex-col gap-6">
			<SEO
				title={t("nav.thangs")}
				description={generateSEODescription("thangs")}
				url="/thangs"
			/>
			<h1 className={"text-2xl"}>{t("thangs.title")}</h1>
			<i className={"text-yellow-500 underline opacity-50"}>
				{t("thangs.note")}
			</i>

			<h2 className={"text-xl font-bold"}>{t("thangs.tech")}</h2>
			<FilteredThangsList group={"Tech"} />
			<br />
			<h2 className={"text-xl font-bold"}>{t("thangs.kitchen")}</h2>
			<FilteredThangsList group={"Kitchen"} />
			<br />
			<h2 className={"text-xl font-bold"}>{t("thangs.day")}</h2>
			<FilteredThangsList group={"Day"} />
			<br />
			<h2 className={"text-xl font-bold"}>{t("thangs.furniture")}</h2>
			<FilteredThangsList group={"Furniture"} />
			<br />
			<h2 className={"text-xl font-bold"}>{t("thangs.travel")}</h2>
			<div className={"text-gray-500"}>{t("thangs.travel.empty")}</div>
			<br />
			<h2 className={"text-xl font-bold"}>{t("thangs.languages")}</h2>
			<FilteredThangsList group={"Lang"} />

			<br />
			<i>
				{t("thangs.ideaCredit")}{" "}
				<a
					className={"text-yellow-500 underline"}
					href={"https://favorite.emnudge.dev/"}
					target={"_blank"}
					rel={"noopener"}
				>
					Emnudge.dev
				</a>
			</i>
			<br />
		</main>
	);
}

function FilteredThangsList({
	group,
}: {
	group: (typeof allThangs)[number]["type"];
}) {
	const filteredThangs = allThangs.filter((x) => x.type === group);

	return (
		<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
			{filteredThangs.map((thang) => {
				return (
					<Link
						to={`/thangs/${thang.slug}`}
						className={
							"transition bg-[#fff1] bg-opacity-20 rounded-lg shadow hover:shadow-xl hover:scale-105 cursor-pointer"
						}
						transition
					>
						<div
							className={"h-40 rounded-t-lg"}
							style={`
								view-transition-name: image-${thang.slug};
								background-image: url(${thang.img}), url(${generateLowResImagePath(thang.img)});
								background-repeat: no-repeat;
								background-size: cover;
								background-position: center;
							`}
						></div>
						<div className={"p-2"}>
							<h2
								style={`view-transition-name: link-h-${thang.slug}`}
								className={"text-md font-bold w-fit"}
							>
								{thang.item}
							</h2>
							<p>{thang.type}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
