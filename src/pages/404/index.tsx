import { Link } from "kiru/router";
import { t } from "../../i18n/translations";

export default function NotFoundPage() {
	return () => (
		<div className={"text-center"}>
			<h1 className={"text-[4rem] font-bold"}>{t("404.title")}</h1>
			<h2 className={"text-lg"}>{t("404.message")}</h2>
			<Link to={"/"} className={"text-yellow-500 underline"} transition>
				{t("404.goHome")}
			</Link>
		</div>
	);
}
