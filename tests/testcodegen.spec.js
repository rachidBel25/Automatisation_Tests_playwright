import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://latavernedutesteur.fr/2023/10/16/istqb-le-processus-de-test/');
  await page.pause()
  await page.getByRole('searchbox', { name: 'Rechercher' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher' }).fill('condition de test');
  await page.getByRole('searchbox', { name: 'Rechercher' }).press('Enter');
  await page.getByRole('button', { name: 'Rechercher' }).click();
  await page.getByRole('link', { name: 'Liens utiles' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Offres Jooble' }).click();
  const page1 = await page1Promise;
  await page1.close();
});

// Start waiting for request before goto. Note no await.
test('test exemple ', async ({ page }) => {
await page.pause();
const requestPromise = page.waitForRequest('**/*logo*.png');
await page.goto('https://wikipedia.org');
const request = await requestPromise;
console.log(request.url());
});