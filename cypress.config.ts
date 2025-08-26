import { defineConfig } from "cypress";
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    env: {
        BASE_URL: process.env.BASE_URL,
        JCN: process.env.JCN,
        JPD: process.env.JPD,
    },
  e2e: {
    setupNodeEvents(on, config) {
    },
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      viewportHeight: 1080,
      viewportWidth: 1920,
      defaultCommandTimeout: 8000,
      experimentalRunAllSpecs: true,
      numTestsKeptInMemory: 10,
      pageLoadTimeout: 20000,
      requestTimeout: 15000,
      chromeWebSecurity: false,
      includeShadowDom: true,
      watchForFileChanges: false,
      experimentalModifyObstructiveThirdPartyCode: true,
      experimentalMemoryManagement: true,
      experimentalWebKitSupport: true,
      scrollBehavior: 'center'
  },
});
