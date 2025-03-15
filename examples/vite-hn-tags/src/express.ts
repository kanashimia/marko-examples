import { routerMiddleware } from "@marko/run-adapter-node/middleware";
import express from "express";
import path from "path";

const { NODE_ENV = "development", PORT = 3000 } = process.env;

console.time("Start");

express()
  .use("/assets", express.static(path.join(import.meta.dirname, "public/assets")))
  .use(routerMiddleware())
  .listen(PORT, () => {
    console.log("listening");
    console.timeEnd("Start");
    console.log(`Env: ${NODE_ENV}`);
    console.log(`Address: http://localhost:${PORT}`);
  });
