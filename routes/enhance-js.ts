import { FreshContext } from "$fresh/server.ts";
import enhance from "../enhance-ssr.js";

function myHeader({ html, state }) {
  return html`
    <style>h1 { color: red; }</style><h1><slot></slot></h1>
    <p>Message: ${state?.store?.message || "no message"}</p>`
}
let html = enhance({
  elements: {
    'my-header': myHeader,
  },
  initialState: {message:"Enhance SSR JS"}
})

export const handler = (_req: Request, _ctx: FreshContext): Response => {

  const page =html`
      <my-header>Enhanced!</my-header>
  `;

  return new Response(page, {
    headers: new Headers({
      "Content-Type": "text/html",
    }),
  });
};

