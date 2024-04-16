
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


    'Footer Worldwide Locations Test': function (browser) {

             // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
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

            browser.waitForElementVisible('body')
            //  browser.pause(6000)

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            //  About JLG
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'About JLG >>')
            
            // Locations
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Locations')
           
            // Cookie Consent
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[5]/div/p[1]/strong', locateStrategy: 'xpath' }, 'Cookie Consent')
            
            // JLG uses necessary cookies to make sure our site works. JLG would also like to set optional cookies to provide you the best user experience. For more detailed information about the cookies JLG uses, see our Privacy Policy.
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[5]/div/p[2]', locateStrategy: 'xpath' }, 'JLG uses necessary cookies to make sure our site works. JLG would also like to set optional cookies to provide you the best user experience. For more detailed information about the cookies JLG uses, see our Privacy Policy.')
            
            // I ACCEPT
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[5]/div/div/div[1]', locateStrategy: 'xpath' }, 'I ACCEPT')
            
            // REJECT ALL
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[5]/div/div/div[2]', locateStrategy: 'xpath' }, 'REJECT ALL')
            
            // accept cookie
            browser.click({ selector: '/html/body/div/form/div[5]/div/div/div[1]', locateStrategy: 'xpath' }, 'I ACCEPT')
            
            // LOCATIONS
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/h1', locateStrategy: 'xpath' }, 'LOCATIONS')
           
            // Select locations by region
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/p/span', locateStrategy: 'xpath' }, 'Select locations by region')
           
            // select field
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select', locateStrategy: 'xpath' }, 'select field is visible')
           
            //  open it
            browser.click({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select', locateStrategy: 'xpath' }, 'open select field')
           
            // Australia and New Zealand
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[1]', locateStrategy: 'xpath' }, 'Australia and New Zealand')
           
            // Europe
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[2]', locateStrategy: 'xpath' }, 'Europe')
           
            // India
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[3]', locateStrategy: 'xpath' }, 'India')
           
            // Latin America
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[4]', locateStrategy: 'xpath' }, 'Latin America')
           
            // Middle East
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[5]', locateStrategy: 'xpath' }, 'Middle East')
           
            // North America
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[6]', locateStrategy: 'xpath' }, 'North America')
           
            // Pacific Rim
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[7]', locateStrategy: 'xpath' }, 'Pacific Rim')
           
             // close
             browser.click('body');

             // North America
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[7]', locateStrategy: 'xpath' }, 'North America')
           
             // Australia and New Zealand
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[7]', locateStrategy: 'xpath' }, 'Australia and New Zealand')
           
             // Europe
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[7]', locateStrategy: 'xpath' }, 'Europe')
           
             // India
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[7]', locateStrategy: 'xpath' }, 'India')
           
             // Latin America
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[7]', locateStrategy: 'xpath' }, 'Latin America')
           
              // Middle East
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[7]', locateStrategy: 'xpath' }, 'Middle East')
           
             // Pacific Rim
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[4]/div[1]/div/div/select/option[7]', locateStrategy: 'xpath' }, 'Pacific Rim')
           




            // switch back to the first tab
           // browser.switchWindow(originalHandle[0]);
        });

        // checking text 'JLG Company Store'
     /*   browser.assert.containsText({
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
*/
        // End the browser session
    }
};  