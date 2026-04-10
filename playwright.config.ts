import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const bddConfig = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',  
  
});

export default defineConfig({
  testDir: bddConfig || 'tests',
  timeout: 30 * 1000,
  use: {
    browserName: 'chromium',
    headless: true,
    baseURL: 'https://rahulshettyacademy.com/loginpagePractise/', // Replace with your application URL
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['list'], ['html', { open: 'never' }]],
});