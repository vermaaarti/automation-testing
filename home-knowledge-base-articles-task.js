
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
        browser.pause(9000)



        // clicking button 'SEARCH ARTICLES'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[1]/div[2]/a', locateStrategy: 'xpath' }, 'open SEARCH ARTICLES');

        // browser.waitForElementVisible('body')

        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Knowledge Base Articles'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Knowledge Base Articles')

        // KNOWLEDGE BASE ARTICLES
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[2]/app-search-box-header/div/div/div/div/h1', locateStrategy: 'xpath' }, 'KNOWLEDGE BASE ARTICLES')

        //  search icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[2]/app-search-box-header/div/div/div/div/app-search/form/span', locateStrategy: 'xpath' }, 'search icon is visible');

        // search text 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[2]/app-search-box-header/div/div/div/div/app-search/form/button/span[2]', locateStrategy: 'xpath' }, 'SEARCH')

        // MEDEL text 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/h4', locateStrategy: 'xpath' }, 'MODEL')

        // up-arrow 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/h4', locateStrategy: 'xpath' }, 'up-arrow icon is visible')

        //  search INPUT 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/mat-form-field/div[1]/div/div[3]/input', locateStrategy: 'xpath' }, 'search input is visible');

        //  search icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/mat-form-field/div[1]/div/div[2]/mat-icon', locateStrategy: 'xpath' }, 'search icon is visible');

        // View All text 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All')

        // click View All 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All')

        //  View less
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[299]/strong/u/a', locateStrategy: 'xpath' }, 'View less')

        // SECTION text 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/h4', locateStrategy: 'xpath' }, 'SECTION')

        // up-arrow 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/h4', locateStrategy: 'xpath' }, 'up-arrow icon is visible')

        // View All text 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All')

        // click View All 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All')

        //  View less
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[18]/strong/u/a', locateStrategy: 'xpath' }, 'View less')

        // ARTICLE TYPE text 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/h4', locateStrategy: 'xpath' }, 'ARTICLE TYPE')

        // up-arrow 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/h4', locateStrategy: 'xpath' }, 'up-arrow icon is visible')

        // results text
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[1]/app-search-adjustments/div/div', locateStrategy: 'xpath' }, 'results')


        // 1st -----------------------------------------------

        // Last Modified:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/div/div[1]/strong[3]', locateStrategy: 'xpath' }, 'Last Modified:')

        //  Items per page: 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/mat-paginator/div/div/div[1]/div', locateStrategy: 'xpath' }, 'Items per page:')

        // input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/mat-paginator/div/div/div[1]/mat-form-field', locateStrategy: 'xpath' }, 'select field is visible')

        // click input field
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/mat-paginator/div/div/div[1]/mat-form-field', locateStrategy: 'xpath' }, 'open select field')

        // '12'
        browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)>span' }, '12')

        // 24
        browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)>span' }, '24')

        // 48
        browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)>span' }, '48')


        // click '12'
        //   browser.click({ selector: '/html/body/div[2]/div[2]/div/div/mat-option[1]', locateStrategy: 'xpath' }, 'select 12')

        browser.click('body');

        //   1 – 12 of 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/mat-paginator/div/div/div[2]/div', locateStrategy: 'xpath' }, '1 – 12 of')

        // input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/mat-paginator/div/div/div[2]/button[2]', locateStrategy: 'xpath' }, '> is visible')

        //   CAN'T FIND WHAT YOU'RE LOOKING FOR?
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[3]/app-cartridges/app-cartridge/app-content-slot-footer/app-cartridges/app-cartridge/app-text-promo/div/div/h2', locateStrategy: 'xpath' }, "CAN'T FIND WHAT YOU'RE LOOKING FOR?")

        // If you still haven't found what you need in our knowledge articles, contact customer support directly. 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[3]/app-cartridges/app-cartridge/app-content-slot-footer/app-cartridges/app-cartridge/app-text-promo/div/div/p/p', locateStrategy: 'xpath' }, "If you still haven't found what you need in our knowledge articles, contact customer support directly.")

        //   contact us button
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[3]/app-cartridges/app-cartridge/app-content-slot-footer/app-cartridges/app-cartridge/app-text-promo/div/div/a/span[2]', locateStrategy: 'xpath' }, 'CONTACT US')

        // link icon
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/div/div[1]/app-copy-button/button/mat-icon', locateStrategy: 'xpath' }, 'link')

        // copy link
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/div/div[1]/app-copy-button/button/span[2]', locateStrategy: 'xpath' }, 'COPY LINK')

        // click on copy link
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/div/div[1]', locateStrategy: 'xpath' }, 'COPY LINK')

        //  link copied!
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/div/div[1]/app-copy-button/button/span[2]', locateStrategy: 'xpath' }, 'LINK COPIED!')

        // click 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[3]/app-cartridges/app-cartridge/app-content-slot-footer/app-cartridges/app-cartridge/app-text-promo/div/div/a', locateStrategy: 'xpath' }, 'open CONTACT US').url('https://www.jlg.com/en/about-jlg/contact-us');

        //  browser.click('https://www.jlg.com/en/about-jlg/contact-us');

        browser.waitForElementVisible('body', 30000)

        //   contact us
        browser.waitForElementVisible({ selector: 'h1[itemprop="name"]' }, 30000)

        browser.assert.containsText({ selector: 'h1[itemprop="name"]' }, 'CONTACT')

        // Technical Support, Sales, & Parts
        browser.assert.containsText({ selector: 'div[class="contactUsColTwo"]:nth-of-type(1)' }, 'Technical Support, Sales, & Parts')








        // checking text '3-D Hydraulic Schematics'
        /*     browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[2]/div[1]/p[1]/p', locateStrategy: 'xpath' }, '3-D Hydraulic Schematics');
     
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
     */

        // End the browser session
    }
};  