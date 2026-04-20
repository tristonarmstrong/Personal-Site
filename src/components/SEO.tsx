import * as Kiru from "kiru";
import { Head } from "kiru/router";

interface SEOProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
	author?: string;
	tags?: string[];
}

interface JsonLdSchema {
	"@context": string;
	"@type": string;
	[key: string]:
	| string
	| string[]
	| number
	| boolean
	| object
	| object[]
	| undefined;
}

export function SEO({
	title,
	description,
	image,
	url,
	type = "website",
	publishedTime,
	modifiedTime,
	author = "Triston Armstrong",
	tags,
}: SEOProps) {
	const siteName = "Triston Armstrong";
	const fullTitle = title ? `${title} | ${siteName}` : siteName;
	const defaultDescription =
		"Senior Software Engineer, father, and husband with a passion for building utility apps and automating the boring stuff.";
	const metaDescription = description || defaultDescription;
	const siteUrl = "https://tristonarmstrong.com";
	const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
	const defaultImage = `${siteUrl}/avatar.webp`;
	const metaImage = image
		? image.startsWith("http")
			? image
			: `${siteUrl}${image}`
		: defaultImage;

	// Generate JSON-LD structured data
	const jsonLd = generateJsonLd({
		type,
		title: fullTitle,
		description: metaDescription,
		url: fullUrl,
		image: metaImage,
		publishedTime,
		modifiedTime,
		author,
		siteName,
		tags,
	});

	const tags_elements = [
		<title>{fullTitle}</title>,
		<meta name="description" content={metaDescription} />,

		// Open Graph
		<meta property="og:title" content={fullTitle} />,
		<meta property="og:description" content={metaDescription} />,
		<meta property="og:image" content={metaImage} />,
		<meta property="og:url" content={fullUrl} />,
		<meta property="og:type" content={type || "website"} />,
		<meta property="og:site_name" content={siteName} />,

		// Twitter
		<meta name="twitter:card" content="summary_large_image" />,
		<meta name="twitter:site" content="@triston_armstr" />,
		<meta name="twitter:creator" content="@triston_armstr" />,
		<meta name="twitter:title" content={fullTitle} />,
		<meta name="twitter:description" content={metaDescription} />,
		<meta name="twitter:image" content={metaImage} />,

		// JSON-LD Structured Data
		<script type="application/ld+json" innerHTML={JSON.stringify(jsonLd)} />,
	];

	// Article specific metadata
	if (type === "article" && publishedTime) {
		tags_elements.push(
			<meta property="article:published_time" content={publishedTime} />,
		);
		if (modifiedTime) {
			tags_elements.push(
				<meta property="article:modified_time" content={modifiedTime} />,
			);
		}
		if (author) {
			tags_elements.push(<meta property="article:author" content={author} />);
		}
		if (tags && tags.length > 0) {
			for (const tag of tags) {
				tags_elements.push(<meta property="article:tag" content={tag} />);
			}
		}
	}

	tags_elements.push(<link rel="canonical" href={fullUrl} />);

	// RSS Feed
	tags_elements.push(
		<link
			rel="alternate"
			type="application/rss+xml"
			title={`${siteName} - Blog Feed`}
			href={`${siteUrl}/feed.xml`}
		/>,
	);

	// Filter out any potential invalid children just in case
	const cleanTags = tags_elements.filter(
		(t) => t !== null && typeof t === "object" && "type" in t,
	);

	return Kiru.createElement(Head.Content, {}, ...cleanTags);
}

function generateJsonLd({
	type,
	title,
	description,
	url,
	image,
	publishedTime,
	modifiedTime,
	author,
	siteName,
	tags,
}: {
	type: "website" | "article";
	title: string;
	description: string;
	url: string;
	image: string;
	publishedTime?: string;
	modifiedTime?: string;
	author: string;
	siteName: string;
	tags?: string[];
}): JsonLdSchema {
	const baseSchema: JsonLdSchema = {
		"@context": "https://schema.org",
		"@type": type === "article" ? "BlogPosting" : "WebPage",
		name: title,
		description: description,
		url: url,
		image: image,
	};

	if (type === "article") {
		return {
			...baseSchema,
			headline: title.replace(` | ${siteName}`, ""),
			author: {
				"@type": "Person",
				name: author,
				url: "https://triston.dev",
				sameAs: [
					"https://github.com/tristonarmstrong",
					"https://x.com/triston_armstr",
					"https://www.linkedin.com/in/triston-armstrong-7248b229b",
				],
			},
			publisher: {
				"@type": "Person",
				name: siteName,
				logo: {
					"@type": "ImageObject",
					url: "https://triston.dev/avatar.webp",
				},
			},
			datePublished: publishedTime,
			dateModified: modifiedTime || publishedTime,
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id": url,
			},
			keywords: tags?.join(", ") || "",
			articleSection: "Technology",
			inLanguage: "en-US",
		};
	}

	// For website/homepage, add Person schema for the site owner
	if (url === "https://triston.dev" || url === "https://triston.dev/") {
		return {
			...baseSchema,
			"@graph": [
				baseSchema,
				{
					"@type": "Person",
					"@id": "https://triston.dev/#person",
					name: siteName,
					jobTitle: "Senior Software Engineer",
					url: "https://triston.dev",
					image: "https://triston.dev/avatar.webp",
					sameAs: [
						"https://github.com/tristonarmstrong",
						"https://x.com/triston_armstr",
						"https://www.linkedin.com/in/triston-armstrong-7248b229b",
					],
					description: description,
				},
			],
		};
	}

	return baseSchema;
}
