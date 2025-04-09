import { bodyAdd } from "./lib.ts"
import { header } from "./components/header.ts"
import { main } from "./components/main.ts"
import { footer } from "./components/footer.ts"

bodyAdd([
  header(),
  main(),
  footer()
])
