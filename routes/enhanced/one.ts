import { FreshContext } from "$fresh/server.ts";
import enhance from "../../enhance-ssr.js";

function Header ({html}) {
  return html`<header>header here</header>`
}

function Footer ({html}) {
  return html`<footer>footer here</footer>`
}

function Layout ({html}) {
  return html`<my-header></my-header><slot/><my-footer></my-footer>`
}
let html = enhance({
  elements: {
    'my-header': Header,
    'my-footer': Footer,
    'my-layout': Layout
  }
})

export const handler = (_req: Request, _ctx: FreshContext): Response => {

  const page =html`
      <my-header>Welcome to the homepage!</my-header>
      <p>Here is some content</p>
  `;

  return new Response(page, {
    headers: new Headers({
      "Content-Type": "text/html",
    }),
  });
};

