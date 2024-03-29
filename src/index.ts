import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello, Elysia 🦊");
app.get("/api", (req) => {
  const { lng, lat } = req.query;
  return `Hello, ${lng} ${lat}!`;
});


Bun.serve({
  port: 3000,
  fetch: app.fetch,
});
