import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  retries: 1, //
  use: {
    headless: true, 
    screenshot: 'on', 
    video: 'on', 
  },
  reporter: "allure-playwright", 
  outputDir: './videos', 
});
