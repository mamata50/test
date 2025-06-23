const { test } = require('@playwright/test');

test('Open OrangeHRM website', async ({ page }) => {
  await page.goto('https://www.orangehrm.com/');
});