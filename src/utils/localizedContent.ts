export type Language = "en" | "th" | "ja" | "zh";

export interface LocalizedPost {
	title: string;
	summary: string;
	date: Date;
	slug: string;
	baseSlug: string;
	lang: string;
	mdx: string;
	_meta: {
		filePath: string;
		fileName: string;
		directory: string;
		extension: string;
		path: string;
	};
}

/**
 * Get a localized post by baseSlug in the requested language only
 * Returns undefined if post doesn't exist in the requested language
 * (No fallback to English)
 */
export function getLocalizedPost(
	posts: LocalizedPost[],
	baseSlug: string,
	lang: Language,
): LocalizedPost | undefined {
	// Only return post if it exists in the requested language
	return posts.find((post) => post.baseSlug === baseSlug && post.lang === lang);
}

/**
 * Get all posts for listing in the requested language only
 * Posts without translation in the requested language are hidden
 * Posts are sorted by date (newest first).
 */
export function getLocalizedPostsForListing(
	posts: LocalizedPost[],
	lang: Language,
): LocalizedPost[] {
	// Filter posts strictly by language (no fallback)
	const filteredPosts = posts.filter((post) => post.lang === lang);

	// Sort by date (newest first)
	return filteredPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

/**
 * Get all available posts with their language variants
 * Useful for generating static params
 */
export function getAllPostSlugs(posts: LocalizedPost[]): string[] {
	const uniqueSlugs = new Set<string>();

	for (const post of posts) {
		uniqueSlugs.add(post.baseSlug);
	}

	return Array.from(uniqueSlugs);
}
