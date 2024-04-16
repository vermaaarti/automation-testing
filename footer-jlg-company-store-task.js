
module.exports = {
    before: function (browser) {

        // maximizing window
        browser.window.maximize()

        // navigation to default url
        browser.navigateTo('https://onlineexpress-t.jlg.com/')

        // centered popup
        browser.click({
            selector: '/html/body/div[2]/div/footer/button',
            locateStrategy: 'xpath'
        }, "closing 'NEW: Technical Publications Experience' popup by clicking done");

        // cookie
        browser.click({
            selector: '//*[@id="inner-wrap"]/app-footer/app-cookie-notice/div/div/div[2]/div[2]/button[1]',
            locateStrategy: 'xpath'
        }, "accepting 'Cookie Consent' in default browser tab");
    },


    'Footer JLG Company Store Test': function (browser) {


        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        // open link
        browser.click({
            selector: 'a[href="https://jlg.branditpod.com/"]'
        }, 'open JLG Company Store');

        // get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body')
            browser.pause(6000)


            // WELCOME TO JLG COMPANY STORE
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[1]/div/div/div/ul/li[1]/span', locateStrategy: 'xpath' }, 'WELCOME TO JLG COMPANY STORE')

            //  Sign In button
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[1]/div/div/div/ul/li[2]/a/button', locateStrategy: 'xpath' }, 'Sign In')

            //  jlg logo
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[2]/div[1]/div/a/img', locateStrategy: 'xpath' }, 'JLG logo is visible')

            //  input field
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[2]/div[2]/div/div/input', locateStrategy: 'xpath' }, 'input field is visible')

            // search icon
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[2]/div[2]/div/button', locateStrategy: 'xpath' }, 'search icon is visible')

            // cart
            browser.waitForElementVisible({ selector: '/html/body/div[1]/div/div/header/div[2]/div[3]/button', locateStrategy: 'xpath' }, 'cart is visible')


            // FIELD READY
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[3]/div/div[1]/ul/li[1]/a', locateStrategy: 'xpath' }, 'FIELD READY')

            // EXECUTIVE
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[3]/div/div[1]/ul/li[2]/a', locateStrategy: 'xpath' }, 'EXECUTIVE')

            // ACCESSORIES
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[3]/div/div[1]/ul/li[3]/a', locateStrategy: 'xpath' }, 'ACCESSORIES')

            // GIVEAWAYS
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[3]/div/div[1]/ul/li[4]/a', locateStrategy: 'xpath' }, 'GIVEAWAYS')

            // MODEL
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[3]/div/div[1]/ul/li[5]/a', locateStrategy: 'xpath' }, 'MODEL')

            // CUSTOM REQUEST
            browser.waitForElementVisible({ selector: '/html/body/div/div/div/header/div[3]/div/div[1]/ul/li[6]/a', locateStrategy: 'xpath' }, 'CUSTOM REQUEST')


            //  Welcome to the JLG Company Store.
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div[1]/div/div[2]/div[2]/div/h1', locateStrategy: 'xpath' }, 'Welcome to the JLG Company Store.')

            // Your one-stop shop for branded material & gear!
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div[1]/div/div[2]/div[2]/div/h4', locateStrategy: 'xpath' }, 'Your one-stop shop for branded material & gear!')

            // “JLG Team Members, Please Login Using @jlg.com Email Addresses.”
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div[1]/div/div[2]/div[2]/div/p', locateStrategy: 'xpath' }, '“JLG Team Members, Please Login Using @jlg.com Email Addresses.”')

            //  BROWSE ALL PRODUCTS
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div[1]/div/div[2]/div[2]/div/div/a[1]/button', locateStrategy: 'xpath' }, 'BROWSE ALL PRODUCTS')

            // SIGN IN
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div[1]/div/div[2]/div[2]/div/div/a[2]/button', locateStrategy: 'xpath' }, 'SIGN IN')



            // img1
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div[2]/div/div/div/div[1]/div/div/div/div/div[2]/div/div/div/div[1]/a', locateStrategy: 'xpath' }, 'img1 is visible')

            // img2
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div[2]/div/div/div/div[2]/div/div[1]', locateStrategy: 'xpath' }, 'img2 is visible')

            // img3
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div[2]/div/div/div/div[2]/div/div[2]', locateStrategy: 'xpath' }, 'img3 is visible')

            // CUSTOMER SERVICE & SUPPORT
            browser.waitForElementVisible({ selector: '/html/body/div/div/footer/div/div/div/div[1]/h6', locateStrategy: 'xpath' }, 'CUSTOMER SERVICE & SUPPORT')

            // Contact Us
            browser.waitForElementVisible({ selector: '/html/body/div/div/footer/div/div/div/div[1]/p/a', locateStrategy: 'xpath' }, 'Contact Us')

            // ©Copyright 2024
            browser.waitForElementVisible({ selector: '/html/body/div/div/footer/div/div/div/div[2]/p', locateStrategy: 'xpath' }, '©Copyright 2024')

            // click on Contact Us
            browser.click({ selector: '/html/body/div/div/footer/div/div/div/div[1]/p/a', locateStrategy: 'xpath' }, 'open Contact Us')

            browser.waitForElementVisible('body')

            // Send Us An Email
            browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div/div/div[2]/div/div/div/div[1]/div/div/h2', locateStrategy: 'xpath' }, 'Send Us An Email')

          //  Contact Details
          browser.waitForElementVisible({ selector: '/html/body/div/div/main/div/div[2]/div/div/div[2]/div/div/div/div[2]/div[1]/h2', locateStrategy: 'xpath' }, 'Contact Details')




            // switch back to the first tab
            //  browser.switchWindow(originalHandle[0]);
        });






        // End the browser session
    }
};  