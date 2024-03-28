
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


    'Clearsky slide-3 Test': function (browser) {

        // clicking on signin 
        browser.click({ selector: '#loginMenu' }, 'open signin menu');

        // add email into email input field
        browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');

        // add password into password input field
        browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');

        // clicking sign in button
        browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');
        browser.pause(4000);
        //browser.waitForElementVisible('body')

        // click on right arrow 
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');
        //   browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 20000);

        browser.pause(10000)
        // click on right arrow 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');

        browser.waitForElementVisible('body')

        // clicking button 'CHECK IT OUT'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[4]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'open CHECK IT OUT');

        browser.waitForElementVisible('body')

        //  VIEW SCHEMATICS
        browser.assert.containsText({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/h3', locateStrategy: 'xpath' }, 'VIEW SCHEMATICS')

        // 1. Select an equipment type
        browser.assert.containsText({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/p[1]/strong', locateStrategy: 'xpath' }, '1. Select an equipment type')

        // img1
        browser.waitForElementVisible({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/div/div[1]/img', locateStrategy: 'xpath' }, 'img1 is visible')

        // Boom Lifts
        browser.assert.containsText({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/div/div[1]/strong', locateStrategy: 'xpath' }, 'Boom Lifts')

        // img2
        browser.waitForElementVisible({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/div/div[2]/img', locateStrategy: 'xpath' }, 'img2 is visible')

        // Scissor Lifts
        browser.assert.containsText({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/div/div[2]/strong', locateStrategy: 'xpath' }, 'Scissor Lifts')

        // img3
        browser.waitForElementVisible({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/div/div[3]/img', locateStrategy: 'xpath' }, 'img3 is visible')

        // Telehandlers
        browser.assert.containsText({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/div/div[3]/strong', locateStrategy: 'xpath' }, 'Telehandlers')

        //    2. Select a model
        browser.assert.containsText({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/p[2]/strong', locateStrategy: 'xpath' }, '2. Select a model')
        /*   
           // scroll down
        //   browser.scrollIntoView('/html/body/div[2]/div[2]/div/mat-dialog-container/div/div');
           // input field
         //  browser.waitForElementVisible({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/mat-form-field/div[1]/div[2]/div', locateStrategy: 'xpath' }, 'input field is visible')
   
           // click input field
        //   browser.click({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/mat-form-field/div[1]/div[2]/div/mat-select', locateStrategy: 'xpath' }, 'open input field')
   
          // input field
         // browser.assert.containsText({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-content/mat-form-field/div[1]/div[2]/div/mat-select', locateStrategy: 'xpath' }, 'input field is visible')
   */

        //    button 'VIEW SCHEMATICS'
        browser.assert.containsText({ selector: '/html/body/div[2]/div[2]/div/mat-dialog-container/div/div/app-schematics-selector/mat-dialog-actions/button/span[2]', locateStrategy: 'xpath' }, 'VIEW SCHEMATICS')

        browser.keys(browser.Keys.ESCAPE);




        // End the browser session
    }
};  