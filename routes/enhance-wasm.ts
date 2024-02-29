import { FreshContext } from "$fresh/server.ts";
import ssr from "../enhance-wasm-ssr.js"

function myHeader({ html, state }) {
  return html`
    <style>h1 { color: red; }</style><h1><slot></slot></h1>
    <p>Message: ${state?.store?.message || "no message"}</p>`
}
const elements = { "my-header": myHeader.toString() }


export const handler = async (_req: Request, _ctx: FreshContext): Response => {

  const page = await ssr({
    markup:`
      <my-header>Enhanced!</my-header>
    `, 
    elements,
    initialState: {message:"Enhance SSR Wasm"}
  });

  return new Response(page, {
    headers: new Headers({
      "Content-Type": "text/html",
    }),
  });
};

