import * as Kiru from "kiru";
import { Head } from "kiru/router";
import { currentLanguage, type Language } from "../stores/language";

interface SEOProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: "website" | "article";
	publishedTime?: string;
	keywords?: string[];
}

export function SEO({
	title,
	description,
	image,
	url,
	type = "website",
	publishedTime,
	keywords,
}: SEOProps) {
	const lang = currentLanguage.value;
	const siteName = lang === "th" ? "ทริสตัน อาร์มสตรอง" : "Triston Armstrong";
	const fullTitle = title ? `${title} | ${siteName}` : siteName;
	const defaultDescription =
		lang === "th"
			? "วิศวกรซอฟต์แวร์อาวุโส พ่อ และสามี ที่มีความหลงใหลในการสร้างแอปพลิเคชันและทำให้สิ่งน่าเบื่อเป็นอัตโนมัติ"
			: "Senior Software Engineer, father, and husband with a passion for building utility apps and automating the boring stuff.";
	const metaDescription = description || defaultDescription;
	const siteUrl = "https://triston.dev";
	const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
	const defaultImage = `${siteUrl}/avatar.webp`;
	const metaImage = image
		? image.startsWith("http")
			? image
			: `${siteUrl}${image}`
		: defaultImage;

	const tags = [
		<title>{fullTitle}</title>,
		<meta name="description" content={metaDescription} />,

		// Hreflang tags for international SEO
		<link rel="alternate" href={fullUrl} hreflang={lang} />,
		<link rel="alternate" href={fullUrl} hreflang="x-default" />,

		// Open Graph
		<meta property="og:title" content={fullTitle} />,
		<meta property="og:description" content={metaDescription} />,
		<meta property="og:image" content={metaImage} />,
		<meta property="og:url" content={fullUrl} />,
		<meta property="og:type" content={type || "website"} />,
		<meta property="og:site_name" content={siteName} />,
		<meta property="og:locale" content={lang === "th" ? "th_TH" : "en_US"} />,

		// Twitter
		<meta name="twitter:card" content="summary_large_image" />,
		<meta name="twitter:site" content="@triston_armstr" />,
		<meta name="twitter:creator" content="@triston_armstr" />,
		<meta name="twitter:title" content={fullTitle} />,
		<meta name="twitter:description" content={metaDescription} />,
		<meta name="twitter:image" content={metaImage} />,
	];

	// Article specific metadata
	if (type === "article" && publishedTime) {
		tags.push(
			<meta property="article:published_time" content={publishedTime} />,
		);
	}

	// Keywords
	if (keywords && keywords.length > 0) {
		tags.push(<meta name="keywords" content={keywords.join(", ")} />);
	}

	tags.push(<link rel="canonical" href={fullUrl} />);

	// Filter out any potential invalid children just in case
	const cleanTags = tags.filter(
		(t) => t !== null && typeof t === "object" && "type" in t,
	);

	return Kiru.createElement(Head.Content, {}, ...cleanTags);
}

export function generateSEODescription(
	key: "home" | "experience" | "now" | "thangs" | "blog",
): string {
	const descriptions: Record<Language, Record<string, string>> = {
		en: {
			home: "Software Developer with 5+ years of experience, father to 3, and husband. Building utility apps and automating the boring stuff.",
			experience:
				"Companies Triston Armstrong has worked at and his professional focus as a Senior Software Engineer.",
			now: "What Triston Armstrong is currently up to, including projects, open source contributions, and latest blogs.",
			thangs:
				"A collection of things Triston Armstrong likes and uses, including tech, kitchen gear, and more.",
			blog: "Latest thoughts, tutorials, and tech deep-dives from Triston Armstrong.",
		},
		th: {
			home: "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์ 5+ ปี พ่อของลูก 3 คน และสามี สร้างแอปพลิเคชันและทำให้สิ่งน่าเบื่อเป็นอัตโนมัติ",
			experience:
				"บริษัทที่ทริสตัน อาร์มสตรอง เคยทำงานและความเชี่ยวชาญด้านวิศวกรซอฟต์แวร์อาวุโส",
			now: "สิ่งที่ทริสตัน อาร์มสตรอง กำลังทำอยู่ในขณะนี้ รวมถึงโครงการ การมีส่วนร่วมโอเพนซอร์ส และบล็อกล่าสุด",
			thangs:
				"คอลเลกชันสิ่งที่ทริสตัน อาร์มสตรอง ชอบและใช้ รวมถึงเทคโนโลยี อุปกรณ์ครัว และอื่นๆ",
			blog: "ความคิด บทแนะนำ และการวิเคราะห์เทคโนโลยีล่าสุดจากทริสตัน อาร์มสตรอง",
		},
	};
	return descriptions[currentLanguage.value][key];
}
