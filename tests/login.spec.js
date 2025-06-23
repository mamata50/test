import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  

// await page.getByRole('img', { name: 'Third slide' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('mamtha');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('sid');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator("//div[@id='tbodyid']//div[@class='col-lg-4 col-md-6 mb-4'][1]").screenshot({path:'tests/screenshots/product.png'});
  await page.waitForTimeout(3000); // Wait for 3 seconds to ensure the product is loaded
 /* await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();*/
});