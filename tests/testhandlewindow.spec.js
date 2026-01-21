// @ts-check
import { test, expect, chromium } from '@playwright/test';
import console, { log } from 'node:console';

test('test1 handle', async () => {
const browser = await chromium.launch();
const context = await browser.newContext();

const page1 = await context.newPage();
await page1.goto('https://playwright.dev/');
await page1.pause();
await expect(page1).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');





const pagePromise = context.waitForEvent('page');
// await page1.locator('https://github.com/microsoft/playwright').click();
// await page1.getByRole('link', {name : 'Star'}).nth(6).click()

const newPage = await pagePromise;
await expect(newPage).toHaveTitle('Installation | Playwright')

await page1.waitForTimeout(3000);
await newPage.waitForTimeout(3000);

await browser.close();
});






test('test handle', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');
  await browser.close();
});




test('Star ouvre GitHub dans un nouvel onglet', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto('https://playwright.dev/');

  // Attendre le nouvel onglet AVANT le clic
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page1.getByRole('link', { name: 'Star' }).click(),
  ]);

  // Vérifications sur GitHub
  await expect(newPage).toHaveURL(/github\.com\/microsoft\/playwright/);
  await expect(newPage).toHaveTitle(/Playwright/);

  await browser.close();
});


