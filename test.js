import { assert } from "https://deno.land/std@0.216.0/assert/mod.ts";
import enhance from './mod.js'

Deno.test('enhancer exists', () => {
  assert (enhance, 'exists')
})
