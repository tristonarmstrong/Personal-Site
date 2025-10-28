import contentCollections from "@content-collections/vite";
import { defineConfig } from "vite"
import kiru from "vite-plugin-kiru"

export default defineConfig({
  plugins: [kiru(), contentCollections()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
