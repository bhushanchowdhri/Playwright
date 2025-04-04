import type { FullConfig, Reporter } from '@playwright/test/reporter';
import * as reporter from 'multiple-cucumber-html-reporter';
import * as fs from 'fs';

class CustomReporter implements Reporter {
  async onEnd() {
    console.log('✅ Generating Cucumber HTML report...');
    const jsonDir = 'cucumber-report';
    const reportPath = 'cucumber-report/html';

    if (fs.existsSync(`${jsonDir}/cucumber-report.json`)) {
      reporter.generate({
        jsonDir,
        reportPath,
        metadata: {
          browser: {
            name: 'chrome',
            version: 'latest',
          },
          device: 'Local test machine',
          platform: {
            name: process.platform,
            version: process.version,
          },
        },
      });
      console.log(`📊 Report generated at: ${reportPath}`);
    } else {
      console.error('❌ No JSON report found!');
    }
  }
}

export default CustomReporter;
