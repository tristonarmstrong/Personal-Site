import * as Kiru from "kiru"
import { Head } from "kiru/router"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
}

export function SEO({
  title,
  description,
  image,
  url,
  type = "website",
  publishedTime,
}: SEOProps) {
  const siteName = "Triston Armstrong"
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const defaultDescription = "Senior Software Engineer, father, and husband with a passion for building utility apps and automating the boring stuff."
  const metaDescription = description || defaultDescription
  const siteUrl = "https://triston.dev" // Base URL
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const defaultImage = `${siteUrl}/avatar.webp`
  const metaImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : defaultImage

  const tags = [
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
  ]

  // Article specific metadata
  if (type === "article" && publishedTime) {
    tags.push(<meta property="article:published_time" content={publishedTime} />)
  }

  tags.push(<link rel="canonical" href={fullUrl} />)

  // Filter out any potential invalid children just in case
  const cleanTags = tags.filter(t => t !== null && typeof t === 'object' && 'type' in t)

  return Kiru.createElement(Head.Content, {}, ...cleanTags)
}
