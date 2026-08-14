const { test, expect } = require('@playwright/test');

const { AmazonLoginPage } = require('../../pages/Signin/AmazonLoginPage'); 
// login

test('Verify Amazon Login Page', async ({ page }) => {

    // Create Page Object
    const loginPage = new AmazonLoginPage(page);


    // Open Amazon Login Page
    await loginPage.openLoginPage();

    await loginPage.enterUserName();
    await loginPage.enterPassword();
    await loginPage.login();
    await loginPage.clickHammerButton();


    // Verify heading
    await expect(loginPage.signInHeading)
        .toBeVisible();

        

});