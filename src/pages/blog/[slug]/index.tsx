import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";

import { useFileRouter } from "kiru/router"
import { allPosts } from 'content-collections'
import { Avatar } from "../../../components/Avatar";

export default function Page() {
  const { state: { params } } = useFileRouter()

  const post = allPosts.find(x => x.slug == params.slug)

  if (!post?.mdx) {
    return <div>Oops something went wrong rendering the page</div>
  }

  return (
    <article className={"blogpost markdown-body"}>
      <h1 style={`view-transition-name: link-h-building-ci-cd`} className="text-2xl font-bold">{post.title}</h1>

      <div className="flex gap-2">
        <Avatar />
        <div className="mb-4">
          Triston Armstrong
          <p className="text-gray-400 text-sm">{post.date.toDateString()}</p>
        </div>
      </div>

      <MDXContent code={post!.mdx} />
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
