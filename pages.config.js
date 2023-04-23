// pages.config.js
module.exports = {
    build: {
      // Use Deno to run your custom build script
      command: 'deno run --allow-all build.ts',
      // Replace the following directory with the output directory of your build process
      outputDirectory: 'dist',
    },
  };
  