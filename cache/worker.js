export default {
  async fetch(req, env) {
    console.log("test");
    const value = await env.KV_NS.get("test");
    console.log(`internal: ${value}`);
    await env.KV_NS.put("test", "test", { metadata: { a: "b" } });
    let cache = caches.default;
    await cache.match("https://www.httpbin.org/headers");
    const data = await fetch("https://www.httpbin.org/headers");
    let cache2 = await caches.open("ayo");
    // await cache.put("https://www.httpbin.org/headers", data);
    await cache2.put("https://www.google.com", data);
    const test = await cache2.delete("https://www.httpbin.org/headers");
    return new Response("Hello World\n");
  },
};
