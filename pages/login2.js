exports.ConnexionPage= class ConnexionPage{
    constructor(page){
        this.page = page
        this.username =  page.locator('#idToken1');
        this.password = page.locator('#idToken2');
        this.loginbutton = page.getByRole('button', {name : 'Log in'});
    };


    async gotoConnexionPage(){
        await this.page.goto('https://accounts.saucelabs.com/am/XUI/#login/',{waitUntil : 'networkidle', timeout : 40000});
        // https://sauce-demo.myshopify.com/account/login
        // https://accounts.saucelabs.com/am/XUI/#login/

    }

    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}