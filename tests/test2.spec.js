// @ts-check
import { test, expect } from '@playwright/test';

test('test cogen Picklocator', async ({ page })=>{
    await page.goto("https://demoqa.com/")
    await page.pause();
  await page.getByText('Alerts, Frame & Windows').click();
  await page.getByText('Frames', { exact: true }).click();
  await page.locator('#frame1').contentFrame().locator('html').click();
  await page.getByText('Elements').click();
//   await page.getByRole('listitem').filter({ hasText: /^Links$/ }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'No Content' }).click();
  await page.getByText('Web Tables').click();
  await page.locator('#delete-record-1 > svg > path').click();
  await page.locator('#edit-record-2 > svg').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Alden12');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Cantrell145');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('alden12@gmail.com');
  await page.getByRole('textbox', { name: 'Age' }).click();
  await page.getByRole('textbox', { name: 'Age' }).fill('45');
  await page.getByRole('textbox', { name: 'Salary' }).click();
  await page.getByRole('textbox', { name: 'Salary' }).fill('4000');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.close();
});
