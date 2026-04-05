import { allPosts } from "content-collections";
import { Link } from "kiru/router";
import { generateSEODescription, SEO } from "../../components/SEO";
import { t } from "../../i18n/translations";
import { currentLanguage } from "../../stores/language";
import {
	getLocalizedPostsForListing,
	type LocalizedPost,
} from "../../utils/localizedContent";

export default function BlogIndex() {
	return () => {
		const lang = currentLanguage.value;
		// Get posts in current language with fallback to English
		const allPostsRearranged = getLocalizedPostsForListing(
			allPosts as LocalizedPost[],
			lang,
		);

		return (
			<main className="text-sm mt-10 flex flex-col gap-6">
				<SEO
					title={t("nav.blog")}
					description={generateSEODescription("blog")}
					url="/blog"
				/>
				<h2 className={"text-2xl text-yellow-500"}>{t("blog.title")}</h2>
				<p>{t("blog.description")}</p>

				<ul className={"flex flex-col gap-2"}>
					{allPostsRearranged.map((x) => (
						<li key={x.baseSlug}>
							<Link
								to={`/blog/${x.baseSlug}`}
								transition
								className="text-yellow-500 underline"
							>
								{x.title}
							</Link>
							<span className="text-gray-500 ml-2">
								— {new Date(x.date).toLocaleDateString()}
							</span>
						</li>
					))}
				</ul>

				<div className="mt-8">
					<Link
						to="/"
						transition
						className="text-gray-400 hover:text-white underline"
					>
						← {t("blog.backHome")}
					</Link>
				</div>
			</main>
		);
	};
}
