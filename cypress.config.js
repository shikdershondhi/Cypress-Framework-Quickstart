const { defineConfig } = require('cypress')

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
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
