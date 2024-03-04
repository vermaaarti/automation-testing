
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
        }, 'close centered popup');

        // cookie
        browser.click({
            selector: '//*[@id="inner-wrap"]/app-footer/app-cookie-notice/div/div/div[2]/div[2]/button[1]',
            locateStrategy: 'xpath'
        }, 'accept cookie');
    },


    'User Registration Test': function (browser) {

        // checking text 'QUICK LINKS'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[1]/app-footer-links/h4/span',
            locateStrategy: 'xpath'
        }, 'QUICK LINKS');


        // checking text 'Sales & Service Locator'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[1]/app-footer-links/ul/li[1]/span/a',
            locateStrategy: 'xpath'
        }, 'Sales & Service Locator');

        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        browser.click({
            // selector: 'a[href="https://locator.jlg.com"]'
            selector: '//*[@id="main-footer"]/div[1]/div[1]/app-footer-links/ul/li[1]/span/a',
            locateStrategy: 'xpath'
        }, 'open Sales & Service Locator');

        // get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body', 20000)
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });


        // checking text 'Worldwide Locations'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[1]/app-footer-links/ul/li[2]/span/a',
            locateStrategy: 'xpath'
        }, 'Worldwide Locations');

        // switching into different window tab

        browser.click({
            selector: 'a[href="https://www.jlg.com/about-jlg/locations"]'
        }, 'open Worldwide Locations');

        // Get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // Find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // Switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body', 20000)
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });

        // checking text 'JLG Company Store'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[1]/app-footer-links/ul/li[3]/span/a',
            locateStrategy: 'xpath'
        }, 'JLG Company Store');

        // switching into different window tab

        browser.click({
            selector: 'a[href="https://jlg.branditpod.com/"]'
        }, 'open JLG Company Store');

        // Get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // Find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // Switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body', 20000)
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });

        // checking text 'About JLG'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[1]/app-footer-links/ul/li[4]/span/a',
            locateStrategy: 'xpath'
        }, 'About JLG');

        // switching into different window tab

        browser.click({
            selector: 'a[href="https://www.jlg.com/about-jlg"]'
        }, 'open About JLG');

        // Get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // Find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // Switch to the new tab
            browser.switchWindow(newHandle);

            browser.waitForElementVisible('body', 20000)
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });

        // checking text 'Investors'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[1]/app-footer-links/ul/li[5]/span/a',
            locateStrategy: 'xpath'
        }, '');

        // switching into different window tab

        browser.click({
            selector: 'a[href="https://www.investors.oshkoshcorp.com/"]'
        }, 'open Investors');

        // Get hInvestorsandles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // Find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // Switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body', 20000)
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });

        // checking text 'Careers'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[1]/app-footer-links/ul/li[6]/span/a',
            locateStrategy: 'xpath'
        }, 'Careers');

        // switching into different window tab
        //   browser.waitForElementVisible({ selector: 'a[href="https://www.jlg.com/about-jlg/careers"]' }, 20000)
        browser.click({
            selector: 'a[href="https://www.jlg.com/about-jlg/careers"]'
        }, 'open Careers');

        // Get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // Find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // Switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body', 20000)
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });


        // checking text 'NEWSLETTERS'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[2]/app-footer-links/h4/span',
            locateStrategy: 'xpath'
        }, 'NEWSLETTERS');

        // checking text 'Direct Access'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[2]/app-footer-links/ul/li/span/a',
            locateStrategy: 'xpath'
        }, 'Direct Access');

        // switching into different window tab

        browser.click({
            selector: 'a[href="https://www.jlg.com/en/direct-access"]'
        }, 'open Direct Access');

        // Get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // Find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // Switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body', 20000)
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });

        // checking text 'PRESS RELEASES'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[3]/app-footer-links/h4/span',
            locateStrategy: 'xpath'
        }, 'PRESS RELEASES');

        // checking text 'Press Releases'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[3]/app-footer-links/ul/li/span/a',
            locateStrategy: 'xpath'
        }, 'Press Releases');

        // switching into different window tab

        browser.click({
            selector: 'a[href="https://www.jlg.com/news-events/press-releases"]'
        }, 'Press Releases');

        // Get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // Find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // Switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body', 20000)
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });

        // checking text 'copyright........'
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[4]',
            locateStrategy: 'xpath'
        }, "Copyright © 2024 JLG Industries");

        // checking text from paragraph
        browser.assert.containsText({
            selector: '//*[@id="main-footer"]/div[1]/div[4]/p',
            locateStrategy: 'xpath'
        }, "JLG Industries, Inc. is the world's leading designer, manufacturer and marketer of access equipment. The Company's diverse product portfolio includes leading brands such as JLG® mobile elevating work platforms; JLG and SkyTrak® telehandlers; and an array of complementary accessories that increase the versatility and efficiency of these products. JLG is an Oshkosh Corporation Company [NYSE: OSK].");


        // checking oshkosh logo
        browser.waitForElementVisible({
            selector: '//*[@id="main-footer"]/div[2]/div/div[3]/img',
            locateStrategy: 'xpath'
        }, 'oshkosh logo');

        // End the browser session
    }
};  