const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  video: true,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 60000,
  viewportWidth:1920,
  viewportHeight: 1080,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
