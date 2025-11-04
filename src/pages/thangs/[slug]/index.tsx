
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

  // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-big-left-dash-icon lucide-arrow-big-left-dash"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" /><path d="M20 9v6" /></svg>
  return (
    <article className={"blogpost markdown-body h-250"}>
      <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />
      <h1 style={`view-transition-name: link-h-${thang.slug}`} className="text-2xl font-bold w-fit">{thang.item}</h1>

      <div className={"border border-blue-500 h-500"} style={`
              view-transition-name: image-${thang.slug};
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
