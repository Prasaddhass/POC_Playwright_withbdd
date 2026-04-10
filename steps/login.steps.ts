import { createBdd } from 'playwright-bdd';
import { test, expect } from '../tests/fixtures';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd(test);

let loginPage: LoginPage;

Given('the user navigates to the login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When(
  'the user enters username {string} and password {string}',
  async ({}, username: string, password: string) => {
    await loginPage.login(username, password);
  }
);

When('clicks on the login button', async () => {
  // The click is already handled in the login method.
});

Then('the user should be redirected to the dashboard', async () => {    
  await loginPage.validLoginPageLanded();   
});

Then('an error message {string} should be displayed', async () => {    
  await loginPage.verifyInvalidUsernamePasswordMessage();   
});

Then('a mising username field and {string} should be displayed', async () => {
  await loginPage.verifyMissingUsernameMessage();    
});

Then('a mising password field and {string} should be displayed', async () => {
  await loginPage.verifyMissingPasswordMessage();    
});

