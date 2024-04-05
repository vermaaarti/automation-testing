
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


    'MAXQUIP REMAN Home Page Test': function (browser) {

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

        // checking button ' MAXQUIP REMAN '
        browser.waitForElementVisible({ selector: 'a[href="/parts/aftermarket-products/maxquip-reman/_/N-1473540360"]' }, 'MAXQUIP REMAN');

        // open MAXQUIP REMAN
        browser.click({ selector: 'a[href="/parts/aftermarket-products/maxquip-reman/_/N-1473540360"]' }, 'open MAXQUIP REMAN');

        browser.waitForElementVisible('body')
        browser.pause(8000)

        // text 'home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>')

        // text 'Aftermarket Products>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Aftermarket Products >>')

        // text 'Reman Parts'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li', locateStrategy: 'xpath' }, 'Reman Parts')

        // text 'ZF Transmissions'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li[2]', locateStrategy: 'xpath' }, 'ZF Transmissions')

        // text 'MAXQUIP REMAN'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge[1]/app-breadcrumbs/app-refinement-crumbs/ol/li[3]', locateStrategy: 'xpath' }, 'MAXQUIP REMAN')

      
               // checking button ' MAXQUIP REMAN '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[1]/app-h1/h1', locateStrategy: 'xpath' }, 'MAXQUIP REMAN');

        // checking button ' results for "MAXQUIP REMAN" '
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[1]/app-h1/h1', locateStrategy: 'xpath' }, 'results for "MAXQUIP REMAN"');

        // ZF Transmissions Flyer
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-rich-text-main/div/p', locateStrategy: 'xpath' }, 'ZF Transmissions Flyer');

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

        // checking '1 – 5 of'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[2]/div', locateStrategy: 'xpath' }, '1 – 5 of')

        // > 
      //  browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[4]/app-content-slot-main/app-cartridges/app-cartridge/app-results-list/mat-paginator/div/div/div[2]/button[2]', locateStrategy: 'xpath' }, '> arraow is visible');

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