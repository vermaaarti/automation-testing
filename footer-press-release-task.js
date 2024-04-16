
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


    'Footer Press Releases Test': function (browser) {



        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        // open press release
        browser.click({
            selector: 'a[href="https://www.jlg.com/news-events/press-releases"]'
        }, 'Press Releases');

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

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            //  News & Events >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'News & Events >>')

            //   Press Releases
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Press Releases')


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

            //  PRESS RELEASES
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/h1', locateStrategy: 'xpath' }, 'PRESS RELEASES')

            // Media Contacts
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[1]/h4', locateStrategy: 'xpath' }, 'Media Contacts')

            // For press inquiries, get in touch with the JLG media team.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[2]/div/p/a', locateStrategy: 'xpath' }, 'For press inquiries, get in touch with the JLG media team.')

            // open 'For press inquiries, get in touch with the JLG media team.'
            browser.click({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[2]/div/p/a', locateStrategy: 'xpath' }, 'open "For press inquiries, get in touch with the JLG media team."')

            browser.waitForElementVisible('body')
        
            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            //  News & Events >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'News & Events >>')

            //   Media Information
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Media Information')

            browser.url('https://www.jlg.com/en/news-events/press-releases');
            
            // Press Release Archive
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[2]/h4', locateStrategy: 'xpath' }, 'Press Release Archive')















            // switch back to the first tab
            //  browser.switchWindow(originalHandle[0]);
        });



        // End the browser session
    }
};  