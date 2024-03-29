import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello, Elysia 🦊");

Bun.serve({
  port: 3000,
  fetch: app.fetch,
});
