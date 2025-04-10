import { bodyAdd, h } from "./lib.ts"
import { header } from "./components/header.ts"
import { main } from "./components/main.ts"
import { footer } from "./components/footer.ts"
import { bgImage } from "./components/bgImage.ts"

bodyAdd([
  bgImage(),
  h("div", [
    header(),
    main(),
    footer()
  ], "content")
])
