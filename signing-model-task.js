
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


  'Signing Model Test': function (browser) {

    // clicking on signin 
    browser.click({ selector: '#loginMenu' }, 'open signin menu');

    // add email into email input field
    browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');

    // add password into password input field
    browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');

    // clicking sign in button
    browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');


    browser.waitForElementVisible({ selector: '//*[@id="loginMenu"]/span[1]', locateStrategy: 'xpath' }, 'Welcome')

    // check the down arrow icon
    browser.waitForElementVisible({ selector: '//*[@id="loginMenu"]/span[2]', locateStrategy: 'xpath' }, 'down arrow icon')

    browser.pause(4000);

    // clicking on signin to 

    browser.click({ selector: '//*[@id="loginMenu"]', locateStrategy: 'xpath' }, 'open signin menu');

    browser.waitForElementVisible({ selector: 'div[id="welcomeMenu"]>div:nth-of-type(2)>p:nth-of-type(1)' }, 60000);

    // checking 'JLG Customer Number:' text
    browser.assert.containsText({ selector: 'div[id="welcomeMenu"]>div:nth-of-type(2)>p:nth-of-type(1)' }, 'JLG Customer Number:');

    // checking 'My Account' text
    browser.assert.containsText({ selector: '//*[@id="welcomeMenu"]/div[2]/p[2]/a', locateStrategy: 'xpath' }, 'My Account');

    // checking 'Orders & Returns' text
    browser.assert.containsText({ selector: '//*[@id="welcomeMenu"]/div[2]/p[3]/a', locateStrategy: 'xpath' }, 'Orders & Returns');

    // checking 'Shopping Lists' text
    browser.assert.containsText({ selector: '//*[@id="welcomeMenu"]/div[2]/p[4]/a', locateStrategy: 'xpath' }, 'Shopping Lists');

    // checking 'Subcription Management' text
    browser.assert.containsText({ selector: '//*[@id="welcomeMenu"]/div[2]/p[5]/a', locateStrategy: 'xpath' }, 'Subcription Management');

    // checking 'Manage Users' text
    browser.assert.containsText({ selector: '//*[@id="welcomeMenu"]/div[2]/p[6]/a', locateStrategy: 'xpath' }, 'Manage Users');

    // checking customer no. box visibility
    browser.waitForElementVisible({ selector: '//*[@id="mat-input-17"]', locateStrategy: 'xpath' }, 'customer no. input is visible')

    // checking 'change account' button
    browser.assert.containsText({ selector: '//*[@id="welcomeMenu"]/div[2]/form/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CHANGE ACCOUNT')

    // checking 'search account' para
    browser.assert.containsText({ selector: '//*[@id="welcomeMenu"]/div[2]/form/div/a', locateStrategy: 'xpath' }, 'search accounts')

    // checking 'reset' button
    browser.assert.containsText({ selector: '//*[@id="welcomeMenu"]/div[2]/form/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'RESET')

    // checking 'sign out ' text
    browser.assert.containsText({ selector: '//*[@id="logoutLink"]', locateStrategy: 'xpath' }, 'Sign Out')

    // checking sign out icon visibility
    browser.waitForElementVisible({ selector: '//*[@id="logoutLink"]/span', locateStrategy: 'xpath' }, 'sign out icon is visible')


    // MY ACCOUNT - DASHBOARD section

    // click on 'My Account'
    browser.waitForElementVisible({ selector: 'a[href="/my-account"]' }, 30000);

    browser.click({ selector: 'a[href="/my-account"]' }, 'open My Account');

    browser.waitForElementVisible('body', 20000)

    browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge/app-page-heading/h1', locateStrategy: 'xpath' }, 40000)

    // checking 'MY ACCOUNT - DASHBOARD' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge/app-page-heading/h1', locateStrategy: 'xpath' }, 'MY ACCOUNT - DASHBOARD')

    // checking 'MY ACCOUNT - DASHBOARD' left menu
    browser.assert.containsText({ selector: '//*[@id="accountNavBar"]/li[1]/a/span[2]', locateStrategy: 'xpath' }, 'MY ACCOUNT - DASHBOARD')

    // checking 'ORDER MANAGEMENT' left menu
    browser.assert.containsText({ selector: '//*[@id="accountNavBar"]/li[2]/a/span[2]', locateStrategy: 'xpath' }, 'ORDER MANAGEMENT')

    // checking 'PROFILE' left menu
    browser.assert.containsText({ selector: '//*[@id="accountNavBar"]/li[3]/a/span[2]', locateStrategy: 'xpath' }, 'PROFILE')

    // checking 'ADDRESS BOOK' left menu
    browser.assert.containsText({ selector: '//*[@id="accountNavBar"]/li[4]/a/span[2]', locateStrategy: 'xpath' }, 'ADDRESS BOOK')

    // checking 'SHOPPING LISTS' left menu
    browser.assert.containsText({ selector: '//*[@id="accountNavBar"]/li[5]/a/span[2]', locateStrategy: 'xpath' }, 'SHOPPING LISTS')

    // checking 'MY ACCOUNT - DASHBOARD' left menu
    browser.assert.containsText({ selector: '//*[@id="accountNavBar"]/li[6]/a/span[2]', locateStrategy: 'xpath' }, 'PAYMENT PREFERENCES')

    // checking 'SUBSCRIPTION MANAGEMENT' left menu
    browser.assert.containsText({ selector: '//*[@id="accountNavBar"]/li[7]/a/span[2]', locateStrategy: 'xpath' }, 'SUBSCRIPTION MANAGEMENT')

    // checking 'MANAGE USERS' left menu
    browser.assert.containsText({ selector: '//*[@id="accountNavBar"]/li[8]/a/span[2]', locateStrategy: 'xpath' }, 'MANAGE USERS')

    // checking ' Order Management  ' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[1]/a', locateStrategy: 'xpath' }, 'Order Management')

    // checking ' Monitor orders that are open or closed.' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[1]', locateStrategy: 'xpath' }, 'Monitor orders that are open or closed.')

    // checking ' Profile ' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[2]/a', locateStrategy: 'xpath' }, 'Profile')

    // checking 'Modify your password and choose defaults for shipping.' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[2]', locateStrategy: 'xpath' }, 'Modify your password and choose defaults for shipping.')

    // checking ' Address Book ' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[3]/a', locateStrategy: 'xpath' }, 'Address Book')

    // checking ' View existing Shipping Addresses, manage defaults, or create new Shipping Addresses. ' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[3]', locateStrategy: 'xpath' }, 'View existing Shipping Addresses, manage defaults, or create new Shipping Addresses.')

    // checking 'Shopping Lists' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[4]/a', locateStrategy: 'xpath' }, 'Shopping Lists')

    // checking 'Add and remove parts to purchasing later.' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[4]', locateStrategy: 'xpath' }, 'Add and remove parts to purchasing later.')

    // checking 'Payment Preferences' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[5]/a', locateStrategy: 'xpath' }, 'Payment Preferences')

    // checking 'Add and delete credit cards you use to pay for orders and invoices.' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[5]', locateStrategy: 'xpath' }, 'Add and delete credit cards you use to pay for orders and invoices.')

    // checking 'Subscription Management' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[6]/a', locateStrategy: 'xpath' }, 'Subscription Management')

    // checking 'Manage your active subscriptions.' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[6]', locateStrategy: 'xpath' }, 'Manage your active subscriptions.')

    // checking 'Manage Users' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[7]/a', locateStrategy: 'xpath' }, 'Manage Users')

    // checking ' Manage users information.' para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[7]', locateStrategy: 'xpath' }, 'Manage users information.')



    // ORDERS & RETURNS section

    // redirecting default url
    browser.url('https://onlineexpress-t.jlg.com/')

    // clicking on signin to 
    browser.waitForElementVisible({ selector: '//*[@id="loginMenu"]', locateStrategy: 'xpath' }, 40000);

    browser.click({ selector: '//*[@id="loginMenu"]', locateStrategy: 'xpath' }, 'open signin menu');

    // clicking 'Orders & Returns' 
    browser.click({ selector: '//*[@id="welcomeMenu"]/div[2]/p[3]/a', locateStrategy: 'xpath' }, 'clicked Orders & Returns');

    // checking 'orders' text 
    browser.assert.containsText({ selector: 'h1[class="_printHide"]' }, 'ORDERS')

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
    browser.click({ selector: 'div[role="listbox"]>mat-option:nth-of-type(3)>span' }, 'close order status');

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

    // clicking on returns
    browser.waitForElementVisible({ selector: '//*[@id="returnsTab"]', locateStrategy: 'xpath' }, 30000)

    browser.click({ selector: '//*[@id="returnsTab"]', locateStrategy: 'xpath' }, 'open RETURNS')

    // checking 'Return #' text 
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[1]/div/div[1]', locateStrategy: 'xpath' }, 'Return #')

    // checking 'Order Number' text 
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[2]/div/div[1]', locateStrategy: 'xpath' }, 'Order Number')

    // checking 'PO Number' text 
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[3]/div/div[1]', locateStrategy: 'xpath' }, 'PO Number')

    // checking 'Return Location' text 
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[4]/div/div[1]', locateStrategy: 'xpath' }, 'Return Location')

    // checking 'Submitted By' text 
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[5]/div/div[1]', locateStrategy: 'xpath' }, 'Submitted By')

    // checking 'Status' text 
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[6]/div/div[1]', locateStrategy: 'xpath' }, 'Status')

    // checking 'Creation Date' text 
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-parts-order-inquiry/app-parts-orders[2]/div/table/thead/tr/th[7]/div/div[1]', locateStrategy: 'xpath' }, 'Creation Date')



    // shopping lists field

    // redirecting default url
    browser.url('https://onlineexpress-t.jlg.com/')

    // clicking on signin to 
    browser.waitForElementVisible({ selector: '//*[@id="loginMenu"]', locateStrategy: 'xpath' }, 40000);

    browser.click({ selector: '//*[@id="loginMenu"]', locateStrategy: 'xpath' }, 'open signin menu');

    // clicking 'Shopping Lists' 
    browser.waitForElementVisible({ selector: '//*[@id="welcomeMenu"]/div[2]/p[4]/a', locateStrategy: 'xpath' }, 40000);

    browser.click({ selector: '//*[@id="welcomeMenu"]/div[2]/p[4]/a', locateStrategy: 'xpath' }, 'shopping lists');

    // checking 'SHOPPING LISTS' text
    browser.assert.containsText({ selector: 'h1[class="_printHide"]' }, 'SHOPPING LISTS')

    // 'search shopping list' input field
    browser.waitForElementVisible({ selector: 'input[name="search"]' }, 'search shopping list input field')

    // checking 'SEARCH' button
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-shopping-lists/div/form/div/button/span[2]', locateStrategy: 'xpath' }, 'SEARCH')

    // checking '+' icon
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-shopping-lists/div/form/a/mat-icon', locateStrategy: 'xpath' }, 'add')

    // checking 'NEW LIST' INPUT FIELD
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-shopping-lists/div/form/a/span[2]', locateStrategy: 'xpath' }, 'NEW LIST')

    // checking 'Name' text
    browser.assert.containsText({ selector: '//*[@id="shoppingListResults"]/table/thead/tr/th[2]/div/div[1]', locateStrategy: 'xpath' }, 'Name')

    // checking 'Date' 
    browser.assert.containsText({ selector: '//*[@id="shoppingListResults"]/table/thead/tr/th[3]/div/div[1]', locateStrategy: 'xpath' }, 'Date')

    // checking 'Privacy' 
    browser.assert.containsText({ selector: '//*[@id="shoppingListResults"]/table/thead/tr/th[4]/div/div[1]', locateStrategy: 'xpath' }, 'Privacy')

    // checking icon
    browser.assert.containsText({ selector: '//*[@id="shoppingListResults"]/table/thead/tr/th[4]/div/div[1]/mat-icon', locateStrategy: 'xpath' }, 'help')

    // 'created by' select field
    browser.waitForElementVisible({ selector: '//*[@id="mat-select-0"]', locateStrategy: 'xpath' }, 'created by select field is visible')

    // checking email text
    browser.assert.containsText({ selector: '//*[@id="shoppingListResults"]/table/tbody/tr[1]/td[6]/a', locateStrategy: 'xpath' }, 'Email')

    // checking email icon 
    browser.waitForElementVisible({ selector: '//*[@id="shoppingListResults"]/table/tbody/tr[1]/td[6]/a/span', locateStrategy: 'xpath' }, 'email icon is visible')

    // checking button 'add to cart'
    browser.assert.containsText({ selector: '//*[@id="shoppingListResults"]/table/tbody/tr[1]/td[7]/button/span[2]', locateStrategy: 'xpath' }, 'ADD TO CART')

    // clicking 'new list' and popup
    browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-shopping-lists/div/form/a', locateStrategy: 'xpath' }, 'open new list');

    // checking text 'SHOPPING LIST'

    browser.assert.containsText({ selector: 'h3[class="mat-mdc-dialog-title mdc-dialog__title"]' }, 'SHOPPING LIST')

    // checking last name input field 
    browser.waitForElementVisible({ selector: '//*[@id="eventName"]', locateStrategy: 'xpath' }, 'last name input field  is visible')

    // checking notes input field
    browser.waitForElementVisible({ selector: '//*[@id="description"]', locateStrategy: 'xpath' }, 'notes input field is visible')

    // checking text 'Privacy'
    browser.assert.containsText({ selector: 'form>mat-dialog-content' }, 'Privacy')

    // checking icon 'help'
    browser.assert.containsText({ selector: 'form>mat-dialog-content>mat-icon' }, 'help')

    // checking on-off button
    browser.waitForElementVisible({ selector: 'mat-slide-toggle[formcontrolname="public"]>div>button' }, 'on-off button is visible')

    // checking text 'private'
    browser.assert.containsText({ selector: 'mat-slide-toggle[formcontrolname="public"]>div>label' }, 'Private')

    //  checking SAVE button
    browser.assert.containsText({ selector: 'mat-dialog-actions[class="mat-mdc-dialog-actions mdc-dialog__actions"]>div>button:nth-of-type(1)>span:nth-of-type(2)' }, 'SAVE')

    //  checking CANCEL button
    browser.assert.containsText({ selector: 'mat-dialog-actions[class="mat-mdc-dialog-actions mdc-dialog__actions"]>div>button:nth-of-type(2)>span:nth-of-type(2)' }, 'CANCEL')

    // checking 'x' button
    browser.waitForElementVisible({ selector: 'button.dialog-close.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base' }, 'x button is visible')

    // clicking on 'x' button
    browser.click({ selector: 'button.dialog-close.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base' }, 'close popup')





    // Subscription Management section 

    // redirecting default url
    browser.url('https://onlineexpress-t.jlg.com/')

    // clicking on signin to 
    browser.click({ selector: '//*[@id="loginMenu"]', locateStrategy: 'xpath' }, 'open signin menu');

    // clicking 'Subcription Management' 
    browser.click({ selector: '//*[@id="welcomeMenu"]/div[2]/p[5]/a', locateStrategy: 'xpath' }, 'open Subcription Management');

    // checking text 'Subscription Management'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-subscription-management/h1', locateStrategy: 'xpath' }, 'Subscription Management')

    // checking text 'ClearSky Smart Fleet™'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-subscription-management/h4[1]', locateStrategy: 'xpath' }, 'ClearSky Smart Fleet™')

    // checking text 'package'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-subscription-management/h6[1]', locateStrategy: 'xpath' }, 'Package')

    // checking text 'Add-Ons'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-subscription-management/h6[2]', locateStrategy: 'xpath' }, 'Add-Ons')

    // checking text 'API Subscriptions'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-subscription-management/h4[2]', locateStrategy: 'xpath' }, 'API Subscriptions')

    // checking text 'Billing History'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-subscription-management/h4[3]', locateStrategy: 'xpath' }, 'Billing History')

    // checking text 'Purchase Date'
    browser.assert.containsText({ selector: '//*[@id="billingHistoryResults"]/table/thead/tr/th[1]', locateStrategy: 'xpath' }, 'Purchase Date')

    // checking text 'PO Number'
    browser.assert.containsText({ selector: '//*[@id="billingHistoryResults"]/table/thead/tr/th[2]', locateStrategy: 'xpath' }, 'PO Number')

    // checking text 'Ordered By'
    browser.assert.containsText({ selector: '//*[@id="billingHistoryResults"]/table/thead/tr/th[3]', locateStrategy: 'xpath' }, 'Ordered By')

    // checking text 'Amount'
    browser.assert.containsText({ selector: '//*[@id="billingHistoryResults"]/table/thead/tr/th[4]', locateStrategy: 'xpath' }, 'Amount')

    // checking text 'Order #'
    browser.assert.containsText({ selector: '//*[@id="billingHistoryResults"]/table/thead/tr/th[5]', locateStrategy: 'xpath' }, 'Order #')

    // checking text 'Renew Date'
    browser.assert.containsText({ selector: '//*[@id="billingHistoryResults"]/table/thead/tr/th[6]', locateStrategy: 'xpath' }, 'Renew Date')


    // MANAGE USERS section

    // redirecting default url
    browser.url('https://onlineexpress-t.jlg.com/')

    // clicking on signin to 
    browser.click({ selector: '//*[@id="loginMenu"]', locateStrategy: 'xpath' }, 'open signin menu');

    // clicking 'MANAGE USERS' 
    browser.click({ selector: '//*[@id="welcomeMenu"]/div[2]/p[6]/a', locateStrategy: 'xpath' }, 'open MANAGE USERS');

    // checking text 'MANAGE USERS'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge/app-page-heading/h1', locateStrategy: 'xpath' }, 'MANAGE USERS')

    // checking para
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/p[1]/p', locateStrategy: 'xpath' }, "The Manage Users interface is limited to modifying a user's role and status. When a user signs up through New User Registration their initial Online Express account set up is limited to non-order research only.")

    // checking text 'Training Purchaser'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[1]/b', locateStrategy: 'xpath' }, 'Training Purchaser')

    // checking text '- ability to purchase JLG Training.'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[1]', locateStrategy: 'xpath' }, '- ability to purchase JLG Training.')

    // checking text 'ClearSky Admin'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[2]/b', locateStrategy: 'xpath' }, 'ClearSky Admin')

    // checking text '- ability to purchase and manage ClearSky subscriptions.'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[2]', locateStrategy: 'xpath' }, '- ability to purchase and manage ClearSky subscriptions.')

    // checking text 'Invoice Research'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[3]/b', locateStrategy: 'xpath' }, 'Invoice Research')

    // checking text ' - ability to see Order Management with the ability to query order history.'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[3]', locateStrategy: 'xpath' }, ' - ability to see Order Management with the ability to query order history.')

    // checking text 'Parts Purchaser'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[4]/b', locateStrategy: 'xpath' }, 'Parts Purchaser')

    // checking text '- ability to make a purchase.'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[4]', locateStrategy: 'xpath' }, '- ability to make a purchase.')

    // checking text 'User Admin'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[5]/b', locateStrategy: 'xpath' }, 'User Admin')

    // checking text '- ability to manage all account users through Manage Users.'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[5]', locateStrategy: 'xpath' }, '- ability to manage all account users through Manage Users.')

    // checking text 'User Account'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[6]/b', locateStrategy: 'xpath' }, 'User Account')

    // checking text '- access to all features except cannot checkout, search order history, access another account, and manage users of the company.'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/ul/li[6]', locateStrategy: 'xpath' }, '- access to all features except cannot checkout, search order history, access another account, and manage users of the company.')

    // checking icon download
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/p[2]/button[1]/mat-icon', locateStrategy: 'xpath' }, 'download')

    // checking text 'export'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/p[2]/button[1]/span[2]', locateStrategy: 'xpath' }, 'EXPORT')

    // checking icon add
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/p[2]/button[2]/mat-icon', locateStrategy: 'xpath' }, 'add')

    // checking text 'invite user'
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/p[2]/button[2]/span[2]', locateStrategy: 'xpath' }, 'INVITE USER')

    // checking 'search users ' field'
    browser.waitForElementVisible({ selector: 'input[name="searchUsers"]' }, 'search users input field is visible')

    // checking search button
    browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/form/div/button/span[2]', locateStrategy: 'xpath' }, 'SEARCH')

    // checking 'roles' field'
    browser.waitForElementVisible({ selector: 'mat-select[name="roleFilter"]' }, 'roles select field is visible')

    // checking 'search users ' field'
    browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-manage-users/form/mat-form-field[2]/div[1]/div/div[1]', locateStrategy: 'xpath' }, 'status select field is visible')

    // checking 'First Name'  text
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/thead/tr/th[1]/div/div[1]', locateStrategy: 'xpath' }, 'First Name')

    // checking 'Last Name' text
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/thead/tr/th[2]/div/div[1]', locateStrategy: 'xpath' }, 'Last Name')

    // checking 'Email Address' text
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/thead/tr/th[3]/div/div[1]', locateStrategy: 'xpath' }, 'Email Address')

    // checking 'Customer Number' text
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/thead/tr/th[4]/div/div[1]', locateStrategy: 'xpath' }, 'Customer Number')

    // checking 'Last Login Date' text
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/thead/tr/th[5]/div/div[1]', locateStrategy: 'xpath' }, 'Last Login Date')

    // checking 'User Permissions' text
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/thead/tr/th[6]', locateStrategy: 'xpath' }, 'User Permissions')

    // checking 'Status' text
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/thead/tr/th[7]', locateStrategy: 'xpath' }, 'Status')

    // checking edit icon 
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/tbody/tr[1]/td[6]/a/mat-icon', locateStrategy: 'xpath' }, 'edit')

    // checking  visibility_off  icon
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/tbody/tr[1]/td[8]/mat-icon', locateStrategy: 'xpath' }, 'visibility_off')

    // checking 'Status' text
    browser.assert.containsText({ selector: '//*[@id="userResults"]/table/tbody/tr[1]/td[9]/a/mat-icon', locateStrategy: 'xpath' }, 'delete')



    // End the browser session
  }
};  