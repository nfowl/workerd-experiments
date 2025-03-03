export default {
  async fetch(req, env) {
    console.log("fetcher");
    for (const pair of req.headers.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    console.log(`url: ${req.url}`);
    console.log(`method: ${req.method}`);
    console.log(`fetcher: ${req.url}`);
    return fetch("https://www.httpbin.org/headers");
  },
};
