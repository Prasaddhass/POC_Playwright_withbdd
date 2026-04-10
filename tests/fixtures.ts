import { test as base } from 'playwright-bdd';

// Extend the base test if you want to add fixtures later
export const test = base;
export const expect = test.expect;