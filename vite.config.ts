import contentCollections from "@content-collections/vite";
import { defineConfig } from "vite";
import kiru from "vite-plugin-kiru"

export default defineConfig({
  plugins: [
    contentCollections(),
    // @ts-ignore
    kiru({
      loggingEnabled: true,
      ssg: {
        transition: true
      },
    })
  ],
  server: {
    watch: {
      usePolling: true
    }
  }
})
