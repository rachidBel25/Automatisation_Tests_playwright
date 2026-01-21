import { test, expect} from '@playwright/test';
import { ConnexionPage } from '../pages/login2';


test ('test pom2', async({page})=> {
await page.pause();
const login1 = new ConnexionPage(page)

await login1.gotoConnexionPage()
await login1.login('raccccc', '12345')


});