export default {
  async fetch(req, env) {
    console.log("test");
    return new Response("Hello World\n");
  },
};
