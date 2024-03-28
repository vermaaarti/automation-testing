
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


    'Clearsky slide-4 Test': function (browser) {

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

        browser.pause(4000)
        // click on right arrow 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');

        browser.pause(4000)
        // click on right arrow 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 30000);

        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'click on right arrow');

        browser.waitForElementVisible('body')

        // clicking button 'SHOP NOW'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[5]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 30000);

        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[5]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'open SHOP NOW');

        // home >>
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

        //  Aftermarket Products >>
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>');

        // Maxquip Parts
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li/span', locateStrategy: 'xpath' }, 'Maxquip Parts');

        // CATEGORY
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[1]/h5', locateStrategy: 'xpath' }, 'CATEGORY');

        // View All
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click view all
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // View Less
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[1]/ul/li[16]/strong/u/a', locateStrategy: 'xpath' }, 'View less');



        // BRAND USED ON
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[2]/h5', locateStrategy: 'xpath' }, 'BRAND USED ON');

        // MODEL NUMBER
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/h5', locateStrategy: 'xpath' }, 'MODEL NUMBER');

        // input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/mat-form-field/div[1]/div/div[3]/input', locateStrategy: 'xpath' }, 'input field is visible');

        // search icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[3]/mat-form-field/div[1]/div/div[2]/mat-icon', locateStrategy: 'xpath' }, 'search icon is visible');


        // LENGTH
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[4]/h5', locateStrategy: 'xpath' }, 'LENGTH');

        // View All
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click view all
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // View Less
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[4]/ul/li[8]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // MEDIA MATERIAL
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[5]/h5', locateStrategy: 'xpath' }, 'MEDIA MATERIAL');

        // INSIDE DIAMETER
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[6]/h5', locateStrategy: 'xpath' }, 'INSIDE DIAMETER');

        // View All
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[6]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click view all
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[6]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // View Less
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[6]/ul/li[7]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // OUTSIDE DIAMETER
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[7]/h5', locateStrategy: 'xpath' }, 'OUTSIDE DIAMETER');

        // View All
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[7]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'View All');

        // click view all
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[7]/ul/li[6]/strong/u/a', locateStrategy: 'xpath' }, 'open View All');

        // View Less
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[7]/ul/li[8]/strong/u/a', locateStrategy: 'xpath' }, 'View less');

        // PRODUCT TYPE
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[1]/app-cartridges/app-cartridge[2]/app-content-slot-left/app-cartridges/app-cartridge/app-guided-navigation/div/div[1]/app-refinement-menu[8]/h5', locateStrategy: 'xpath' }, 'PRODUCT TYPE');

        // MAXQUIP PARTS
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[1]/app-h1/h1', locateStrategy: 'xpath' }, 'MAXQUIP PARTS');

        // results for "Maxquip Parts"
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[2]/app-search-adjustments/div/div', locateStrategy: 'xpath' }, 'results for "Maxquip Parts"');

        // AFTERMARKET REPLACEMENT PARTS FOR MIXED FLEETS
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/h2/span/strong', locateStrategy: 'xpath' }, 'AFTERMARKET REPLACEMENT PARTS FOR MIXED FLEETS');

        //  MaxQuip is a line of parts designed to fit a wide variety machine brands. Find aftermarket parts for brands such as Genie, JCB, Skyjack and more. Everything from platforms and filter kits, to accessories like Platform Fabric Mesh Kits and MaxTrax Rubber Tracks — find it here.
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/p[1]', locateStrategy: 'xpath' }, 'MaxQuip is a line of parts designed to fit a wide variety machine brands. Find aftermarket parts for brands such as Genie, JCB, Skyjack and more. Everything from platforms and filter kits, to accessories like Platform Fabric Mesh Kits and MaxTrax Rubber Tracks — find it here.');

        // With MaxQuip, you'll have access to tens of thousands of SKUs made to fit competitive products. 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/p[2]', locateStrategy: 'xpath' }, "With MaxQuip, you'll have access to tens of thousands of SKUs made to fit competitive products.");

        // img 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[1]/img', locateStrategy: 'xpath' }, 'img is visible');

        // More than 65 product categories offer solutions for most common service needs.
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/p', locateStrategy: 'xpath' }, "More than 65 product categories offer solutions for most common service needs.");

        //  Accessories
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[1]/li[1]', locateStrategy: 'xpath' }, "Accessories");

        //  Brakes
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[1]/li[2]', locateStrategy: 'xpath' }, "Brakes");

        //  Cables
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[1]/li[3]', locateStrategy: 'xpath' }, "Cables");

        //  Chargers
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[1]/li[4]', locateStrategy: 'xpath' }, "Chargers");

        //  Connectors
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[1]/li[5]', locateStrategy: 'xpath' }, "Connectors");

        // Controllers
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[2]/li[1]', locateStrategy: 'xpath' }, "Controllers");

        //Filters
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[2]/li[2]', locateStrategy: 'xpath' }, "Filters");

        //Forklift Parts
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[2]/li[3]', locateStrategy: 'xpath' }, "Forklift Parts");

        // Generators
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[2]/li[4]', locateStrategy: 'xpath' }, "Generators");

        //Motors
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/div/ul[2]/li[5]', locateStrategy: 'xpath' }, "Motors");


        //  Platforms
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/ul/li[1]', locateStrategy: 'xpath' }, "Platforms");

        //  Rubber Tracks
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/ul/li[2]', locateStrategy: 'xpath' }, "Rubber Tracks");

        //  Sensors
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/ul/li[3]', locateStrategy: 'xpath' }, "Sensors");

        //  Valves
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/ul/li[4]', locateStrategy: 'xpath' }, "Valves");

        //  Wheels
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[1]/td[2]/div/ul/li[5]', locateStrategy: 'xpath' }, "Wheels");


        //  Parts availability for over 71 different manufacturers makes it simple to manage your entire fleet, no matter what your equipment mix might look like.
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/p', locateStrategy: 'xpath' }, "Parts availability for over 71 different manufacturers makes it simple to manage your entire fleet, no matter what your equipment mix might look like.");

        // img
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[1]/img', locateStrategy: 'xpath' }, 'img is visible');

        //  Bobcat
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[1]/li[1]', locateStrategy: 'xpath' }, "Bobcat");

        //  CAT
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[1]/li[2]', locateStrategy: 'xpath' }, "CAT");

        //  Deutz
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[1]/li[3]', locateStrategy: 'xpath' }, "Deutz");

        //  Gehl
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[1]/li[4]', locateStrategy: 'xpath' }, "Gehl");

        //  Genie
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[1]/li[5]', locateStrategy: 'xpath' }, "Genie");

        //  Grove
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[1]/li[6]', locateStrategy: 'xpath' }, "Grove");


        // Ingersoll Rand
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[2]/li[1]', locateStrategy: 'xpath' }, "Ingersoll Rand");

        // JCB
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[2]/li[2]', locateStrategy: 'xpath' }, "JCB");

        // Kubota
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[2]/li[3]', locateStrategy: 'xpath' }, "Kubota");

        // Manitou
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[2]/li[4]', locateStrategy: 'xpath' }, "Manitou");

        // Marklift
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[2]/li[5]', locateStrategy: 'xpath' }, "Marklift");

        // MEC
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/div/ul[2]/li[6]', locateStrategy: 'xpath' }, "MEC");


        // Simon
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/ul/li[1]', locateStrategy: 'xpath' }, "Simon");

        // Skyjack
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/ul/li[2]', locateStrategy: 'xpath' }, "Skyjack");

        // Snorkel
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/ul/li[3]', locateStrategy: 'xpath' }, "Snorkel");

        // Terex
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/ul/li[4]', locateStrategy: 'xpath' }, "Terex");

        // Toyota
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/ul/li[5]', locateStrategy: 'xpath' }, "Toyota");

        // UpRight
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[2]/td[2]/div/ul/li[6]', locateStrategy: 'xpath' }, "UpRight");

        // img 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[3]/td[1]/img', locateStrategy: 'xpath' }, 'img is visible');

        // Simple. Convenient. Reliable. Get it all right here — in 1 place.
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/table/tbody/tr[3]/td[2]', locateStrategy: 'xpath' }, "Simple. Convenient. Reliable. Get it all right here — in 1 place.");

        // JLG, ONLINE EXPRESS and MAXQUIP are trademarks of JLG Industries, Inc.  All other manufacturer names and trademarks are the property of their respective owners and are used on this website for reference purposes only.  JLG is not affiliated with or authorized by any of those manufacturers but provides replacement parts that are designed to fit with equipment from these other manufacturers.  Original equipment manufacturer part numbers and product descriptions are for reference only and are not intended to suggest endorsement or authorization by the manufacturer.
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/p[3]', locateStrategy: 'xpath' }, "JLG, ONLINE EXPRESS and MAXQUIP are trademarks of JLG Industries, Inc.  All other manufacturer names and trademarks are the property of their respective owners and are used on this website for reference purposes only.  JLG is not affiliated with or authorized by any of those manufacturers but provides replacement parts that are designed to fit with equipment from these other manufacturers.  Original equipment manufacturer part numbers and product descriptions are for reference only and are not intended to suggest endorsement or authorization by the manufacturer.");

        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/div', locateStrategy: 'xpath' }, 'QTY:');

        // input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'input field is visible');

        // ADD TO CART
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/button/span[2]', locateStrategy: 'xpath' }, "ADD TO CART");

        // + SHOPPING LIST
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[1]/div/form/a/span[2]', locateStrategy: 'xpath' }, "+ SHOPPING LIST");


        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[2]/div/form/div', locateStrategy: 'xpath' }, 'QTY:');

        // input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[2]/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'input field is visible');

        // ADD TO CART
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[2]/div/form/button/span[2]', locateStrategy: 'xpath' }, "ADD TO CART");

        // + SHOPPING LIST
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[2]/div/form/a/span[2]', locateStrategy: 'xpath' }, "+ SHOPPING LIST");


        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[3]/div/form/div', locateStrategy: 'xpath' }, 'QTY:');

        // input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[3]/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'input field is visible');

        // ADD TO CART
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[3]/div/form/button/span[2]', locateStrategy: 'xpath' }, "ADD TO CART");

        // + SHOPPING LIST
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/div/div[3]/div/form/a/span[2]', locateStrategy: 'xpath' }, "+ SHOPPING LIST");

        // Items per page: 
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[1]/div', locateStrategy: 'xpath' }, "Items per page:");

        //  select field 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[1]/mat-form-field/div[1]/div/div[2]/mat-select', locateStrategy: 'xpath' }, 'select field is visible');

        //  open select field 
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[1]/mat-form-field/div[1]/div/div[2]/mat-select', locateStrategy: 'xpath' }, 'open select field');

        // 12 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)>span' }, "12");

        // 24
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)>span' }, "24");

        // 48 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)>span' }, "48");

        // close popup
        browser.click('body')

        //   1 – 12 of
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[2]/div', locateStrategy: 'xpath' }, "1 – 12 of");

        // right arrow
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[2]/button[2]', locateStrategy: 'xpath' }, 'right arrow is visible');


        //   TOP SELLERS
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/h3', locateStrategy: 'xpath' }, "TOP SELLERS");

        // left arrow
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/button[1]', locateStrategy: 'xpath' }, 'left arrow is visible');


        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/div', locateStrategy: 'xpath' }, 'QTY:');

        //  input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'input field is visible');

        // ADD TO CART
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/button', locateStrategy: 'xpath' }, "ADD TO CART");

        // + SHOPPING LIST
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[1]/div/div/div/form/a/span[2]', locateStrategy: 'xpath' }, "+ SHOPPING LIST");


        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[2]/div/div/div/form/div', locateStrategy: 'xpath' }, 'QTY:');

        //  input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[2]/div/div/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'input field is visible');

        // ADD TO CART
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[2]/div/div/div/form/button', locateStrategy: 'xpath' }, "ADD TO CART");

        // + SHOPPING LIST
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[2]/div/div/div/form/a/span[2]', locateStrategy: 'xpath' }, "+ SHOPPING LIST");


        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[3]/div/div/div/form/div', locateStrategy: 'xpath' }, 'QTY:');

        //  input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[3]/div/div/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'input field is visible');

        // ADD TO CART
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[3]/div/div/div/form/button', locateStrategy: 'xpath' }, "ADD TO CART");

        // + SHOPPING LIST
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[3]/div/div/div/form/a/span[2]', locateStrategy: 'xpath' }, "+ SHOPPING LIST");


        // QTY:
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[4]/div/div/div/form/div', locateStrategy: 'xpath' }, 'QTY:');

        //  input field
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[4]/div/div/div/form/div/mat-form-field', locateStrategy: 'xpath' }, 'input field is visible');

        // ADD TO CART
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[4]/div/div/div/form/button', locateStrategy: 'xpath' }, "ADD TO CART");

        // + SHOPPING LIST
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/div/div/div[4]/div/div/div/form/a/span[2]', locateStrategy: 'xpath' }, "+ SHOPPING LIST");


        // slider icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[5]/app-listrak-recommender/div/ngx-slick-carousel/ul', locateStrategy: 'xpath' }, 'slider icon is visible');





        // End the browser session
    }
};  