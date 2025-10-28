import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";

import { useFileRouter } from "kiru/router"
import { allPosts } from 'content-collections'
import { Avatar } from "../../../components/Avatar";

export default function Page() {
  const { state: { params } } = useFileRouter()

  const post = allPosts.find(x => x.slug == params.slug)

  return (
    <article className={"blogpost markdown-body"}>
      {!post?.mdx && <div>Oops something went wrong rendering the page</div>}
      {post?.mdx && <MDXContent code={post!.mdx} components={{ Avatar }} />}
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
