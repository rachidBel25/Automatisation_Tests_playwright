
import {test, expect} from'@playwright/test';

test ('test pom', async({page})=> {
    await page.pause();
    await page.goto('https://sauce-demo.myshopify.com/account/login', {waitUntil : 'domcontentloaded', timeout : 40000});
    
    
    await page.locator('#customer_email').fill('rachhh');
    await page.locator('#customer_password').fill('bfhfbf@yahoo.fr');
    await page.getByRole('button', { name :'submit'});
});