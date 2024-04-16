
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


    'Footer Social Icons Test': function (browser) {

        // phone icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[1]/a[1]', locateStrategy: 'xpath' }, 'phone icon is visible')

        // mail icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[1]/a[2]', locateStrategy: 'xpath' }, 'mail icon is visible')

        // rss icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[1]/a[3]', locateStrategy: 'xpath' }, 'rss icon is visible')

        // linkedin icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[1]/a[4]', locateStrategy: 'xpath' }, 'linkedin icon is visible')

        // instagram icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[1]/a[5]', locateStrategy: 'xpath' }, 'instagram icon is visible')

        // x icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[1]/a[6]', locateStrategy: 'xpath' }, 'x icon is visible')

        // facebook icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[1]/a[7]', locateStrategy: 'xpath' }, 'facebook icon is visible')

        // youtube icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[1]/a[8]', locateStrategy: 'xpath' }, 'youtube icon is visible')

        // Terms of Use
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[2]/span[1]/a', locateStrategy: 'xpath' }, 'Terms of Use')


        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        // open Terms of Use
        browser.click({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[2]/span[1]/a', locateStrategy: 'xpath' }, 'open Terms of Use')


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
            // browser.pause(6000)

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a' }, 'Home >>')

            //  Terms of Use
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Terms of Use')

            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);

        });



        // Contact Us
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[2]/span[2]/a', locateStrategy: 'xpath' }, 'Contact Us')

        // open Contact Us
        browser.click({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[2]/span[2]/a', locateStrategy: 'xpath' }, 'open Contact Us')

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
            // browser.pause(6000)

            // CONTACT
            browser.waitForElementVisible({ selector: 'h1[itemprop="name"]' }, 'CONTACT')

            //  Technical Support, Sales, & Parts
            browser.waitForElementVisible({ selector: 'div[class="contactUsColTwo"]:nth-of-type(1)'}, 'Technical Support, Sales, & Parts')

            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);

        });


        // Privacy Policy
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[2]/span[3]/a', locateStrategy: 'xpath' }, 'Privacy Policy')

        // open Privacy Policy
        browser.click({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[2]/span[3]/a', locateStrategy: 'xpath' }, 'open Privacy Policy')

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
            // browser.pause(6000)

             // Home >>
             browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a' }, 'Home >>')

             //  JLG's Website Privacy Policy
             browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, "JLG's Website Privacy Policy")
 
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);

        });


         // Oshkosh logo is visible
         browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-footer/footer/div[2]/div/div[3]', locateStrategy: 'xpath' }, 'Oshkosh logo is visible')


        // End the browser session
    }
};  