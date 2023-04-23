// build.ts
import { Drash } from "./deps.ts";
import server from "./app.ts";

// Define the directories
const inputDirectory = "./pages";
const outputDirectory = "./dist";

// Compile static files
await Drash.Compilers.TemplateEngine.compileTemplates(
  inputDirectory,
  outputDirectory,
);

// Serve the files (optional, for testing purposes)
await server.run({
  hostname: "localhost",
  port: 8080,
});
