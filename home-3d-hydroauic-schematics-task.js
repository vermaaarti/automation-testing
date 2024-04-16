
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


    'Home 3d Hydroauic Schematics Test': function (browser) {

        // clicking on signin 
        browser.click({ selector: '#loginMenu' }, 'open signin menu');

        // add email into email input field
        browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');

        // add password into password input field
        browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');

        // clicking sign in button
        browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');

        browser.waitForElementVisible('body')
        browser.pause(8000)

        // VIEW SCHEMATICS
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[2]/a/span[2]', locateStrategy: 'xpath' }, 'VIEW SCHEMATICS');

        // clicking button 'VIEW SCHEMATICS'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[2]/a', locateStrategy: 'xpath' }, 'open VIEW SCHEMATICS');

        browser.waitForElementVisible('body')
        browser.pause(8000)

        //  VIEW SCHEMATICS
        browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-schematics-selector>h3' }, 'VIEW SCHEMATICS')

        // 1. Select an equipment type
        browser.waitForElementVisible({ selector: 'mat-dialog-content[class="mat-mdc-dialog-content mdc-dialog__content"]>p:nth-of-type(1)>strong' }, '1. Select an equipment type')

        // img1
        browser.waitForElementVisible({ selector: 'div[class="flex"]:nth-of-type(1)>div:nth-of-type(1)>img' }, 'img1 is visible')

        // Boom Lifts
        browser.waitForElementVisible({ selector: 'mat-dialog-content[class="mat-mdc-dialog-content mdc-dialog__content"]>p:nth-of-type(2)>strong'}, 'Boom Lifts')

        // img2
        browser.waitForElementVisible({ selector: 'div[class="flex"]:nth-of-type(1)>div:nth-of-type(2)>img' }, 'img2 is visible')

        // Scissor Lifts
        browser.assert.containsText({ selector: 'div[class="flex"]:nth-of-type(1)>div:nth-of-type(2)>strong'}, 'Scissor Lifts')

        // img3
        browser.waitForElementVisible({ selector: 'div[class="flex"]:nth-of-type(1)>div:nth-of-type(3)>img' }, 'img3 is visible')

        // Telehandlers
        browser.assert.containsText({ selector: 'div[class="flex"]:nth-of-type(1)>div:nth-of-type(3)>strong' }, 'Telehandlers')

        //    2. Select a model
        browser.assert.containsText({ selector: 'mat-dialog-content[class="mat-mdc-dialog-content mdc-dialog__content"]>p:nth-of-type(2)>strong' }, '2. Select a model')
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
        browser.assert.containsText({ selector: 'mat-dialog-actions>button' }, 'VIEW SCHEMATICS')

        browser.keys(browser.Keys.ESCAPE);

        // End the browser session
    }
};  