import contentCollections from "@content-collections/vite";
import { defineConfig } from "vite"
import kiru from "vite-plugin-kiru"

export default defineConfig({
  plugins: [
    // @ts-ignore
    kiru({
      // ssg: {
      //   dir: "./src/pages",
      //   document: "document.tsx",
      //   page: "index.{tsx,jsx}",
      //   layout: "layout.{tsx,jsx}",
      //   transition: true,
      //   build: {
      //     maxConcurrentRenders: 100
      //   }
      // },
    }),
    contentCollections()
  ],
  server: {
    watch: {
      usePolling: true
    }
  }
})
