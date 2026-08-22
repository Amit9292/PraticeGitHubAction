const { test, expect } = require('@playwright/test');

const { SauceDemoLoginPage } = require('../../pages/Signin/SauceDemoLoginPage'); 
// login

test('Verify Sauce Login Page', async ({ page }) => {

    // Create Page Object
    const loginPage = new SauceDemoLoginPage(page);


    // Open Amazon Login Page
    await loginPage.openLoginPage();

    await loginPage.enterUserName();
    await loginPage.enterPassword();
    await loginPage.login();
    await loginPage.clickHammerButton();
     //await loginPage.clickHammerButton();


    // Verify heading
    await expect(loginPage.signInHeading)
        .toBeVisible();

        

});