
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
        }, 'close centered popup');

        // cookie
        browser.click({
            selector: '//*[@id="inner-wrap"]/app-footer/app-cookie-notice/div/div/div[2]/div[2]/button[1]',
            locateStrategy: 'xpath'
        }, 'accept cookie');

        // centered popup
        /*  browser.click({
              selector: '/html/body/div[2]/div/footer/button',
              locateStrategy: 'xpath'
          }, 'close centered popup');  */

        // cookie
        /*   browser.click({
               selector: '//*[@id="inner-wrap"]/app-footer/app-cookie-notice/div/div/div[2]/div[2]/button[1]',
               locateStrategy: 'xpath'
           }, 'accept cookie');  */

    },

    'User Registration Test': function (browser) {

        // subtask-4

        // checking presence of icon
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-emergency-alerts > div > div > mat-icon'
        }, 'error');

        // checking presence of text
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-emergency-alerts>div>div>p'
        }, 'This should display for anonymous user.');

        // subtask-2

        // checking the presence of hamburger menu
        browser.waitForElementVisible({ selector: '#header>div>app-hamburger>div>a>span' }, 'hamburger menu')

        // clicking on it
        browser.click({ selector: '#header>div>app-hamburger>div>a' }, 'open hamburger')


        // checking presence of menu and its text 'parts'
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>div'
        }, 'Parts');

        // click to open submenu
        browser.click({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>div'
        }, 'open parts');

        // checking submenu's text 'parts'
        browser.assert.containsText({
            selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[1]/ul/li[1]/a',
            locateStrategy: 'xpath'
        }, 'Parts');

        // checking submenu's text 'order now'
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>ul>li:nth-child(2)>span>a'
        }, 'Order Now');

        // checking submenu's text 'Interactive Parts Manuals'
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>ul>li:nth-child(3)>span>a'
        }, 'Interactive Parts Manuals');

        // checking submenu's text ' Technical Publications '
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>ul>li:nth-child(4)>span>a'
        }, 'Technical Publications');

        // checking submenu's text ' Technical Publications '
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>ul>li:nth-child(5)>span>a'
        }, 'Technical Publications');

        // checking submenu's text ' Aftermarket Products '
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>ul>li:nth-child(6)>span>a'
        }, 'Aftermarket Products');

        // checking submenu's text ' Aftermarket Flyers '
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>ul>li:nth-child(7)>span>a'
        }, 'Aftermarket Flyers');

        // checking submenu's text ' Structured Inquiry '
        browser.assert.containsText({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>ul>li:nth-child(8)>span>a'
        }, 'Structured Inquiry');

        // click to close submenu
        browser.click({
            selector: '#inner-wrap>div.sticky-header._boxShadow>app-header>app-navigation>nav>ul>li:nth-child(1)>ul>li:nth-child(1)>a'
        }, 'close parts');

        // checking presence of menu and its text ' Equipment '
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(2) > div'
        }, 'Equipment');

        // click to open submenu
        browser.click({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(2) > div'
        }, 'open equipment');

        // checking submenu's text 'Equipment'
        browser.assert.containsText({
            selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[2]/ul/li[1]/a',
            locateStrategy: 'xpath'
        }, 'Equipment');

        // checking submenu's text ' Low-Level Access '
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > span > a'
        }, 'Low-Level Access');

        // checking submenu's text ' Vertical Lifts '
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(2) > ul > li:nth-child(3) > span > a'
        }, 'Vertical Lifts');

        // checking submenu's text ' View All Equipment  '
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(2) > ul > li:nth-child(4) > span > a'
        }, 'View All Equipment');

        // click to close submenu
        browser.click({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(2) > ul > li:nth-child(1) > a'
        }, 'close equipment');


        // checking presence of menu and its text ' Service '
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(3) > div'
        }, 'Service');

        // click to open submenu
        browser.click({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(3) > div'
        }, 'open service');

        // checking submenu's text 'Service'
        browser.assert.containsText({
            selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[3]/ul/li[1]/a',
            locateStrategy: 'xpath'
        }, 'Service');

        // checking submenu's text ' Technical Publications  '
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(3) > ul > li:nth-child(2) > span > a'
        }, 'Technical Publications');

        // checking submenu's text ' Standard Repair Procedures '
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(3) > ul > li:nth-child(3) > span > a'
        }, 'Standard Repair Procedures');

        // click to close submenu
        browser.click({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(3) > ul > li:nth-child(1) > a'
        }, 'close service');

        // checking presence of menu and its text ' Warranty / Safety '
        browser.assert.containsText({
            selector: '#inner-wrap > div.sticky-header._boxShadow > app-header > app-navigation > nav > ul > li:nth-child(4) > div'
        }, 'Warranty / Safety');

        // click to open submenu
        browser.click({
            selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[4]',
            locateStrategy: 'xpath'
        }, 'open Warranty / Safety');


        // checking presence of menu and its text ' Warranty / Safety '
        browser.assert.containsText({
            selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[4]/ul/li[1]/a',
            locateStrategy: 'xpath'
        }, 'Warranty / Safety');

        // checking submenu's text 'Safety and Service Bulletins'
        browser.assert.containsText({
            selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[4]/ul/li[2]/span/a',
            locateStrategy: 'xpath'
        }, 'Safety and Service Bulletins');

        // click to close submenu
        browser.click({
            selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[4]/ul/li[1]/a',
            locateStrategy: 'xpath'
        }, 'close Warranty / Safety');

        // training part

        // check 'training' text
        browser.assert.textContains({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[5]/div', locateStrategy: 'xpath' }, 'Training')
            // click to open 'training'
            .click({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[5]/div', locateStrategy: 'xpath' }, 'open training')

            // check 'training' text
            .assert.textContains({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[5]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Training')

            // check 'JLG Training' text
            .assert.textContains({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[5]/ul/li[2]/span/a', locateStrategy: 'xpath' }, 'JLG Training')

            // check 'JLG University' text
            .assert.textContains({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[5]/ul/li[3]/span/a', locateStrategy: 'xpath' }, 'JLG University')

            // click to close training
            .click({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[5]/ul/li[1]/a', locateStrategy: 'xpath' }, 'close training')

            // resources part

            // check text 'Resources'
            .assert.textContains({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[6]/div', locateStrategy: 'xpath' }, 'Resources')

            // click to open 'Resources'
            .click({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[6]/div', locateStrategy: 'xpath' }, 'open resources')

            // check text 'Resources'
            .assert.textContains({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[6]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Resources')

            // check text 'Material Safety Data Sheets'
            .assert.textContains({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[6]/ul/li[2]/span/a', locateStrategy: 'xpath' }, 'Material Safety Data Sheets')

            // click to close 'Resources'
            .click({ selector: '//*[@id="inner-wrap"]/div[1]/app-header/app-navigation/nav/ul/li[6]/ul/li[1]/a', locateStrategy: 'xpath' }, 'close resources')







        // checking jlg logo
        browser.waitForElementVisible({ selector: '#header > div > a > img' }, 'JLG logo is visible')
        //  .waitForElementVisible({})

        // checking search icon
        browser.waitForElementVisible({ selector: '#header > ul > li.search-btn-wrapper._toggle.ng-star-inserted > a > span' }, 'Search Icon is visible')

        // clicking on search icon
        browser.click({ selector: '//*[@id="header"]/ul/li[1]/a', locateStrategy: 'xpath' }, 'open search box')


        // checking search box 
        browser.waitForElementVisible({
            selector: '/html/body/app-root/div/div[2]/div[1]/app-header/header/app-search/form/input[1]',
            locateStrategy: 'xpath'
        }, 'Search Box is visible')

        // adding value into search box
        browser.setValue({selector: '.search.ng-tns-c678925392-19._d-block.ng-untouched.ng-pristine.ng-valid>input:nth-of-type(1)'}, 'test');

        browser.keys(browser.Keys.ENTER);
        browser.url('https://onlineexpress-t.jlg.com/search?Ntt=test')

        browser.assert.containsText({
            selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge[2]/app-search-adjustments/div/div',
            locateStrategy: 'xpath'
        }, 'results for')

        browser.url('https://onlineexpress-t.jlg.com/')

        // browser.click({ selector: '.search.ng-tns-c678925392-19._d-block.ng-untouched.ng-pristine.ng-valid>input:nth-of-type(1)' })

        // checking sales and service text and icon
        browser.waitForElementVisible({ selector: '#open-service-menu > span > span.icon-info' }, 'sales & service icon')

        browser.assert.containsText({
            selector: '//*[@id="open-service-menu"]/span/span[2]',
            locateStrategy: 'xpath'
        }, 'Sales & Service')

        // clicking on it 
        browser.click({ selector: '#open-service-menu > span' }, 'click on sales & service')

        // checking the popup of it
        browser.waitForElementVisible({ selector: '#salesMenu > p > span' }, 'sales & service icon is visible')

        browser.assert.containsText({
            selector: '#salesMenu > p > a',
        }, 'Sales and Service Locator')


        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });
        // clicking on sales-service-locator
        browser.click({
            selector: '#salesMenu>p>a[href="https://www.jlg.com/sales-service-locator"]'
        }, 'open sales & service');
        // get handles of all open windows
        browser.windowHandles(function (result) {
            const handles = result.value;
            // find the handle of the new tab (which is different from the original tab)
            const newHandle = handles.find(handle => !originalHandle.includes(handle));
            // add the new tab to originalHandle array
            originalHandle.push(newHandle);
            // switch to the new tab
            browser.switchWindow(newHandle);
            browser.waitForElementVisible('body')
            // switch back to the first tab
            browser.switchWindow(originalHandle[0]);
        });

        // checking english(united states) text and icon

        browser.waitForElementVisible({ selector: '#header > ul > li._miniHide.ng-star-inserted > a > span.icon-globe' }, 'globe icon is visible')

        browser.assert.containsText({
            selector: '#header > ul > li._miniHide.ng-star-inserted > a > span.text',
        }, 'English (United States)')

        // clicking into it
        browser.click({ selector: '#header > ul > li._miniHide.ng-star-inserted > a' }, 'open language option')

        // checking 'SELECT YOUR REGION' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-title-0',
        }, 'SELECT YOUR REGION')

        // checking 'English (United States)' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(1) > a',
        }, 'English (United States)')

        // checking 'German' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(2) > a',
        }, 'German')

        // checking 'Dutch' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(3) > a',
        }, 'Dutch')

        // checking 'English (Australia)' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(4) > a',
        }, 'English (Australia)')

        // checking 'English (New Zealand)' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(5) > a',
        }, 'English (New Zealand)')

        // checking 'French (Canada)' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(6) > a',
        }, 'French (Canada)')

        // checking 'Italian' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(8) > a',
        }, 'Italian')

        // checking 'Korean' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(9) > a',
        }, 'Korean')

        // checking 'Chinese' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(10) > a',
        }, 'Chinese')

        // checking 'Polish' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(11) > a',
        }, 'Polish')

        // checking 'Portuguese' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(12) > a',
        }, 'Portuguese')

        // checking 'Portuguese (Brazil)' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(13) > a',
        }, 'Portuguese (Brazil)')

        // checking 'Russian' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(14) > a',
        }, 'Russian')

        // checking 'Spanish' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(15) > a',
        }, 'Spanish')

        // checking 'Spanish (Mexico)' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(16) > a',
        }, 'Spanish (Mexico)')

        // checking 'Swedish' text
        browser.assert.containsText({
            selector: '#mat-mdc-dialog-0 > div > div > app-lang-selector > mat-dialog-content > p:nth-child(17) > a',
        }, 'Swedish')

        // clicking on x button
        browser.click({
            selector: 'button[mat-dialog-close]',
        }, 'close language option menu')



        // checking sign in option's text and icon

        browser.assert.containsText({
            selector: '//*[@id="loginMenu"]/span[1]',
            locateStrategy: 'xpath'
        }, 'Sign In')

        browser.waitForElementVisible({ selector: '#loginMenu > span.icon-login' }, 'login-icon is visible')

        // clicking into it
        browser.click({
            selector: '#loginMenu'
        }, 'open login menu');

        // checking email box visibility
        browser.waitForElementVisible({ selector: '#mat-input-2' }, 'email input is visible')

        // checking password box visibility
        browser.waitForElementVisible({ selector: '#mat-input-3' }, 'password input is visible')

        // checking sign in button
        browser.assert.containsText({
            selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button > span.mdc-button__label',
            // locateStrategy: 'xpath'
        }, 'SIGN IN');

        // checking forget password's visibility
        browser.assert.containsText({
            selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > a',
            // locateStrategy: 'xpath'
        }, 'Forgot Password?');

        // checking register button's visibility
        browser.assert.containsText({
            selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > a > span.mdc-button__label',
            // locateStrategy: 'xpath'
        }, 'REGISTER FOR AN ACCOUNT');


        // checking cart icon
        browser.waitForElementVisible({ selector: '//*[@id="cartIconLink"]/span[1]', locateStrategy: 'xpath' }, 'cart icon is visible')

        // checking 0's visibility
        browser.waitForElementVisible({ selector: '//*[@id="cartIconLink"]', locateStrategy: 'xpath' }, ' 0 is visible')

        // checking >> visibility
        browser.waitForElementVisible({ selector: '//*[@id="cartIconLink"]/span[2]', locateStrategy: 'xpath' }, '>> is visible')

        // clicking it
        browser.click({ selector: '//*[@id="cartIconLink"]', locateStrategy: 'xpath' }, 'open cart')

        // checking 'Your Shopping cart' visibility
        browser.assert.containsText({
            selector: '//*[@id="header"]/ul/li[5]/div/div[1]',
            locateStrategy: 'xpath'
        }, 'Your Shopping cart');

        // checking 'Your cart is empty. Use our Order Now Feature below!' visibility
        browser.assert.containsText({
            selector: '//*[@id="header"]/ul/li[5]/div/div[2]/p',
            locateStrategy: 'xpath'
        }, 'Your cart is empty. Use our Order Now Feature below!');

        // checking 'ORDER NOW - Forget Something?' visibility
        browser.assert.containsText({
            selector: '//*[@id="header"]/ul/li[5]/div/div[3]/div',
            locateStrategy: 'xpath'
        }, 'ORDER NOW - Forget Something?');

        // checking item number part
        browser.waitForElementVisible({ selector: '//*[@id="mat-input-0"]', locateStrategy: 'xpath' }, 'item number input field is visible')

        // checking qty part
        browser.waitForElementVisible({ selector: '//*[@id="mat-input-1"]', locateStrategy: 'xpath' }, 'Qty input field is visible')

        // checking button 'add item' visibility
        browser.assert.containsText({
            selector: '//*[@id="header"]/ul/li[5]/div/div[3]/form/div/button/span[2]',
            locateStrategy: 'xpath'
        }, 'ADD ITEM');

        // clicking on x button
        browser.click({
            selector: '//*[@id="header"]/ul/li[5]/div/a',
            locateStrategy: 'xpath'
        }, 'close cart menu')


        // End the browser session
    },
    after: function (browser) {
    }
};  