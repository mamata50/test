const { test } = require('@playwright/test');
const { AmazonPage } = require('../pages/AmazonPage');

test('Search and add iPhone 13 128GB to cart', async ({ page }) => {
  const amazon = new AmazonPage(page);

  await amazon.goto();
  await amazon.searchProduct('iphone 13 128gb');
  const productPage = await amazon.selectFirstProduct();
  await amazon.addToCart(productPage);
});