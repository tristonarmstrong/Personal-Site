import { bodyAdd } from "./lib.ts"
import { header } from "./components/header.ts"
import { main } from "./components/main.ts"
import { footer } from "./components/footer.ts"
import { nav } from "./components/nav.ts"

bodyAdd([
  nav(),
  header(),
  main(),
  footer()
], ["rubik-regular flex flex-col max-w-lg m-auto bg-black gap-10 text-gray-200",
  "gradient"
])
