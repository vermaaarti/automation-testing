
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


    'Filters Home Page Test': function (browser) {

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

        // checking button ' Filters '
        browser.waitForElementVisible({ selector: 'a[href="/parts/aftermarket-products/filters/_/N-3207937541"]' }, 'Filters');

        // open Filters
        browser.click({ selector: 'a[href="/parts/aftermarket-products/filters/_/N-3207937541"]' }, 'open Filters');

        browser.waitForElementVisible('body')
        browser.pause(8000)

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Filters'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li', locateStrategy: 'xpath' }, 'Filters')

        // FILTERS
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[2]/app-content-slot-header/app-cartridges/app-cartridge/app-hero-carousel/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/h1', locateStrategy: 'xpath' }, 'FILTERS');

        // We offer a variety of filters that will help ensure your equipment is running smoothly. Whether you are looking for a hydraulic filter, lube oil filter, fuel filter or a variety of DEF (Diesel Exhaust Fluid) filter offerings, JLG has you covered. Our filter selection goes beyond JLG; Online Express carries various filters from other OEMs such as Donaldson, Deutz, Cummins, and Skyjack so you can get the right filter for the job.
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[2]/app-content-slot-header/app-cartridges/app-cartridge/app-hero-carousel/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/div/p', locateStrategy: 'xpath' }, 'We offer a variety of filters that will help ensure your equipment is running smoothly. Whether you are looking for a hydraulic filter, lube oil filter, fuel filter or a variety of DEF (Diesel Exhaust Fluid) filter offerings, JLG has you covered. Our filter selection goes beyond JLG; Online Express carries various filters from other OEMs such as Donaldson, Deutz, Cummins, and Skyjack so you can get the right filter for the job.');

        // checking button ' CATEGORY '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu/h5', locateStrategy: 'xpath' }, 'CATEGORY');

        // checking button ' View All '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click  button ' View All '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // checking button ' View less '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[9]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // checking  ' BRAND USED ON '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[2]/h5', locateStrategy: 'xpath' }, 'BRAND USED ON');

        // checking  ' View All '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click   ' View All '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // checking  ' View less '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[2]/ul/li[11]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // checking  ' MODEL NUMBER '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/h5', locateStrategy: 'xpath' }, 'MODEL NUMBER');

        // checking search input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/mat-form-field/div[1]/div/div[3]', locateStrategy: 'xpath' }, 'search input field is visible');

        // search icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/mat-form-field/div[1]/div/div[2]/mat-icon', locateStrategy: 'xpath' }, 'search icon is visible');

        // checking  ' View All '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click   ' View All '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // checking  ' View less '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/ul/li[11]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // checking  ' LENGTH '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[4]/h5', locateStrategy: 'xpath' }, 'LENGTH');

        // checking  ' View All '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click   ' View All '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // checking  ' View less '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[11]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // MEDIA MATERIAL
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[5]/h5', locateStrategy: 'xpath' }, 'MEDIA MATERIAL');

        // checking  ' View All '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[5]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click   ' View All '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[5]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // checking  ' View less '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[5]/ul/li[11]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // INSIDE DIAMETER
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[6]/h5', locateStrategy: 'xpath' }, 'INSIDE DIAMETER');

        // checking  ' View All '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[6]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click   ' View All '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[6]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // checking  ' View less '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[6]/ul/li[11]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // OUTSIDE DIAMETER
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[7]/h5', locateStrategy: 'xpath' }, 'OUTSIDE DIAMETER');

        // checking  ' View All '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[7]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click   ' View All '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[7]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // checking  ' View less '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[7]/ul/li[11]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // PRODUCT TYPE
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[8]/h5', locateStrategy: 'xpath' }, 'PRODUCT TYPE');

        // checking  ' View All '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[8]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click   ' View All '
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[8]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // checking  ' View less '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[8]/ul/li[11]/strong/u/a', locateStrategy: 'xpath' }, 'View less');







        // checking button ' FILTERS '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[1]/app-h1/h1', locateStrategy: 'xpath' }, 'FILTERS');

        // checking button ' results for "Filters" '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[1]/app-h1/h1', locateStrategy: 'xpath' }, 'results for "Filters"');

        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/div', locateStrategy: 'xpath' }, 'QTY:')

        // qty: input field is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/div', locateStrategy: 'xpath' }, 'qty: input field is visible')

        // checking button ' ADD TO CART '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/button/span[3]', locateStrategy: 'xpath' }, 'ADD TO CART');

        // + SHOPPING LIST
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/a', locateStrategy: 'xpath' }, '+ SHOPPING LIST')

        // click + SHOPPING LIST
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/a', locateStrategy: 'xpath' }, 'open + SHOPPING LIST')

        // checking ' SHOPPING LIST '
        browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-shopping-list>h3' }, 'SHOPPING LIST');

        // select shopping list select field is visible
        browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-shopping-list>form>mat-dialog-content>div>mat-form-field' }, 'select shopping list select field is visible')

        // +
        browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-shopping-list>form>mat-dialog-content>div>button' }, '+')

        // NEW LIST
        browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-shopping-list>form>mat-dialog-content>div>button' }, 'NEW LIST')

        // SAVE
        browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-shopping-list>form>mat-dialog-actions>div>button:nth-of-type(1)' }, 'SAVE')

        // CANCEL
        browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-shopping-list>form>mat-dialog-actions>div>button:nth-of-type(2)' }, 'CANCEL')

        // X close popup
        browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-shopping-list>button' }, 'X close popup')

        // checking ' Items per page: '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[1]/div', locateStrategy: 'xpath' }, 'Items per page:')

        // input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[1]/mat-form-field/div[1]/div/div[2]/mat-select', locateStrategy: 'xpath' }, 'page no. input box is visible');

        // open this input field
        browser.click({ selector: 'mat-select[role="combobox"][ngskiphydration][hidesingleselectionindicator]' }, 'open this input box');

        // checking '12'
        browser.waitForElementVisible({ selector: 'div[role="listbox"]>mat-option:nth-of-type(1)>span' }, '12')

        // checking '24'
        browser.waitForElementVisible({ selector: 'div[role="listbox"]>mat-option:nth-of-type(2)>span' }, '24')

        // checking '48'
        browser.waitForElementVisible({ selector: 'div[role="listbox"]>mat-option:nth-of-type(3)>span' }, '48')

        // close popup
        browser.click('body');

        // checking '1 – 12 of'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[2]/div', locateStrategy: 'xpath' }, '1 – 12 of')

        // > 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[2]/button[2]', locateStrategy: 'xpath' }, '> arraow is visible');

        // TOP SELLERS
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/h3', locateStrategy: 'xpath' }, 'TOP SELLERS')

        // left arrow
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/button[1]', locateStrategy: 'xpath' }, 'left arrow icon is visible');


        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/div', locateStrategy: 'xpath' }, 'QTY:')

        // qty: input field is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/div/mat-form-field/div[1]/div/div[2]', locateStrategy: 'xpath' }, 'qty: input field is visible')

        // checking button ' ADD TO CART '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/button', locateStrategy: 'xpath' }, 'ADD TO CART');

        // + SHOPPING LIST
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/a', locateStrategy: 'xpath' }, '+ SHOPPING LIST')

        //  slider icon is visible
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/ul', locateStrategy: 'xpath' }, 'slider icon is visible')



        // End the browser session
    }
};  