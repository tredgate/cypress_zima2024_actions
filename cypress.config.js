const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    watchForFileChanges: false,
  },
});
