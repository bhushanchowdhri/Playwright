import { chromium, defineConfig, devices } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';
import CustomReporter from './custom-reporter';

const testDir = defineBddConfig({
  features: 'Features/*.feature',
  steps: 'Stepdefinitions/*.ts',
});

export default defineConfig({
  timeout: 12000000,
  testDir,
  reporter: [
    cucumberReporter("html",{
      outputFile:"cucumber-report/index.html",
      externalAttachments:true,
      attachmentsBaseURL:"http://127.0.0.1:8080/data",
    }),
    ["html",{open:"never"}],
    ['json', { outputFile: 'cucumber-report/cucumber-report.json' }],
   // ['./custom-reporter'], // Use your custom reporter
  ],
  use: {
    actionTimeout: 10000,
    screenshot: 'on',
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName:'chromium',
        launchOptions: {
          args: ['--start-maximized'],
        },
        viewport: null,
      },
    },
  ],
  workers: 1,
  fullyParallel: true,
});
