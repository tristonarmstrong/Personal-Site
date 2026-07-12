import * as Kiru from "kiru";
import { createElement } from "kiru";
import { Head } from "kiru/router";
function SEO({
  title,
  description,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Triston Armstrong",
  tags
}) {
  const siteName = "Triston Armstrong";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Senior Software Engineer, father, and husband with a passion for building utility apps and automating the boring stuff.";
  const metaDescription = description || defaultDescription;
  const siteUrl = "https://tristonarmstrong.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/avatar.webp`;
  const metaImage = image ? image.startsWith("http") ? image : `${siteUrl}${image}` : defaultImage;
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
    tags
  });
  const tags_elements = [
    /* @__PURE__ */ createElement("title", null, fullTitle),
    /* @__PURE__ */ createElement("meta", { name: "description", content: metaDescription }),
    // Open Graph
    /* @__PURE__ */ createElement("meta", { property: "og:title", content: fullTitle }),
    /* @__PURE__ */ createElement("meta", { property: "og:description", content: metaDescription }),
    /* @__PURE__ */ createElement("meta", { property: "og:image", content: metaImage }),
    /* @__PURE__ */ createElement("meta", { property: "og:url", content: fullUrl }),
    /* @__PURE__ */ createElement("meta", { property: "og:type", content: type || "website" }),
    /* @__PURE__ */ createElement("meta", { property: "og:site_name", content: siteName }),
    // Twitter
    /* @__PURE__ */ createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ createElement("meta", { name: "twitter:site", content: "@triston_armstr" }),
    /* @__PURE__ */ createElement("meta", { name: "twitter:creator", content: "@triston_armstr" }),
    /* @__PURE__ */ createElement("meta", { name: "twitter:title", content: fullTitle }),
    /* @__PURE__ */ createElement("meta", { name: "twitter:description", content: metaDescription }),
    /* @__PURE__ */ createElement("meta", { name: "twitter:image", content: metaImage }),
    // JSON-LD Structured Data
    /* @__PURE__ */ createElement("script", { type: "application/ld+json", innerHTML: JSON.stringify(jsonLd) })
  ];
  if (type === "article" && publishedTime) {
    tags_elements.push(
      /* @__PURE__ */ createElement("meta", { property: "article:published_time", content: publishedTime })
    );
    if (modifiedTime) {
      tags_elements.push(
        /* @__PURE__ */ createElement("meta", { property: "article:modified_time", content: modifiedTime })
      );
    }
    if (author) {
      tags_elements.push(/* @__PURE__ */ createElement("meta", { property: "article:author", content: author }));
    }
    if (tags && tags.length > 0) {
      for (const tag of tags) {
        tags_elements.push(/* @__PURE__ */ createElement("meta", { property: "article:tag", content: tag }));
      }
    }
  }
  tags_elements.push(/* @__PURE__ */ createElement("link", { rel: "canonical", href: fullUrl }));
  tags_elements.push(
    /* @__PURE__ */ createElement(
      "link",
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: `${siteName} - Blog Feed`,
        href: `${siteUrl}/feed.xml`
      }
    )
  );
  const cleanTags = tags_elements.filter(
    (t) => t !== null && typeof t === "object" && "type" in t
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
  tags
}) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "BlogPosting" : "WebPage",
    name: title,
    description,
    url,
    image
  };
  if (type === "article") {
    return {
      ...baseSchema,
      headline: title.replace(` | ${siteName}`, ""),
      author: {
        "@type": "Person",
        name: author,
        url: "https://tristonarmstrong.com",
        sameAs: [
          "https://github.com/tristonarmstrong",
          "https://x.com/triston_armstr",
          "https://www.linkedin.com/in/triston-armstrong-7248b229b"
        ]
      },
      publisher: {
        "@type": "Person",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: "https://tristonarmstrong.com/avatar.webp"
        }
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url
      },
      keywords: tags?.join(", ") || "",
      articleSection: "Technology",
      inLanguage: "en-US"
    };
  }
  if (url === "https://tristonarmstrong.com" || url === "https://tristonarmstrong.com/") {
    return {
      ...baseSchema,
      "@graph": [
        baseSchema,
        {
          "@type": "Person",
          "@id": "https://tristonarmstrong.com/#person",
          name: siteName,
          jobTitle: "Senior Software Engineer",
          url: "https://tristonarmstrong.com",
          image: "https://tristonarmstrong.com/avatar.webp",
          sameAs: [
            "https://github.com/tristonarmstrong",
            "https://x.com/triston_armstr",
            "https://www.linkedin.com/in/triston-armstrong-7248b229b"
          ],
          description
        }
      ]
    };
  }
  return baseSchema;
}
export {
  SEO as S
};
