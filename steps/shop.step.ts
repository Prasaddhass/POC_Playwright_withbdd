import { createBdd } from 'playwright-bdd';
import { test, expect } from '../tests/fixtures';
import { ShopPage } from '../pages/ShopPage';

const { Given, When, Then } = createBdd(test);

let shopPage: ShopPage;

Given('the user on the shop page where items are shown', async ({ page }) => {
  shopPage = new ShopPage(page);
  await shopPage.navigate();
});

When('the user clicks the add cart button of the item {string}', async ({}, productName: string) => {
  await shopPage.addProductToCart(productName);
});

Then('the selected item {string} should be added to the cart', async ({}, productName: string) => {
  await shopPage.verifyProductInCart(productName);
});