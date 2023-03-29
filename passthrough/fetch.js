export default {
  async fetch(req, env) {
    console.log("fetcher");
    console.log(`fetcher: ${req.url}`);
    return fetch("https://www.httpbin.org/headers");
  },
};
