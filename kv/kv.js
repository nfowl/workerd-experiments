export default {
  async fetch(req, env) {
    for (const pair of req.headers.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    console.log(`url: ${req.url}`);
    console.log(`method: ${req.method}`);
    const body = await req.text();
    console.log(`body: ${body}`);
    return new Response("Hello kv\n");
  },
};
