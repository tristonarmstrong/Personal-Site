import homepage from "./src/index.html";

const SERVER_PORT = 3000
console.log(`==== details ====`)
console.log(`address: http://localhost`)
console.log(`port: ${SERVER_PORT}`)
console.log(`mode: hot`)
console.log(`=================`)

Bun.serve({
  port: SERVER_PORT,
  // Add HTML imports to `static`
  static: {
    // Bundle & route index.html to "/"
    "/": homepage,
    "/image-3.jpg": new Response(await Bun.file("./src/resources/image-3.jpg").bytes(), {
      headers: {
        "Content-Type": "image/x-icon"
      }
    })
  },

  // Enable development mode for:
  // - Detailed error messages
  // - Rebuild on request
  development: true,

  // Handle API requests
  async fetch(_req) {
    // ...your API code
    // if (req.url.endsWith("/api/users")) {
    //   const users = await Bun.sql`SELECT * FROM users`;
    //   return Response.json(users);
    // }

    // Return 404 for unmatched routes

    return new Response("Not Found", { status: 404 });
  },
});
