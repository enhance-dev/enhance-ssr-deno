import createPlugin from 'https://raw.githubusercontent.com/extism/js-sdk/main/src/mod.ts';

const plugin = await createPlugin(
  'enhance-ssr.wasm',
  {
    useWasi: true,
  }
);


export default async function ssr(data) {
  const output = await plugin.call("ssr", JSON.stringify(data));
  return JSON.parse(output.text()).document
}




