import { Page, expect } from '@playwright/test';

export class LoginPage {
  // Locators
  usernameInput: any;
  passwordInput: any;
  loginButton: any;
  dashboardHeader: any;
  invalidUsernamePasswordMessage: any;

  constructor(private page: Page) {
    this.usernameInput = this.page.locator('#username');
    this.passwordInput = this.page.locator('#password');
    this.loginButton = this.page.locator('#signInBtn');
    this.dashboardHeader = this.page.locator('h1:has-text("Dashboard")');
    this.invalidUsernamePasswordMessage = this.page.locator('[style*="block"]');
  }

  // Actions
  async navigate() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async validLoginPageLanded() {
    //await expect(this.dashboardHeader).toBeVisible();
  
    await expect(this.page).toHaveURL('/angularpractice/shop'); 
    let url = await this.page.url();
    console.log("Current URL: " + url);// Replace with your dashboard URL
  }

  async verifyInvalidUsernamePasswordMessage(){
    await expect(this.invalidUsernamePasswordMessage).toBeVisible();
    let errorMessage = await this.invalidUsernamePasswordMessage.textContent();
    expect(errorMessage).toContain('Incorrect username/password');
    console.log("Error Message: " + errorMessage);
  }

  async verifyMissingUsernameMessage(){
    await expect(this.invalidUsernamePasswordMessage).toBeVisible();
    let errorMessage = await this.invalidUsernamePasswordMessage.textContent();
    expect(errorMessage).toContain('Empty username/password');
    console.log("Error Message: " + errorMessage);
  }

  async verifyMissingPasswordMessage(){
    await expect(this.invalidUsernamePasswordMessage).toBeVisible();
    let errorMessage = await this.invalidUsernamePasswordMessage.textContent();
    expect(errorMessage).toContain('Empty username/password');
    console.log("Error Message: " + errorMessage); 
  }
}