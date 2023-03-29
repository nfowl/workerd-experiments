export default {
  async fetch(req, env) {
    console.log("test");
    const value = await env.KV_NS.get("test");
    console.log(`internal: ${value}`);
    await env.KV_NS.put("test", "test", { metadata: { a: "b" } });
    return fetch("https://www.httpbin.org/headers");
    // return new Response("Hello World\n");
  },
};
