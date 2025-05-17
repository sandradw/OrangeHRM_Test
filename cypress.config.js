const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 30000, //dalam milisecond
    baseUrl : "https://opensource-demo.orangehrmlive.com/"
  },
});