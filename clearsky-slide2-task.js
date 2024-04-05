
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


    'Clearsky slide-2 Test': function (browser) {

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
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');

        browser.waitForElementVisible('body')

        // clicking button 'SEARCH ARTICLES'
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[3]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'open SEARCH ARTICLES');

        // home >>
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>');

        //  Knowledge Base Articles
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Knowledge Base Articles');

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

        // Scroll the element into view
        //   browser.execute('arguments[0].scrollIntoView(true)', ['/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[299]/strong/u/a']);

        // View Less text 
        // browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[299]/strong/u/a', locateStrategy: 'xpath' }, 'View Less')

        // click View Less 
        //      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[299]/strong/u/a', locateStrategy: 'xpath' }, 'close View Less')

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

        // Scroll the element into view
        //     browser.execute('arguments[0].scrollIntoView(true)', ['/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[18]/strong/u/a']);

        // View Less text 
        // browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[18]/strong/u/a', locateStrategy: 'xpath' }, 'View Less')

        // click View Less 
        //       browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[18]/strong/u/a', locateStrategy: 'xpath' }, 'close View Less')

        // ARTICLE TYPE text 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/h4', locateStrategy: 'xpath' }, 'ARTICLE TYPE')

        // up-arrow 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-guided-navigation/div/div[1]/app-refinement-menu[3]/h4', locateStrategy: 'xpath' }, 'up-arrow icon is visible')

        // results text
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[1]/app-search-adjustments/div/div', locateStrategy: 'xpath' }, 'results')


        // 1st -----------------------------------------------

        // Serial number range
        //  browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/div/div[1]/strong[2]', locateStrategy: 'xpath' }, 'Serial number range')

        // Last Modified:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/div/div[1]/strong[3]', locateStrategy: 'xpath' }, 'Last Modified:')


        //  browser.pause(4000)  
        //browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-article-result-list/div/div[1]/app-copy-button/button/span[2]', locateStrategy: 'xpath' }, 40000)



        //  2nd -------------------------------------------------------

        //   3rd --------------------------------------------------------------

        //    4th ------------------------------------------------------

        // 5th -----------------------------------------------------

        //    6th -------------------------------------------------------

        //    7th --------------------------------------------

        //      8th -------------------------------------------

        //     9th ---------------------------------------------------

        //   10th ------------------------------------------------

        //  11th -----------------------------------------------

        //     12th ------------------------------------------

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




        // End the browser session
    }
};  