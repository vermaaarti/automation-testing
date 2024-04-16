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


    'Home Technical Publications Test': function (browser) {

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

        // clicking button 'SEARCH PUBLICATIONS'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[2]/a', locateStrategy: 'xpath' }, 'open SEARCH PUBLICATIONS');

        //browser.pause('60000000000000000')

        // text 'Search Feature'
        browser.waitForElementVisible({ selector: '/html/body/div[3]/div[2]/header/h3', locateStrategy: 'xpath' }, 'Search Feature')

         // text 'All new search feature: search by multiple criteria at once. Ex: 10042 operation'
         browser.waitForElementVisible({ selector: '/html/body/div[3]/div[2]/div', locateStrategy: 'xpath' }, 'All new search feature: search by multiple criteria at once. Ex: 10042 operation')
     
          // text 'Learn More'
        browser.waitForElementVisible({ selector: '/html/body/div[3]/div[2]/div/a', locateStrategy: 'xpath' }, 'Learn More')

         // text 'EXIT'
         browser.waitForElementVisible({ selector: '/html/body/div[3]/div[2]/footer/button', locateStrategy: 'xpath' }, 'EXIT')

          // text 'X button'
        browser.waitForElementVisible({ selector: '/html/body/div[3]/div[2]/header/button', locateStrategy: 'xpath' }, 'X button')

        // X
        browser.click({ selector: '/html/body/div[3]/div[2]/header/button', locateStrategy: 'xpath' }, 'close popup')


        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Technical Publications'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Technical Publications')

        // LANGUAGE
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/h4', locateStrategy: 'xpath' }, 'LANGUAGE')

        // up arrow is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/h4', locateStrategy: 'xpath' }, 'up arrow is visible')

        // search field is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/mat-form-field', locateStrategy: 'xpath' }, 'search field is visible')

        // search icon is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/mat-form-field/div[1]/div/div[2]/mat-icon', locateStrategy: 'xpath' }, 'search icon is visible')

        // View All
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All')

        // open View All
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All')

        // View Less
        browser.waitForElementVisible({ selector: 'strong[_ngcontent-ole-app-c1068211167]>u>a' }, 'View Less')



        // MODEL
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/h4', locateStrategy: 'xpath' }, 'MODEL')

        // up arrow is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/h4', locateStrategy: 'xpath' }, 'up arrow is visible')

        // search field is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/mat-form-field', locateStrategy: 'xpath' }, 'search field is visible')

        // search icon is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/mat-form-field/div[1]/div/div[2]/mat-icon', locateStrategy: 'xpath' }, 'search icon is visible')

        // View All
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All')

        // open View All
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All')

        // View Less
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[665]/strong/u/a', locateStrategy: 'xpath' }, 'View Less')



        // PRODUCT TYPE
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/h4', locateStrategy: 'xpath' }, 'PRODUCT TYPE')

        // up arrow is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/h4', locateStrategy: 'xpath' }, 'up arrow is visible')

        // View All
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All')

        // open View All
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All')

        // View Less
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/ul/li[13]/strong/u/a', locateStrategy: 'xpath' }, 'View Less')



        // PRODUCT VARIANT CODE (PVC)
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[4]/h4', locateStrategy: 'xpath' }, 'PRODUCT VARIANT CODE (PVC)')

        // up arrow is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[4]/h4', locateStrategy: 'xpath' }, 'up arrow is visible')

        // search field is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[4]/mat-form-field/div[1]/div/div[1]', locateStrategy: 'xpath' }, 'search field is visible')

        // search icon is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[4]/mat-form-field/div[1]/div/div[2]/mat-icon', locateStrategy: 'xpath' }, 'search icon is visible')

        // View All
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All')

        // open View All
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All')

        // View Less
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[35]/strong/u/a', locateStrategy: 'xpath' }, 'View Less')



        // PUBLICATION TYPE
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[5]/h4', locateStrategy: 'xpath' }, 'PUBLICATION TYPE')

        // up arrow is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[5]/h4', locateStrategy: 'xpath' }, 'up arrow is visible')

        // View All
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[5]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All')

        // open View All
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[5]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All')

        // View Less
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[5]/ul/li[10]/strong/u/a', locateStrategy: 'xpath' }, 'View Less')



        // TECHNICAL PUBLICATIONS
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[1]/app-h1/h1', locateStrategy: 'xpath' }, 'TECHNICAL PUBLICATIONS')

        // search field is vislbe
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[2]/app-article-search-box/div/div/div/div/app-search', locateStrategy: 'xpath' }, 'search field is vislbe')

        // search icon is vislbe
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[2]/app-article-search-box/div/div/div/div/app-search/form/span', locateStrategy: 'xpath' }, 'search icon is vislbe')

        // search button is vislbe
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[2]/app-article-search-box/div/div/div/div/app-search/form/button', locateStrategy: 'xpath' }, 'SEARCH')


        // results
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-search-adjustments/div/div', locateStrategy: 'xpath' }, 'results')

        // Publication Part Number:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[1]/div', locateStrategy: 'xpath' }, 'Publication Part Number:')

         // Release Date:
         browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[1]/div', locateStrategy: 'xpath' }, 'Release Date:')

          // Language:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[1]/div', locateStrategy: 'xpath' }, 'Language:')

         // Specification:
         browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[1]/div', locateStrategy: 'xpath' }, 'Specification:')


        // link icon is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[2]/app-copy-button/button/mat-icon', locateStrategy: 'xpath' }, 'link icon is visible')

        // COPY LINK
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[2]/app-copy-button/button/span[2]', locateStrategy: 'xpath' }, 'COPY LINK')

        // OPEN COPY LINK
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[2]/app-copy-button/button', locateStrategy: 'xpath' }, 'OPEN COPY LINK')

        // LINK COPIED!
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[2]/app-copy-button/span', locateStrategy: 'xpath' }, 'LINK COPIED!')

        // dnld icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[2]/div/a/mat-icon', locateStrategy: 'xpath' }, 'download icon is visible')

        // DOWNLOAD FILE
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[2]/div/a/span[2]', locateStrategy: 'xpath' }, 'DOWNLOAD FILE')

        // File Size:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/div[1]/div[2]/div/div', locateStrategy: 'xpath' }, 'File Size:')


         //  Items per page: 
         browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/mat-paginator/div/div/div[1]/div', locateStrategy: 'xpath' }, 'Items per page:')

         // input field
         browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/mat-paginator/div/div/div[1]/mat-form-field', locateStrategy: 'xpath' }, 'select field is visible')
 
         // click input field
         browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/mat-paginator/div/div/div[1]/mat-form-field', locateStrategy: 'xpath' }, 'open select field')
 
         // '12'
         browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)>span' }, '12')
 
         // 24
         browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)>span' }, '24')
 
         // 48
         browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)>span' }, '48')
 
           browser.click('body');
 
         //   1 – 12 of 
         browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/mat-paginator/div/div/div[2]/div', locateStrategy: 'xpath' }, '1 – 12 of')
 
         // right arrow
         browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-manual-result-list/mat-paginator/div/div/div[2]/button[2]', locateStrategy: 'xpath' }, 'right arrow is visible')
 

        // End the browser session
    }
};  