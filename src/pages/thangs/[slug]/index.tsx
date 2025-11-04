
import * as Kiru from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";

import { useFileRouter } from "kiru/router"
import { allThangs } from 'content-collections'

export default function Page() {
  const { state: { params } } = useFileRouter()

  const thang = allThangs.find(x => x.slug == params.slug)

  if (!thang?.mdx) {
    return <div>Oops something went wrong rendering the page</div>
  }

  return (
    <article className={"blogpost markdown-body"}>
      <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />
      <h1 style={`view-transition-name: link-h-${thang.slug}`} className="text-2xl font-bold w-fit">{thang.item}</h1>
      <div className={"h-100 rounded-lg mb-8"} style={`
        view-transition-name: image-${thang.slug};
        background-image: url(${thang.img});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      `} ></div>
      <MDXContent code={thang!.mdx} />
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
