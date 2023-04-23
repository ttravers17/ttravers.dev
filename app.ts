// app.ts
import { Drash } from "./deps.ts";

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [],
});

export default server;
