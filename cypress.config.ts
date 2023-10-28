import { defineConfig } from "cypress";
//import XLSX
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
export default defineConfig({
  projectId: 'agsfgi',
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    setupNodeEvents(on, config) {
      allureWriter(on, config);

      on('task', {
        convertXlsxToJson(xlsxPath){
         // const workbook = XLSX.readFile(xlsxPath); 
        }
      })




      return config;
    },
    env: {
      snapshotOnly: true,
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

