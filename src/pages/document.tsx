import { Body, Head } from "kiru/router"
import "../global.css"

export default function Document() {
  return (
    <html lang="en">
      <head>
		    <meta charset="UTF-8"/>
		    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		    <title>Triston Armstrong</title>
        <Head.Outlet />
      </head>
      <Body.Outlet />
    </html>
  )
}
