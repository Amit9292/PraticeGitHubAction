require('dotenv').config();


class AmazonLoginPage {

    constructor(page) {

        this.page = page;

        // Locators
        this.userName =  page.locator('[data-test="username"]');
        this.userPassword=page.locator('[data-test="password"]');

        this.loginButton =  page.locator('[data-test="login-button"]');

        this.signInHeading = page.locator('#root').getByText('Swag Labs');
        this.hammerButton=page.getByRole('button', { name: 'Open Menu' })

        
    }


    // Open Amazon Login Page
    async openLoginPage() {

        await this.page.goto(
            process.env.SAUCE_URL
        );
    }


    // Enter email/mobile
    async enterUserName(UserName) {

        await this.userName.fill(process.env.SAUCE_USERNAME);
    }
    async enterPassword(Password){
        await this.userPassword.fill(process.env.SAUCE_PASSWORD);
    }
    async login(loginButton){
        await this.loginButton.click();
    }
    async clickHammerButton(hammerButton){
        await this.hammerButton.click();
    }


    // Click Continue
    
    
}


module.exports = { AmazonLoginPage };