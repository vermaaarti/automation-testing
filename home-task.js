
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


    'Home Page Test': function (browser) {

        // clicking on signin 
        browser.click({ selector: '#loginMenu' }, 'open signin menu');

        // add email into email input field
        browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');

        // add password into password input field
        browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');

        // clicking sign in button
        browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');

        browser.waitForElementVisible('body')
        browser.pause(5000)

        // checking icon ' Chat Offline '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-chat/div/a', locateStrategy: 'xpath' }, 'CHAT OFFLINE icon is visible');

        // checking text ' Chat Offline '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/app-chat/div/a', locateStrategy: 'xpath' }, 'CHAT OFFLINE');


        // 1ST img checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[2]/div/app-hero-carousel-item', locateStrategy: 'xpath' }, '1st background image is visible');

        // left arrow
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[1]', locateStrategy: 'xpath' }, 'left arrow is visible');

        // right arrow
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'right arrow is visible');

        // checking text 'ClearSky Smart Fleet™'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[2]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/h1', locateStrategy: 'xpath' }, 'ClearSky Smart Fleet™');

        // checking text 'The industry's first platform for true two-way fleet management and interactivity.'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[2]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/div/p', locateStrategy: 'xpath' }, "The industry's first platform for true two-way fleet management and interactivity.");

        // checking button 'get connected'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[2]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'GET CONNECTED');

        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        // clicking button 'get connected'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[2]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'open GET CONNECTED');

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

            // breadcrum  checking
            //  home >> checking 
            browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

            // ClearSky Smart Fleet Dashboard checking
            browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'ClearSky Smart Fleet Dashboard');

            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });

        // click on right arrow 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');

        browser.waitForElementVisible('body')


        // 2nd img checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[2]/div/app-hero-carousel-item', locateStrategy: 'xpath' }, '2nd background image is visible');

        // left arrow
        //  browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[1]', locateStrategy: 'xpath' }, 'left arrow is visible');

        // right arrow
        //  browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'right arrow is visible');

        // checking text 'SEARCHABLE KNOWLEDGE BASE'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[3]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/h1', locateStrategy: 'xpath' }, 'SEARCHABLE KNOWLEDGE BASE');

        // checking text 'Search over 600 articles by fault code or symptom to find fault code descriptions, possible causes, troubleshooting steps, special tools required and helpful documents to get your machine back to work.'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[3]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/div/p', locateStrategy: 'xpath' }, "Search over 600 articles by fault code or symptom to find fault code descriptions, possible causes, troubleshooting steps, special tools required and helpful documents to get your machine back to work.");

        // checking button 'SEARCH ARTICLES'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[3]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'SEARCH ARTICLES');

        // clicking button 'SEARCH ARTICLES'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[3]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'open SEARCH ARTICLES');

        // browser.waitForElementVisible('body')

        // breadcrum  checking
        //  home >> checking 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

        //Knowledge Base Articles checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Knowledge Base Articles');


        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')


        browser.waitForElementVisible('body')
        // browser.waitForElementVisible('body')

        // click on right arrow 
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');
        //   browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 20000);

        browser.pause(10000)
        // click on right arrow 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');
        browser.waitForElementVisible('body')


        // 3rd img checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[4]/div/app-hero-carousel-item', locateStrategy: 'xpath' }, '3rd background image is visible');

        // left arrow
        //   browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[1]', locateStrategy: 'xpath' }, 'left arrow is visible');

        // right arrow
        // browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'right arrow is visible');

        // checking text ' INNOVATION FOR TROUBLESHOOTING'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[4]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/h1', locateStrategy: 'xpath' }, 'INNOVATION FOR TROUBLESHOOTING');

        // checking text 'View interactive 3-D renderings of your machine in Online Express to help you troubleshoot any hydraulic issues on your machine. '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[4]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/div/p/span/font/font', locateStrategy: 'xpath' }, "View interactive 3-D renderings of your machine in Online Express to help you troubleshoot any hydraulic issues on your machine.");

        // checking button 'CHECK IT OUT'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[4]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'CHECK IT OUT');

        // clicking button 'CHECK IT OUT'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[4]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'open CHECK IT OUT');

        browser.waitForElementVisible('body')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')


        browser.waitForElementVisible('body')
        //   browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 20000);
        // click on right arrow 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');
        //  browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 20000);
        browser.pause(5000)
        // click on right arrow 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');
        //  browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 20000);
        browser.pause(5000)
        // click on right arrow 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');
        browser.waitForElementVisible('body')


        // 4TH img checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[5]/div/app-hero-carousel-item', locateStrategy: 'xpath' }, '4th background image is visible');

        // left arrow
        //   browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[1]', locateStrategy: 'xpath' }, 'left arrow is visible');

        // right arrow
        //    browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'right arrow is visible');

        // checking text 'REPLACEMENT PARTS FOR YOUR ENTIRE FLEET'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[5]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/h1', locateStrategy: 'xpath' }, 'REPLACEMENT PARTS FOR YOUR ENTIRE FLEET');

        // checking text 'Regardless of your machine make and model, chances are, we've got replacement parts to fit your equipment. With over 26,000 parts to fit over 71 different equipment manufacturers, MaxQuip by JLG has what you need.'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[5]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/div/p', locateStrategy: 'xpath' }, "Regardless of your machine make and model, chances are, we've got replacement parts to fit your equipment. With over 26,000 parts to fit over 71 different equipment manufacturers, MaxQuip by JLG has what you need.");

        // checking button 'SHOP NOW'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[5]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'SHOP NOW');

        // clicking button 'SHOP NOW'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[5]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'open SHOP NOW');

        // breadcrum  checking
        //  home >> checking 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

        //Aftermarket Products
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>');

        //Maxquip Parts
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Maxquip Parts');

        browser.url('https://onlineexpress-t.jlg.com/');



        // slider icons
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/ul', locateStrategy: 'xpath' }, 'slider icons are visible')


        // checking text 'Knowledge Base Articles'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[1]/p[1]/p', locateStrategy: 'xpath' }, 'Knowledge Base Articles');

        // checking button 'Search over 600 articles by fault code or symptom.'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[1]/p[2]/p', locateStrategy: 'xpath' }, 'Search over 600 articles by fault code or symptom.');

        // checking button 'SEARCH ARTICLES'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'SEARCH ARTICLES');

        // clicking button 'SEARCH ARTICLES'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[2]/a', locateStrategy: 'xpath' }, 'open SEARCH ARTICLES');

        // browser.waitForElementVisible('body')

        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Knowledge Base Articles'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Knowledge Base Articles')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')



        // checking text '3-D Hydraulic Schematics'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[1]/p[1]/p', locateStrategy: 'xpath' }, '3-D Hydraulic Schematics');

        // checking button 'View schematics in 3-D or 2-D form'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[1]/p[2]/p', locateStrategy: 'xpath' }, 'View schematics in 3-D or 2-D form');

        // checking button 'VIEW SCHEMATICS'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'VIEW SCHEMATICS');

        // clicking button 'VIEW SCHEMATICS'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[2]/a', locateStrategy: 'xpath' }, 'open VIEW SCHEMATICS');

        browser.waitForElementVisible('body')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')



        // checking text 'Interactive Parts Manuals'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[1]/p[1]/p', locateStrategy: 'xpath' }, 'Interactive Parts Manuals');

        // checking button 'Find the right parts in our interactive manuals.'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[1]/p[2]/p', locateStrategy: 'xpath' }, 'Find the right parts in our interactive manuals.');

        // checking button 'VIEW MANUALS'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'VIEW MANUALS');

        // clicking button 'VIEW MANUALS'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[2]/a', locateStrategy: 'xpath' }, 'open VIEW MANUALS');

        //  browser.waitForElementVisible('body')

        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Interactive Manuals'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Interactive Manuals')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')



        // checking text 'Technical Publications'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[1]/p[1]/p', locateStrategy: 'xpath' }, 'Technical Publications');

        // checking button 'Download schematics, forms, and manuals (Parts, Operation, Service and Supplemental).'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[1]/p[2]/p', locateStrategy: 'xpath' }, 'Download schematics, forms, and manuals (Parts, Operation, Service and Supplemental).');

        // checking button 'SEARCH PUBLICATIONS'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'SEARCH PUBLICATIONS');

        // clicking button 'SEARCH PUBLICATIONS'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[2]/a', locateStrategy: 'xpath' }, 'open SEARCH PUBLICATIONS');

        // browser.waitForElementVisible('body')
        // browser.click({selector: '/html/body/div[3]/div[2]/header/button', locateStrategy: 'xpath'}, 'close popup')

        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Technical Publications'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Technical Publications')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')



        // checking text 'Equipment Information'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[1]/p[1]/p', locateStrategy: 'xpath' }, 'Equipment Information');

        // checking button 'Explore a parts list specific to a machine serial number. '
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[1]/p[2]/p', locateStrategy: 'xpath' }, 'Explore a parts list specific to a machine serial number.');

        // checking button 'SEARCH BY MACHINE'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'SEARCH BY MACHINE');

        // clicking button 'SEARCH BY MACHINE'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[2]/a', locateStrategy: 'xpath' }, 'open SEARCH BY MACHINE');

        // browser.waitForElementVisible('body')

        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Equipment Information'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Equipment Information')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')



        // checking text 'Safety and Service Bulletins'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[1]/p[1]/p', locateStrategy: 'xpath' }, 'Safety and Service Bulletins');

        // checking button 'Search for bulletins by machine serial number and/or search criteria.'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[1]/p[2]/p/span', locateStrategy: 'xpath' }, 'Search for bulletins by machine serial number and/or search criteria.');

        // checking button 'SEARCH BULLETINS'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'SEARCH BULLETINS');

        // clicking button 'SEARCH BULLETINS'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[2]/a', locateStrategy: 'xpath' }, 'open SEARCH BULLETINS');

        //  browser.waitForElementVisible('body')

        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Safety & Service Bulletins'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/a', locateStrategy: 'xpath' }, 'Safety & Service Bulletins')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')



        // checking text 'Inspections and Forms'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[1]/p[1]/p', locateStrategy: 'xpath' }, 'Inspections and Forms');

        // checking button 'Find forms to replace an ID plate, update owner information, or request a product modification.'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[1]/p[2]/p', locateStrategy: 'xpath' }, 'Find forms to replace an ID plate, update owner information, or request a product modification.');

        // checking button 'VIEW FORMS'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'VIEW FORMS');

        // clicking button 'VIEW FORMS'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[2]/a', locateStrategy: 'xpath' }, 'open VIEW FORMS');

        // browser.waitForElementVisible('body')

        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Inspections & Forms'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Inspections & Forms')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')



        // checking text 'Control Software'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[1]/p[1]/p', locateStrategy: 'xpath' }, 'Control Software');

        // checking button 'Find the latest control software by machine model or module part number.'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[1]/p[2]/p', locateStrategy: 'xpath' }, 'Find the latest control software by machine model or module part number.');

        // checking button 'SEARCH BY MACHINE'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'FIND CONTROL SOFTWARE');

        // clicking button 'SEARCH BY MACHINE'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[2]/a', locateStrategy: 'xpath' }, 'open FIND CONTROL SOFTWARE');

        // browser.waitForElementVisible('body')


        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Control Software'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Control Software')

        // back to default browser
        browser.url('https://onlineexpress-t.jlg.com/')




        // checking button 'LATEST NEWS'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/h3', locateStrategy: 'xpath' }, 'LATEST NEWS');

        /*    // checking button 'MESSAGE BOARD title - Traditional AA Logged in'
            // browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[4]/div/div/div/div/h3', locateStrategy: 'xpath' }, 'MESSAGE BOARD TITLE - TRADITIONAL AA LOGGED IN');
    
            // checking button 'bullet board'
            // browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[4]/div/div/div/div/div', locateStrategy: 'xpath' }, 'bullet board content');
    
            // clicking button 'content'
            // browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[4]/div/div/div/div/div/a', locateStrategy: 'xpath' }, 'open bullet board content');
    
    
            // checking button 'WHAT IS A PVC? '
            // browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/h3', locateStrategy: 'xpath' }, 'WHAT IS A PVC?');
    
            // checking button 'Test for long text for view more. Test for long text for view more.Test for long text for view more.A Product Variant Code helps you find the right documentation for your machine quickly with less hassle. A Product Variant Code helps you find the'
                  browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/div', locateStrategy: 'xpath' }, 'Test for long text for view more. Test for long text for view more.Test for long text for view more.A Product Variant Code helps you find the right documentation for your machine quickly with less hassle. A Product Variant Code helps you find the');
          
                  // checking button ' Read More '
                  browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/a', locateStrategy: 'xpath' }, 'Read More');
                  
                  // down arrow icon
                  browser.waitForElementVisible({selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/a/span', locateStrategy: 'xpath' }, 'down arrow icon is visible')
                  
                  // clicking button 'read more '
                   browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/a', locateStrategy: 'xpath' }, 'open Read more');
          
                   
                   // checking button 'Test for long text for view more. Test for long text for view more.Test for long text for view more.A Product Variant Code helps you find the right documentation for your machine quickly with less hassle. A Product Variant Code helps you find the right documentation for your machine quickly with less hassle A Product Variant Code helps you find the right documentation for your machine quickly with less hassleA Product Variant Code helps you find the right documentation for your machine quickly with less hassle A Product Variant Code helps you find the right documentation for your machine quickly with less hassle'
                   browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/div', locateStrategy: 'xpath' }, 'Test for long text for view more. Test for long text for view more.Test for long text for view more.A Product Variant Code helps you find the right documentation for your machine quickly with less hassle. A Product Variant Code helps you find the right documentation for your machine quickly with less hassle A Product Variant Code helps you find the right documentation for your machine quickly with less hassleA Product Variant Code helps you find the right documentation for your machine quickly with less hassle A Product Variant Code helps you find the right documentation for your machine quickly with less hassle');
          
                   // checking button 'Learn More About PVCs.'
                   browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/div/a', locateStrategy: 'xpath' }, 'Learn More About PVCs.');
                    
                   // clicking button 'Learn more about PVCs'
                    browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/div/a', locateStrategy: 'xpath' }, 'open Learn more about PVCs');
           
                   // checking text ' Read Less '
                   browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/a', locateStrategy: 'xpath' }, 'Read Less');
          
                    // up arrow icon
                  browser.waitForElementVisible({selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/a/span', locateStrategy: 'xpath' }, 'up arrow icon is visible')
                  
                   // clicking button ' Read Less '
                   browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/div/div/div[5]/div/div/div/div/a', locateStrategy: 'xpath' }, 'click Read Less');
          
          */

        //slider icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[4]/app-latest-news/div/ngx-slick-carousel/ul', locateStrategy: 'xpath' }, 'slider icon is visible')


        // checking button 'POPULAR CATEGORIES'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/h3', locateStrategy: 'xpath' }, 'POPULAR CATEGORIES');

        // checking button ' Accessories/Options '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[1]', locateStrategy: 'xpath' }, 'Accessories/Options');


        // clicking button ' Accessories/Options '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[1]', locateStrategy: 'xpath' }, 'open Accessories/Options');

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Accessories/Options'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Accessories/Options')

        browser.url('https://onlineexpress-t.jlg.com/');


        // checking button ' ATTACHMENTS '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[2]', locateStrategy: 'xpath' }, 'ATTACHMENTS');

        // clicking button ' Attachment'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[2]', locateStrategy: 'xpath' }, 'open ATTACHMENTS');

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Telehandler Attachments'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Telehandler Attachments')

        browser.url('https://onlineexpress-t.jlg.com/');


        // checking button ' Engine Parts '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[3]', locateStrategy: 'xpath' }, 'Engine Parts');

        // clicking button 'engine parts'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[3]', locateStrategy: 'xpath' }, 'open Engine parts');

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Engine Parts'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Engine Parts')

        browser.url('https://onlineexpress-t.jlg.com/');


        // checking button ' Reman Parts '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[4]', locateStrategy: 'xpath' }, 'Reman Parts');

        // clicking button 'Reman Parts'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[4]', locateStrategy: 'xpath' }, 'open Reman Parts');

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Reman Parts'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Reman Parts')

        browser.url('https://onlineexpress-t.jlg.com/');


        // checking button ' Service Kits '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[5]', locateStrategy: 'xpath' }, 'Service Kits');

        // clicking button ' Service Kits'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[5]', locateStrategy: 'xpath' }, 'open Service Kits');

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Service Kits'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Service Kits')

        browser.url('https://onlineexpress-t.jlg.com/');


        // checking button ' MAXQUIP REMAN '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[6]', locateStrategy: 'xpath' }, 'MAXQUIP REMAN');

        // clicking button 'MAXQUIP REMAN'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[6]', locateStrategy: 'xpath' }, 'open MAXQUIP REMAN');

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Reman Parts>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Reman Parts >>')

        // text 'ZF Transmissions>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li[2]', locateStrategy: 'xpath' }, 'ZF Transmissions >>')

        // text 'MAXQUIP REMAN'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li[3]/span', locateStrategy: 'xpath' }, 'MAXQUIP REMAN')

        browser.url('https://onlineexpress-t.jlg.com/');


        // checking button ' OIL '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[7]', locateStrategy: 'xpath' }, 'OIL');

        // clicking button 'oil'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[7]', locateStrategy: 'xpath' }, 'open OIL');

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Oil'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Oil')

        browser.url('https://onlineexpress-t.jlg.com/');


        // checking button ' Filters '
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[8]', locateStrategy: 'xpath' }, 'Filters');

        // clicking button ' Filters'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[7]/app-content-slot-main/app-cartridges/app-cartridge/app-popular-categories/div/a[8]', locateStrategy: 'xpath' }, 'open Filters');

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Filters'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Filters')

        browser.url('https://onlineexpress-t.jlg.com/');



        // icon checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[1]/mat-icon', locateStrategy: 'xpath' }, 'payment icon is visible')

        // text 'secure payments'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[1]/div/h3', locateStrategy: 'xpath' }, 'SECURE PAYMENTS');

        // text 'Safe and secure credit card payments'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[1]/div/p', locateStrategy: 'xpath' }, 'Safe and secure credit card payments');


        // icon checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[2]/mat-icon', locateStrategy: 'xpath' }, 'headset mic icon is visible')

        // text 'HELP CENTER'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[2]/div/h3', locateStrategy: 'xpath' }, 'HELP CENTER');

        // text 'Call or chat online for support'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[2]/div/p', locateStrategy: 'xpath' }, 'Call or chat online for support');


        // icon checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[3]/mat-icon', locateStrategy: 'xpath' }, 'local shipping icon is visible')

        // text 'reliable shipping'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[3]/div/h3', locateStrategy: 'xpath' }, 'RELIABLE SHIPPING');

        // text 'Rely on our dependable shipping services'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[8]/app-content-slot-main/app-cartridges/app-cartridge/app-trust-factors/div/div/div[3]/div/p', locateStrategy: 'xpath' }, 'Rely on our dependable shipping services');



        // text 'BUY IT AGAIN'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/h3', locateStrategy: 'xpath' }, 'BUY IT AGAIN');

        // qty checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/div', locateStrategy: 'xpath' }, 'Qty: text is visible')

        // input box for qty checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'Qty input field is visible')

        // text in 'add to cart' button
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/button/span[2]', locateStrategy: 'xpath' }, 'ADD TO CART');

        // text '+ shopping list'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/a/span[2]', locateStrategy: 'xpath' }, '+ SHOPPING LIST');


        // qty checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[2]/div/div/div/form/div', locateStrategy: 'xpath' }, 'Qty: text is visible')

        // input box for qty checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[2]/div/div/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'Qty input field is visible')

        // text in 'add to cart' button
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[2]/div/div/div/form/button/span[2]', locateStrategy: 'xpath' }, 'ADD TO CART');

        // text '+ shopping list'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[2]/div/div/div/form/a/span[2]', locateStrategy: 'xpath' }, '+ SHOPPING LIST');


        // qty checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[3]/div/div/div/form/div', locateStrategy: 'xpath' }, 'Qty: text is visible')

        // input box for qty checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[3]/div/div/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'Qty input field is visible')

        // text in 'add to cart' button
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[3]/div/div/div/form/button/span[2]', locateStrategy: 'xpath' }, 'ADD TO CART');

        // text '+ shopping list'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[3]/div/div/div/form/a/span[2]', locateStrategy: 'xpath' }, '+ SHOPPING LIST');


        // qty checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[4]/div/div/div/form/div', locateStrategy: 'xpath' }, 'Qty: text is visible')

        // input box for qty checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[4]/div/div/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'Qty input field is visible')

        // text in 'add to cart' button
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[4]/div/div/div/form/button/span[2]', locateStrategy: 'xpath' }, 'ADD TO CART');

        // text '+ shopping list'
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[4]/div/div/div/form/a/span[2]', locateStrategy: 'xpath' }, '+ SHOPPING LIST');



        // slider icon checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[9]/app-listrak-recommender/div/ngx-slick-carousel/ul', locateStrategy: 'xpath' }, 'slider icon is visible')





        // End the browser session
    }
};  