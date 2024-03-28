
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


    'Order management Test': function (browser) {

        // clicking on signin 
        browser.click({ selector: '#loginMenu' }, 'open signin menu');

        // add email into email input field
        browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');

        // add password into password input field
        browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');

        // clicking sign in button
        browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');

        // check 'Welcome' text
        browser.waitForElementVisible({ selector: '//*[@id="loginMenu"]/span[1]', locateStrategy: 'xpath' }, 'Welcome')

        // check the down arrow icon
        browser.waitForElementVisible({ selector: '//*[@id="loginMenu"]/span[2]', locateStrategy: 'xpath' }, 'down arrow icon')

        browser.pause(4000);
        browser.click({ selector: '//*[@id="header"]/ul/li[4]', locateStrategy: 'xpath' }, 'open signin menu');

        browser.waitForElementVisible({ selector: 'p>a[href="/my-account"]' }, 40000);

        // checking 'My Account' text
        browser.assert.containsText({ selector: 'p>a[href="/my-account"]' }, 'My Account');


        browser.click({ selector: 'a[href="/my-account"]' }, 'open My Account');

        browser.waitForElementVisible('body', 30000)
        // checking ' Order Management  ' para
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[1]/a', locateStrategy: 'xpath' }, 40000)

        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[1]/a', locateStrategy: 'xpath' }, 'Order Management')


        // click on it 
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[1]/a', locateStrategy: 'xpath' }, 'open Order Management')

        // checking 'ORDER MANAGEMENT' para
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge/app-page-heading/h1', locateStrategy: 'xpath' }, 40000)

        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge/app-page-heading/h1', locateStrategy: 'xpath' }, 'ORDER MANAGEMENT')

        // checking 'ORDERS & RETURNS' para
        browser.assert.containsText({ selector: '//*[@id="aa-orders-returns"]/span/span/h3/a', locateStrategy: 'xpath' }, 'ORDERS & RETURNS')

        // clicking 'ORDERS & RETURNS' url
        browser.click({ selector: '//*[@id="aa-orders-returns"]/span/span/h3/a', locateStrategy: 'xpath' }, 'open ORDERS & RETURNS')

        // checking 'ORDERS & RETURNS' text
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/h2', locateStrategy: 'xpath' }, 30000)

        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/h2', locateStrategy: 'xpath' }, 'ORDERS & RETURNS')

        // checking 'ORDERS' text
        browser.assert.containsText({ selector: '//*[@id="ordersTab"]', locateStrategy: 'xpath' }, 'ORDERS')

        browser.click({ selector: '//*[@id="ordersTab"]', locateStrategy: 'xpath' }, 'ORDERS')

        browser.assert.containsText({ selector: '/html/body/div[4]/div[2]/header/h3', locateStrategy: 'xpath' }, 'Orders');

        browser.assert.containsText({ selector: '/html/body/div[4]/div[2]/div', locateStrategy: 'xpath' }, 'Here, you will find previously purchased items.');

        //checking popup content
        browser.assert.containsText({ selector: '/html/body/div[4]/div[2]/footer/button', locateStrategy: 'xpath' }, 'NEXT');

        // click on next
        browser.click({ selector: '/html/body/div[4]/div[2]/footer/button', locateStrategy: 'xpath' }, 'click on NEXT');

        // checking 'RETURNS' text
        browser.assert.containsText({ selector: '//*[@id="returnsTab"]', locateStrategy: 'xpath' }, 'RETURNS')

        browser.assert.containsText({ selector: '/html/body/div[5]/div[2]/header/h3', locateStrategy: 'xpath' }, 'Returns');

        browser.assert.containsText({ selector: '/html/body/div[5]/div[2]/div', locateStrategy: 'xpath' }, 'Here, you will find items returned.');

        // checking accept popup content
        browser.assert.containsText({ selector: '/html/body/div[5]/div[2]/footer/button', locateStrategy: 'xpath' }, 'DONE');

        // clicking to accept popup content
        browser.click({ selector: '/html/body/div[5]/div[2]/footer/button', locateStrategy: 'xpath' }, 'click on DONE');

        // checking 'EXPORT' icon
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/div/button/mat-icon', locateStrategy: 'xpath' }, 'download')

        // checking 'EXPORT' button
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/div/button/span[2]', locateStrategy: 'xpath' }, 'EXPORT')


        // checking search order box visibility    
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/form/mat-form-field[1]/div[1]/div/div[1]', locateStrategy: 'xpath' }, 30000, 'search order input is visible')

        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/form/mat-form-field[2]', locateStrategy: 'xpath' }, 'Order Status select box is visible')

        // clicking on this box  
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/form/mat-form-field[2]', locateStrategy: 'xpath' }, 'clicked order status');

        // checking ' Open ' text 
        browser.assert.containsText({ selector: 'div[role="listbox"]>mat-option:nth-of-type(1)>span' }, 'Open')

        // checking ' Closed ' text 
        browser.assert.containsText({ selector: 'div[role="listbox"]>mat-option:nth-of-type(2)>span' }, 'Closed')

        // checking 'All' text 
        browser.assert.containsText({ selector: 'div[role="listbox"]>mat-option:nth-of-type(3)>span' }, 'All')

        // clicking on this box  
        browser.click({ selector: 'div[role="listbox"]>mat-option:nth-of-type(3)>span' }, 'clicked order status');

        // checking 'Start Date' text 
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/form/mat-form-field[3]', locateStrategy: 'xpath' }, 'Start Date input field is visible')

        // checking 'End Date' text 
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/form/mat-form-field[4]', locateStrategy: 'xpath' }, 'End Date input field is visible')

        // checking 'Order Number' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/div/table/thead/tr/th[1]/div/div[1]', locateStrategy: 'xpath' }, 'Order Number')

        // checking 'PO Number' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/div/table/thead/tr/th[2]/div/div[1]', locateStrategy: 'xpath' }, 'PO Number')

        // checking 'Ordered Type' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/div/table/thead/tr/th[3]/div/div[1]', locateStrategy: 'xpath' }, 'Order Type')

        // checking 'Ordered By' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/div/table/thead/tr/th[4]/div/div[1]', locateStrategy: 'xpath' }, 'Ordered By')

        // checking 'Status' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/div/table/thead/tr/th[5]/div/div[1]', locateStrategy: 'xpath' }, 'Status')

        // checking 'Order Date' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[1]/div/table/thead/tr/th[6]/div/div[1]', locateStrategy: 'xpath' }, 'Order Date')

        browser.click({ selector: '//*[@id="returnsTab"]', locateStrategy: 'xpath' }, 'open RETURNS')



        // checking search order box visibility    
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/form/mat-form-field[1]/div[1]/div/div[2]', locateStrategy: 'xpath' }, 30000, 'search order input is visible')

        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/form/mat-form-field[2]/div[1]/div/div[2]', locateStrategy: 'xpath' }, 'Order Status select box is visible')

        // clicking on this box  
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/form/mat-form-field[2]/div[1]/div/div[2]', locateStrategy: 'xpath' }, 'clicked order status');

        // checking ' Open ' text 
        browser.assert.containsText({ selector: 'div[role="listbox"]>mat-option:nth-of-type(1)>span' }, 'Open')

        // checking ' Closed ' text 
        browser.assert.containsText({ selector: 'div[role="listbox"]>mat-option:nth-of-type(2)>span' }, 'Closed')

        // checking 'All' text 
        browser.assert.containsText({ selector: 'div[role="listbox"]>mat-option:nth-of-type(3)>span' }, 'All')

        // clicking on this box  
        browser.click({ selector: 'div[role="listbox"]>mat-option:nth-of-type(3)>span' }, 'clicked order status');

        // checking 'Start Date' text 
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/form/mat-form-field[3]/div[1]/div/div[1]', locateStrategy: 'xpath' }, 'Start Date input field is visible')

        // checking 'End Date' text 
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/form/mat-form-field[4]/div[1]/div/div[1]', locateStrategy: 'xpath' }, 'End Date input field is visible')

        // checking 'Return #' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[1]/div/div[1]', locateStrategy: 'xpath' }, 'Return #')

        // checking 'Order Number' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[2]/div/div[1]', locateStrategy: 'xpath' }, 'Order Number')

        // checking 'PO Number' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[3]/div/div[1]', locateStrategy: 'xpath' }, 'PO Number')

        // checking 'Return location ' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[4]/div/div[1]', locateStrategy: 'xpath' }, 'Return Location')

        // checking 'Submitted By' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[5]/div/div[1]', locateStrategy: 'xpath' }, 'Submitted By')

        // checking 'Status' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[6]/div/div[1]', locateStrategy: 'xpath' }, 'Status')

        // checking 'Creation Date' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[7]/div/div[1]', locateStrategy: 'xpath' }, 'Creation Date')


        browser.url('https://onlineexpress-t.jlg.com/my-account/orders');


        browser.waitForElementVisible('body', 30000)
        // checking 'Locate and view the status for all open and closed orders. By selecting the Order Number from the results you can also obtain shipping and tracking information, see backordered quantities, and print invoices. Start returns or check return and order status.' para
        browser.assert.containsText({ selector: '//*[@id="aa-orders-returns"]/span/span/p', locateStrategy: 'xpath' }, 'Locate and view the status for all open and closed orders. By selecting the Order Number from the results you can also obtain shipping and tracking information, see backordered quantities, and print invoices. Start returns or check return and order status.')

        // checking 'INVOICE INFORMATION' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[2]/span/span/h3/a', locateStrategy: 'xpath' }, 'INVOICE INFORMATION')

        // clicking 'INVOICE INFORMATION' url
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[2]/span/span/h3/a', locateStrategy: 'xpath' }, 'open INVOICE INFORMATION')

        // checking 'INVOICE INFORMATION' para
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-invoice-information/h2', locateStrategy: 'xpath' }, 30000)

        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-invoice-information/h2', locateStrategy: 'xpath' }, 'INVOICE INFORMATION')

        // checking search by input field
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-invoice-information/form/div/mat-form-field/div[1]/div', locateStrategy: 'xpath' }, 'search by input field is visible')

        // clicking on this search by input field
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-invoice-information/form/div/mat-form-field/div[1]/div', locateStrategy: 'xpath' }, 'open search by input field')

        // checking ' Unpaid Invoices ' para
        browser.assert.containsText({ selector: 'mat-option[role="option"]:nth-of-type(1)>span' }, 'Unpaid Invoices')

        // checking ' Invoice Number ' para
        browser.assert.containsText({ selector: 'mat-option[role="option"]:nth-of-type(2)>span' }, 'Invoice Number')

        // checking ' PO Number ' para
        browser.assert.containsText({ selector: 'mat-option[role="option"]:nth-of-type(3)>span' }, 'PO Number')

        // checking ' Order Number ' para
        browser.assert.containsText({ selector: 'mat-option[role="option"]:nth-of-type(4)>span' }, 'Order Number')

        // checking ' Serial Number ' para
        browser.assert.containsText({ selector: 'mat-option[role="option"]:nth-of-type(5)>span' }, 'Serial Number')

        // checking ' Item Number ' para
        browser.assert.containsText({ selector: 'mat-option[role="option"]:nth-of-type(6)>span' }, 'Item Number')

        browser.click('body');     

        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-invoice-information/form/div/mat-form-field/div[2]/div/mat-hint', locateStrategy: 'xpath' }, 'Please select one..')

        // checking 'search  ' button
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-invoice-information/form/div/p/button/span[2]', locateStrategy: 'xpath' }, 'SEARCH')

        // back to default url
        browser.url('https://onlineexpress-t.jlg.com/my-account/orders');

        browser.waitForElementVisible('body', 30000)


        // checking 'Locate Equipment and Parts Invoices using various search criteria. quick reference guide' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[2]/span/span/p', locateStrategy: 'xpath' }, 'Locate Equipment and Parts Invoices using various search criteria. quick reference guide')

        // checking '90 DAY PARTS PURCHASE HISTORY' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[3]/span/span/h3/a', locateStrategy: 'xpath' }, '90 DAY PARTS PURCHASE HISTORY')

        // clicking '90 DAY PARTS PURCHASE HISTORY' para
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[3]/span/span/h3/a', locateStrategy: 'xpath' }, 'open 90 DAY PARTS PURCHASE HISTORY')

        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-purchase-history/h2', locateStrategy: 'xpath' }, 40000)

        // checking '90 DAY PARTS PURCHASE HISTORY' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-purchase-history/h2', locateStrategy: 'xpath' }, '90 DAY PARTS PURCHASE HISTORY')

        // checking customer number input field
        browser.waitForElementVisible({ selector: 'input[name="customerNum"]' }, 'customer number input field is visible')

        // checking company name input field
        browser.waitForElementVisible({ selector: 'input[name="companyName"]' }, 'company name input field is visible')

        // checking ship to number input field
        browser.waitForElementVisible({ selector: 'input[formcontrolname="shipToNumber"]' }, 'ship to number input field is visible')

        // checking 'PROCEED' button
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-purchase-history/form/div/div/div/button/span[2]', locateStrategy: 'xpath' }, 'PROCEED')

        // back to default url
        browser.url('https://onlineexpress-t.jlg.com/my-account/orders');

        browser.waitForElementVisible('body', 40000)

        // checking 'Provides a list of parts ordered in the last ninety days.' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[3]/span/span/p', locateStrategy: 'xpath' }, 'Provides a list of parts ordered in the last ninety days.')

        // checking 'PARTS PURCHASING PERFORMANCE' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[4]/span/span/h3/a', locateStrategy: 'xpath' }, 'PARTS PURCHASING PERFORMANCE')

        // clicking 'PARTS PURCHASING PERFORMANCE' url
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[4]/span/span/h3/a', locateStrategy: 'xpath' }, 'open PARTS PURCHASING PERFORMANCE')

        // checking 'Home'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]/a', locateStrategy: 'xpath' }, 'Home')

        // checking 'My Account'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/a', locateStrategy: 'xpath' }, 'My Account')

        // checking 'Orders'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[3]/a', locateStrategy: 'xpath' }, 'Orders')

        // checking 'Parts Purchasing Performance'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[4]/a', locateStrategy: 'xpath' }, 'Parts Purchasing Performance')

        // back to default url
        browser.url('https://onlineexpress-t.jlg.com/my-account/orders');

        browser.waitForElementVisible('body', 40000)


        // checking 'Categorizes and compares ordering performance within a chosen date range.' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[4]/span/span/p', locateStrategy: 'xpath' }, 'Categorizes and compares ordering performance within a chosen date range.')

        // checking 'EQUIPMENT SHIP DATE REPORT' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[5]/span/span/h3/a', locateStrategy: 'xpath' }, 'EQUIPMENT SHIP DATE REPORT')

        // clicking 'EQUIPMENT SHIP DATE REPORT' url
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[5]/span/span/h3/a', locateStrategy: 'xpath' }, 'open EQUIPMENT SHIP DATE REPORT')

        // checking 'Home'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]/a', locateStrategy: 'xpath' }, "Home")

        // checking 'My Account'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/a', locateStrategy: 'xpath' }, "My Account")

        // checking 'Orders'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[3]/a', locateStrategy: 'xpath' }, "Orders")

        // checking 'Equipment Ship Date Report' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[4]/span', locateStrategy: 'xpath' }, "Equipment Ship Date Report")

        // back to default url
        browser.url('https://onlineexpress-t.jlg.com/my-account/orders');

        browser.waitForElementVisible('body', 30000)

        // checking 'Receive an email with your machine's shipping date.' para
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-orders/mat-list/mat-list-item[5]/span/span/p', locateStrategy: 'xpath' }, "Receive an email with your machine's shipping date.")



        // End the browser session
    }
};  