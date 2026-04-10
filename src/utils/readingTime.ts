/**
 * Calculate estimated reading time for a given text
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 WPM)
 * @returns Reading time in minutes (rounded up)
 */
export function calculateReadingTime(
	content: string,
	wordsPerMinute = 200,
): number {
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

/**
 * Format reading time for display
 * @param minutes - Reading time in minutes
 * @returns Formatted string (e.g., "5 min read" or "< 1 min read")
 */
export function formatReadingTime(minutes: number): string {
	if (minutes < 1) {
		return "< 1 min read";
	}
	return `${minutes} min read`;
}
