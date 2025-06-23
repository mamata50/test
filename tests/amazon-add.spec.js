import{test,expect}from'@playwright/test';
import { amazon } from '../Pages/Amazon.js';
test('Add iPhone 13 512GB to Amazon cart', async ({ page }) => {
  const amazonpage=new amazon(page);
  await amazonpage.goto()
  await amazonpage.searchproduct('Apple iPhone 13 128gb');
  await amazonpage.selectproduct('Apple iPhone 13 (512GB) - Blue');
  await page.waitForTimeout(3000); // Wait for 2 seconds to ensure the product page loads
  await amazonpage.addtocart();

  
})