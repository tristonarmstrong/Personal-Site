import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";

import { definePageConfig, Link, useFileRouter } from "kiru/router"
import { allPosts } from 'content-collections'
import { Avatar } from "../../../components/Avatar";

export default function Page() {
  const { state: { params } } = useFileRouter()

  const postId = allPosts.findIndex(x => x.slug == params.slug)
  const post = allPosts[postId]
  const nextPost = postId !== allPosts.length - 1 ? allPosts[postId + 1] : allPosts[0]

  if (!post?.mdx) {
    return <div>Oops something went wrong rendering the page</div>
  }

  return (
    <article className={"blogpost markdown-body"}>
      <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />
      <header>
        <h1 style={`view-transition-name: link-h-${params.slug}`} className="text-2xl font-bold">{post.title}</h1>
        <div className="flex gap-2">
          <Avatar />
          <div className="mb-4">
            Triston Armstrong
            <p className="text-gray-400 text-sm">{post.date.toDateString()}</p>
          </div>
        </div>
      </header>

      <main>
        <MDXContent code={post!.mdx} />
      </main>

      <footer>
        <h3>Check out my next thang!</h3>
        <Link to={`/blog/${nextPost.slug}`} className={"border border-dashed rounded-lg px-2 py-2 opacity-40 hover:opacity-70 cursor-pointer block transition"} style={"text-decoration: unset;"}>
          <div className={"text-md font-bold text-white"}>{nextPost.title}</div>
          <div className={"text-sm"}>{nextPost.summary}</div>
        </Link>
      </footer>
    </article>
  )
}

function useMDXComponent(code: string) {
  const scope = { Kiru, _jsx_runtime };
  const fn = new Function(...Object.keys(scope), code);
  return fn(...Object.values(scope)).default;
}

function MDXContent({ code, ...props }: { code: string }) {
  const Component = useMDXComponent(code);
  return /* @__PURE__ */ jsx(Component, { ...props });
}

export const config = definePageConfig({
  generateStaticParams: () => {
    return allPosts.map(p => ({ slug: p.slug }))
  }
})
