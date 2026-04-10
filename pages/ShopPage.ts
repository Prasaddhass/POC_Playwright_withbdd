import { Page, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { log } from 'console';
import { log } from 'node:console';

export class ShopPage {
  // Locators
  selectedProductAddButton: any;
  cartCheckOutButton: any;
  loginPage: LoginPage;
//   passwordInput: any;
//   loginButton: any;
//   dashboardHeader: any;
//   invalidUsernamePasswordMessage: any;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(page);
  }

   async navigate() {
    
    await this.page.goto('https://rahulshettyacademy.com/angularpractice/shop');
  }

   async addProductToCart(productName: string) {

    const blackberryCard = this.page.locator('.card', {
    has: this.page.getByRole('link', { name: productName })
    });

    await expect(blackberryCard).toBeVisible();
    this.selectedProductAddButton = blackberryCard.locator('.card-footer').getByRole('button', { name: /Add/i });
    await expect(this.selectedProductAddButton).toBeVisible();
    await this.selectedProductAddButton.click();
   }

    async verifyProductInCart(productName: string) {
        this.cartCheckOutButton = await this.page.locator('a.nav-link.btn.btn-primary');
        await expect(this.cartCheckOutButton).toBeVisible();
        await this.cartCheckOutButton.click();
        let blackberryLink = await this.page.locator('.media-body').getByRole('link', { name: productName });
        await expect(blackberryLink).toBeVisible();
    }


}