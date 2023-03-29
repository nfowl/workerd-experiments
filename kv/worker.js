export default {
  async fetch(req, env) {
    console.log("test");
    const value = await env.KV_NS.get("test");
    const value2 = await env.KV_2.get("test");
    console.log(`internal: ${value}`);
    console.log(`external: ${value2}`);
    await env.KV_2.put("test", "test", { metadata: { a: "b" } });
    return new Response("Hello World\n");
  },
};
