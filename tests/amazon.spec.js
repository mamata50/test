const { test, expect } = require('@playwright/test');

test('Add iPhone 13 128GB to Amazon cart', async ({ page }) => {
  // Navigate to Amazon India
  await page.goto('https://www.amazon.in');

  // Search for "iphone 13 128gb"
  await page.fill('input#twotabsearchtextbox', 'iphone 13 128gb');
  await page.click('input#nav-search-submit-button');

  // Wait for search results and click the first product
  await page.waitForSelector('.s-search-results [data-component-type="s-search-result"]');
  const [productPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click('.s-search-results [data-component-type="s-search-result"] a.a-link-normal.s-no-outline')
  ]);
  await productPage.bringToFront();
  await productPage.waitForLoadState();

  // Add to cart
  await productPage.waitForSelector('#add-to-cart-button', { timeout: 10000 });
  await productPage.click('#add-to-cart-button');

  // Optionally, verify cart confirmation
  await expect(productPage.locator('text=Added to Cart')).toBeVisible();
});