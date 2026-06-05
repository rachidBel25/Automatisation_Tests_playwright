import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.beforeEach("lancer l url", async ({ page }) => {
  console.log(`Le test est : ${test.info().title}`);
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test(
  "tester connexion le site orangeHrm",
  {
    tag: "@test connexion",
  },
  async ({ page }) => {
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("password").fill("admin123");
    await page.getByRole("button", { name: "Login " }).click();
    const tableaudebord = await page.getByText("Dashboard").first();

    await expect(tableaudebord).toBeVisible();
    await page.getByText('Admin').click();
    await page.screenshot({path :'admin_capture.png'});
    await page.screenshot({ path: 'toute_page1.png', fullPage: true });

    console.log("test 1 connexion assertion est faite");
  },
);

test(
  "teste deconnexion le site orangeHrm",
  {
    tag: "@test deconnexion",
  },
  async ({ page }) => {
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("password").fill("admin123");
    await page.getByRole("button", { name: "Login " }).click();
    const tableaudebord = await page.getByText("Dashboard").first();

    await expect(tableaudebord).toBeVisible();
    // acliquer sur alt image
    await page.getByAltText('profile picture').click();
    await page.getByRole("menuitem", { name: "Logout" }).click();
    await page.screenshot({ path: 'toute_page2.png', fullPage: true });
    console.log("test 2 deconnexion assertion est faite");
  },
);

// npx playwright test tests/test3.spec.js --project=chromium --ui"
