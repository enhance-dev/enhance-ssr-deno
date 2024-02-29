import { FreshContext } from "$fresh/server.ts";
import ssr from "../../enhance-wasm-ssr.js"

export const handler = async (_req: Request, _ctx: FreshContext): Response => {

  const page = await ssr({markup:`
      <my-header>Welcome to the homepage!</my-header>
      <p>Here is some content</p>
  `});

  return new Response(page, {
    headers: new Headers({
      "Content-Type": "text/html",
    }),
  });
};

