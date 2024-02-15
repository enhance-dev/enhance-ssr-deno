import { assert } from "https://deno.land/std@0.216.0/assert/mod.ts";
import enhance from './mod.js'

Deno.test('enhancer exists', () => {
  assert (enhance, 'exists')
})

function Header ({html}) {
  return html`<header>header here</header>`
}

function Footer ({html}) {
  return html`<footer>footer here</footer>`
}

function Layout ({html}) {
  return html`<my-header></my-header><slot/><my-footer></my-footer>`
}

Deno.test('can render', () => {
  let html = enhance({
    elements: {
      'my-header': Header,
      'my-footer': Footer,
      'my-layout': Layout
    }
  })
  let result = html`<my-layout><b>hi</b></my-layout>`
  assert(result, 'ssr!')
  console.log(result)
})
