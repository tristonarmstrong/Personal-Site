import { mount } from "kiru"
import "./global.css"
import { FileRouter } from "kiru/router"

mount(<FileRouter
  config={{
    pages: import.meta.glob("/**/index.{tsx, jsx}"),
    layouts: import.meta.glob("/**/layout.{tsx, jsx}"),
    transition: true
  }}
/>,
  // biome-ignore lint/style/noNonNullAssertion: this is needed
  document.getElementById("app")!
)
