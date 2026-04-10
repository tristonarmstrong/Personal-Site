import { type Plugin } from "vite";
import { writeFileSync, readFileSync, readdirSync, statSync } from "fs";
import { join, parse } from "path";

const SITE_URL = "https://tristonarmstrong.com";
const SITE_TITLE = "Triston Armstrong";
const SITE_DESCRIPTION =
	"Senior Software Engineer, father, and husband with a passion for building utility apps and automating the boring stuff.";

interface FeedPluginOptions {
	siteUrl?: string;
	siteTitle?: string;
	siteDescription?: string;
}

function parseFrontMatter(content: string): Record<string, string> {
	const match = content.match(/^---\n([\s\S]*?)\n---/);
	if (!match) return {};

	const frontMatter = match[1];
	const result: Record<string, string> = {};

	for (const line of frontMatter.split("\n")) {
		const colonIndex = line.indexOf(":");
		if (colonIndex > 0) {
			const key = line.slice(0, colonIndex).trim();
			let value = line.slice(colonIndex + 1).trim();
			value = value.replace(/^["'](.*)["']$/s, "$1");
			result[key] = value;
		}
	}

	return result;
}

function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
}

function escapeXml(str: string): string {
	if (!str) return "";
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function getMdxFiles(dir: string): Array<{ slug: string; lastmod: string }> {
	const files: Array<{ slug: string; lastmod: string }> = [];
	const __dirname = process.cwd();
	const contentDir = join(__dirname, "content", dir);

	try {
		const entries = readdirSync(contentDir);
		for (const entry of entries) {
			const fullPath = join(contentDir, entry);
			const stat = statSync(fullPath);

			if (stat.isDirectory()) continue;
			if (!entry.endsWith(".mdx")) continue;

			const content = readFileSync(fullPath, "utf-8");
			const frontMatter = parseFrontMatter(content);

			let slug = "";
			if (frontMatter.title) {
				slug = slugify(frontMatter.title);
			} else if (frontMatter.item) {
				slug = slugify(frontMatter.item);
			} else {
				slug = parse(entry).name;
			}

			let lastmod = new Date().toISOString().split("T")[0];
			if (frontMatter.date) {
				try {
					const date = new Date(frontMatter.date);
					lastmod = date.toISOString().split("T")[0];
				} catch {
					lastmod = stat.mtime.toISOString().split("T")[0];
				}
			} else {
				lastmod = stat.mtime.toISOString().split("T")[0];
			}

			files.push({ slug, lastmod });
		}
	} catch (error) {
		console.warn(`[feed-plugin] Could not read ${dir}:`, error);
	}

	return files;
}

function getBlogPosts() {
	const posts: Array<{
		title: string;
		summary: string;
		date: Date;
		slug: string;
		url: string;
	}> = [];
	const __dirname = process.cwd();
	const contentDir = join(__dirname, "content", "posts");

	try {
		const entries = readdirSync(contentDir);
		for (const entry of entries) {
			if (!entry.endsWith(".mdx")) continue;

			const fullPath = join(contentDir, entry);
			const content = readFileSync(fullPath, "utf-8");
			const frontMatter = parseFrontMatter(content);

			if (!frontMatter.title || !frontMatter.date) continue;

			const slug = slugify(frontMatter.title);

			posts.push({
				title: frontMatter.title,
				summary: frontMatter.summary || "",
				date: new Date(frontMatter.date),
				slug,
				url: `${SITE_URL}/blog/${slug}`,
			});
		}
	} catch (error) {
		console.warn("[feed-plugin] Could not read posts:", error);
	}

	return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

function generateRssFeed(options: FeedPluginOptions = {}): string {
	const siteUrl = options.siteUrl || SITE_URL;
	const siteTitle = options.siteTitle || SITE_TITLE;
	const siteDescription = options.siteDescription || SITE_DESCRIPTION;

	const posts = getBlogPosts();
	const lastBuildDate = new Date().toUTCString();

	const items = posts
		.map((post) => {
			const pubDate = post.date.toUTCString();
			const description = escapeXml(post.summary);

			return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${post.url}</link>
      <guid isPermaLink="true">${post.url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>`;
		})
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en-US</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}

function generateSitemap(options: FeedPluginOptions = {}): string {
	const siteUrl = options.siteUrl || SITE_URL;
	const today = new Date().toISOString().split("T")[0];

	const entries: Array<{
		url: string;
		lastmod: string;
		changefreq: string;
		priority: number;
	}> = [];

	// Static pages
	entries.push(
		{
			url: `${siteUrl}/`,
			lastmod: today,
			changefreq: "weekly",
			priority: 1.0,
		},
		{
			url: `${siteUrl}/thangs`,
			lastmod: today,
			changefreq: "weekly",
			priority: 0.8,
		},
		{
			url: `${siteUrl}/blog`,
			lastmod: today,
			changefreq: "daily",
			priority: 0.9,
		},
	);

	// Blog posts
	const posts = getMdxFiles("posts");
	for (const post of posts) {
		entries.push({
			url: `${siteUrl}/blog/${post.slug}`,
			lastmod: post.lastmod,
			changefreq: "monthly",
			priority: 0.7,
		});
	}

	// Projects
	const projects = getMdxFiles("projects");
	for (const project of projects) {
		entries.push({
			url: `${siteUrl}/project/${project.slug}`,
			lastmod: project.lastmod,
			changefreq: "monthly",
			priority: 0.7,
		});
	}

	// Thangs
	const thangs = getMdxFiles("thangs");
	for (const thang of thangs) {
		entries.push({
			url: `${siteUrl}/thangs/${thang.slug}`,
			lastmod: thang.lastmod,
			changefreq: "monthly",
			priority: 0.6,
		});
	}

	const urls = entries
		.map(
			(entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
		)
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function feedPlugin(options: FeedPluginOptions = {}): Plugin {
	const rssContent = () => generateRssFeed(options);
	const sitemapContent = () => generateSitemap(options);

	return {
		name: "feed-plugin",
		configureServer(server) {
			// Serve RSS feed in dev mode
			server.middlewares.use("/feed.xml", (req, res, next) => {
				res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
				res.end(rssContent());
			});

			// Serve sitemap in dev mode
			server.middlewares.use("/sitemap.xml", (req, res, next) => {
				res.setHeader("Content-Type", "application/xml; charset=utf-8");
				res.end(sitemapContent());
			});
		},
		writeBundle(options, bundle) {
			// Write files during build
			const outDir = options.dir || "dist/client";
			try {
				writeFileSync(join(outDir, "feed.xml"), rssContent());
				console.log("✅ [feed-plugin] feed.xml generated");
			} catch (error) {
				console.error("❌ [feed-plugin] Failed to write feed.xml:", error);
			}
			try {
				writeFileSync(join(outDir, "sitemap.xml"), sitemapContent());
				console.log("✅ [feed-plugin] sitemap.xml generated");
			} catch (error) {
				console.error("❌ [feed-plugin] Failed to write sitemap.xml:", error);
			}
		},
	};
}
