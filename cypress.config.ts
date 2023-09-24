import { defineConfig } from "cypress";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
export default defineConfig({
  projectId: 'agsfgi',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      // implement node event listeners here
      return config;
    },
    env: {
      allure: true,
      download_dir: './cypress/downloads',
      reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/reports/mochawesome-report",
        overwrite: true,
        html: true,
        json: true
      }
      },


    },
  });

