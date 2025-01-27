import homepage from "./app/index.html";

console.log("Serving Bun Server @ http://localhost:3000")
Bun.serve({
  // Add HTML imports to `static`
  static: {
    // Bundle & route index.html to "/"
    "/": homepage,
  },

  // Enable development mode for:
  // - Detailed error messages
  // - Rebuild on request
  development: true,

  // Handle API requests
  async fetch(req) {
    // ...your API code
    // if (req.url.endsWith("/api/users")) {
    //   const users = await Bun.sql`SELECT * FROM users`;
    //   return Response.json(users);
    // }

    // Return 404 for unmatched routes
    return new Response("Not Found", { status: 404 });
  },
});
