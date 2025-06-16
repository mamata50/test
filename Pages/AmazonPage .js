class AmazonPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.amazon.in');
  }

  async searchProduct(product) {
    await this.page.fill('input#twotabsearchtextbox', product);
    await this.page.click('input#nav-search-submit-button');
  }

  async selectFirstProduct() {
    await this.page.waitForSelector('.s-search-results [data-component-type="s-search-result"]');
    // Click the first product link and handle new tab
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.click('.s-search-results [data-component-type="s-search-result"] a.a-link-normal.s-no-outline')
    ]);
    await newPage.bringToFront();
    await newPage.waitForLoadState();
    return newPage;
  }

  async addToCart(productPage) {
    await productPage.waitForSelector('#add-to-cart-button', { timeout: 10000 });
    await productPage.click('#add-to-cart-button');
  }
}

module.exports = { AmazonPage };