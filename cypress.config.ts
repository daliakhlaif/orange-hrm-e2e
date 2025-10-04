import { defineConfig } from "cypress";
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",

  },

  env: {
    allure: true,
    allureResults: "allure-results"
  }
});
