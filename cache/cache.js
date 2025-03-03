import { Redis } from "ioredis"

export default {
  async fetch(req, env) {
    const redis = new Redis("redis://", { password: "password" });
    redis.ping()
    if (req.method == "GET") {
      console.log("cachematch");
      for (const pair of req.headers.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      console.log(`cacheurl: ${req.url}`);
      console.log(`cachebody: ${await req.text()}`);
      return new Response("cachedresp");
    }
    if (req.method == "PUT") {
      console.log("cacheput");
      const parsed = new URL(req.url);
      console.log(`parsed path: ${parsed.pathname}`);
      for (const pair of req.headers.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      console.log(`cacheurl : ${req.url}`);
      console.log(`cachebody: ${await req.text()}`);
      return new Response("a");
    }

    if (req.method == "PURGE") {
      console.log("cachedelete");
      console.log(`cache url: ${req.url}`);
      for (const pair of req.headers.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      console.log(`cachepurge: ${req.url}`);
      console.log(`cache: ${await req.text()}`);
      return new Response("test");
    }
  },
};
