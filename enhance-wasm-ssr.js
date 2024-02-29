import createPlugin from 'https://raw.githubusercontent.com/extism/js-sdk/main/src/mod.ts';
import myHeader from "./elements/my-header.js"

const elements = JSON.stringify({ "my-header": myHeader.toString() })
const plugin = await createPlugin(
  'enhance-ssr.wasm',
  {
    useWasi: true,
    config: { elements }
  }
);


export default async function ssr(data) {
  const output = await plugin.call("ssr", JSON.stringify(data));
  return JSON.parse(output.text()).document
}




