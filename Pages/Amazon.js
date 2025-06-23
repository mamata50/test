exports.amazon=
class amazon{
    constructor (page){

        this.page=page
        this.searchbox='Search Amazon.in'
        this.searchbutton='#nav-search-submit-button'
        this.productlink="a-link-normal s-line-clamp-2 s-line-clamp-3-for-col-12 s-link-style a-text-normal"
       // this.product='(//span[contains(text(),'Apple iPhone 13 (512GB) - Starlight')])[1]'

this.addtocartbutton='#add-to-cart-button'
        this.cartconfirmation='Added to Cart'
    
    }
    async goto() {
        await this.page.goto('https://www.amazon.in');
    }
    async searchproduct(productname){
        await this.page.getByPlaceholder(this.searchbox).fill(productname);
        await this.page.click(this.searchbutton);
    }
    async selectproduct(product){
        const productlist=await this.page.$$(this.productlink);
        for(const item of productlist){
            const text=await item.textContent();
            if(product==await item.textContent()){
                await item.click();
                break;
            }
        }}
        async addtocart(){
            await this.page.click(this.addtocartbutton);
            //await this.page.waitForTimeout(3000); // Wait for 3 seconds to ensure the cart confirmation appears
            //await this.page.waitForSelector(this.cartconfirmation, { timeout: 5000 });
            //await this.page.locator(this.cartconfirmation).waitFor({ state: 'visible' });
            await expect(this.page.locator(this.cartconfirmation)).toBeVisible();
        }
        //await expect(this.page.locator(this.cartconfirmation)).toBeVisible();
    
       

        
    


}