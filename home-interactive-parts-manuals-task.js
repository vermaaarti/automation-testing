
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


    'Home Knowledge Base Articles Test': function (browser) {

        // clicking on signin 
        browser.click({ selector: '#loginMenu' }, 'open signin menu');

        // add email into email input field
        browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');

        // add password into password input field
        browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');

        // clicking sign in button
        browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');

        browser.waitForElementVisible('body')
        browser.pause(6000)


        // clicking button 'VIEW MANUALS'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[2]/a', locateStrategy: 'xpath' }, 'open VIEW MANUALS');

        browser.waitForElementVisible('body')

        // text 'Home >>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Interactive Manuals'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Interactive Manuals')

        //  browser.waitForElementVisible('body')
        browser.pause(20000)

        // Browse Manuals
        //   browser.waitForElementVisible({ selector: '//*[@id="mainNavSlidePane"]/div/div/div[1]/div/div/span', locateStrategy: 'xpath' }, 'Browse Manuals')

        //  'filter choices input field is visible'
        //  browser.waitForElementVisible({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[2]/input', locateStrategy: 'xpath' }, 'filter choices input field is visible')

        // DEUTZ
        // browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[1]/div/span', locateStrategy: 'xpath' }, 'DEUTZ')

        // DEUTZ-FAHR
        /*      browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[2]/div/span', locateStrategy: 'xpath' }, 'DEUTZ-FAHR')
     
               // GRADALL
             browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[3]/div/span', locateStrategy: 'xpath' }, 'GRADALL')
     
              // JERR-DAN
              browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[4]/div/span', locateStrategy: 'xpath' }, 'JERR-DAN')
     
               // JLG
             browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[5]/div/span', locateStrategy: 'xpath' }, 'JLG')
     
              // LIFTLUX
              browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[6]/div/span', locateStrategy: 'xpath' }, 'LIFTLUX')
     
               // LULL
             browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[7]/div/span', locateStrategy: 'xpath' }, 'LULL')
     
             // SKYTRAK
             browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[8]/div/span', locateStrategy: 'xpath' }, 'SKYTRAK')
     
              // TOUCAN
              browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[9]/div/span', locateStrategy: 'xpath' }, 'TOUCAN')
     
               // TRIPLE-L
             browser.assert.containsText({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[1]/app-searchbar/app-tree-view/div/div/div/div[3]/div[1]/a[10]/div/span', locateStrategy: 'xpath' }, 'TRIPLE-L')
     
     */
        // Actions
      //  browser.waitForElementVisible({ selector: '/html/body/main/app-container/div[4]/app-library/se-wrapper/div/main/div/div/div/se-grid/div/div[2]/app-homepage/app-library-options/se-section/div/h4/span[1]', locateStrategy: 'xpath' }, 'Actions')

         // chat online 
         browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/app-chat/div/a', locateStrategy: 'xpath' }, 'chat online')





        // End the browser session
    }
};  