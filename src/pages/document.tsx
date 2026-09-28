// @ts-nocheck
import { Body, Head } from "kiru/router"
import { watchSystemTheme } from "../utils/theme"
import "../global.css"

// Follow the OS theme live. Runs on the client only (the inline init script
// in the layout handles the first paint, including SSG). A stored manual
// choice always wins.
watchSystemTheme();

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Head.Outlet />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <Body.Outlet />
    </html>
  )
}
