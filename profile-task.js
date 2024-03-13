
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


    'Profile Test': function (browser) {

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


        // checking ' Profile ' text
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[2]/a', locateStrategy: 'xpath' }, 'Profile')

        // clicking ' Profile ' url
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-start/div/p[2]/a', locateStrategy: 'xpath' }, 'open Profile')

        // checking ' Profile ' text in profile page
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-cartridges/app-cartridge/app-page-heading/h1', locateStrategy: 'xpath' }, 'PROFILE')

        // checking 'USER INFORMATION' text in profile page
        browser.assert.containsText({ selector: '//*[@id="personalInfo"]', locateStrategy: 'xpath' }, 'USER INFORMATION')

        // checking 'Login ID:' text in profile page
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[2]/div[1]/form/p/strong', locateStrategy: 'xpath' }, 'Login ID:')

        // checking 'pranjal_pandey@amicusglobal.com' text in profile page
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[2]/div[1]/form/p/strong', locateStrategy: 'xpath' }, 'pranjal_pandey@amicusglobal.com')

        // checking 'User Address' text in profile page
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[2]/div[2]/p/strong', locateStrategy: 'xpath' }, 'User Address')

        // checking help icon text in profile page
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[2]/div[2]/p/mat-icon', locateStrategy: 'xpath' }, 'help')

        // checking ' first name* ' input field
        browser.waitForElementVisible({ selector: 'input[formcontrolname="firstName"]' }, 'First Name* is visible')

        // checking ''address 1 *' input field
        browser.waitForElementVisible({ selector: 'input[name="address1"]' }, 'Address 1 is visible')

        // checking 'Last Name*' input field
        browser.waitForElementVisible({ selector: 'input[formcontrolname="lastName"]' }, 'Last Name* is visible')

        // checking Address 2 input field
        browser.waitForElementVisible({ selector: 'input[name="address2"]' }, 'Address 2 is visible')

        // checking select field
        browser.waitForElementVisible({ selector: 'mat-select[name="locale"]' }, 'Preferred Language* is visible')

        // open select field
        browser.click({ selector: 'mat-select[name="locale"]' }, 'Preferred Language* is visible')



        // check text  English (United States) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'English (United States)')

        // check text  German 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'German')

        // check text  Dutch 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, 'Dutch')

        // check text  English (Australia) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(4)' }, 'English (Australia)')

        // check text  English (New Zealand) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, 'English (New Zealand)')

        // check text  French (Canada) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(6)' }, 'French (Canada)')

        // check text  French 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(7)' }, 'French')

        // check text  Italian 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(8)' }, 'Italian')

        // check text  Korean 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(9)' }, 'Korean')

        // check text  Chinese 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(10)' }, 'Chinese')


        // check text  Polish 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(11)' }, 'Polish')

        // check text  Portuguese 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(12)' }, 'Portuguese')

        // check text  Portuguese (Brazil) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(13)' }, 'Portuguese (Brazil)')

        // check text Russian 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(14)' }, 'Russian')

        // check text  Spanish 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(15)' }, 'Spanish')

        // check text  Spanish (Mexico) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(16)' }, 'Spanish (Mexico)')

        // check text  Swedish 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(17)' }, 'Swedish')

        // select English (United States) 
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'selected English (United States)')


        // checking address 3 input field
        browser.waitForElementVisible({ selector: 'input[name="address3"]' }, 'Address 3 is visible')

        // checking Preferred unit of measure input field
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="unitOfMeasure"]' }, 'Preferred unit of measure is visible')

        // click Preferred unit of measure input field
        browser.click({ selector: 'mat-select[formcontrolname="unitOfMeasure"]' }, 'open Preferred unit of measure is visible')

        // check text  metric
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'Metric')

        // check text   Imperial 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'Imperial')

        // click text  metric
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'set Metric')


        // checking help icon text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[2]/div[1]/form/mat-form-field[4]/div[1]/div/div[3]/mat-icon', locateStrategy: 'xpath' }, 'help')

        // checking city input field
        browser.waitForElementVisible({ selector: 'input[name="city"]' }, 'City is visible')

        // checking email input field
        browser.waitForElementVisible({ selector: 'input[name="email"]' }, 'Email Address* is visible')

        // checking country field
        browser.waitForElementVisible({ selector: 'mat-select[name="country"]' }, 'Country* is visible')

        // checking user role field
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="marketingUserRole"]' }, 'User Role is visible')

        // check to open user role field
        browser.click({ selector: 'mat-select[formcontrolname="marketingUserRole"]' }, 'open User Role')

        // check text   Branch Manager 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'Branch Manager')

        // check text   Fleet Manager 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'Fleet Manager')

        // check text  Operations Manager 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, 'Operations Manager')

        // check text   Owner / Executive 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(4)' }, 'Owner / Executive')

        // check text  Parts 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, 'Parts')

        // check text   Purchasing 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(6)' }, 'Purchasing')

        // check text   Sales 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(7)' }, 'Sales')

        // check text   Service 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(8)' }, 'Service')

        // check text   Warranty 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(9)' }, 'Warranty')

        // check text   Other 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(10)' }, 'Other')

        // click  text   Service 
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(8)' }, 'set Service')



        // checking state field
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="state"]' }, 'State/Province is visible')

        // open it
        browser.click({ selector: 'mat-select[formcontrolname="state"]' }, 'open State/Province')

        // check text   ALBERTA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'ALBERTA')

        // check text  BRITISH COLUMBIA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'BRITISH COLUMBIA')

        // check text   MANITOBA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, 'MANITOBA')

        // check text   NEW BRUNSWICK 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(4)' }, 'NEW BRUNSWICK')

        // check text   NEWFOUNDLAND 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, 'NEWFOUNDLAND')

        // check text   NEWFOUNDLAND AND LABRADOR 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(6)' }, 'NEWFOUNDLAND AND LABRADOR')

        // check text   NORTHWEST TERRITORIES 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(7)' }, 'NORTHWEST TERRITORIES')

        // check text   NUNIVAT  
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(8)' }, 'NUNIVAT')

        // check text   NOVA SCOTIA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(9)' }, 'NOVA SCOTIA')

        // check text   ONTARIO 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(10)' }, 'ONTARIO')

        // check text   PRINCE EDWARD ISLAND 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(11)' }, 'PRINCE EDWARD ISLAND')

        // check text   QUEBEC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(12)' }, 'QUEBEC')

        // check text  SASKATCHEWAN 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(13)' }, 'SASKATCHEWAN')

        // check text  YUKON 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(14)' }, 'YUKON')

        // set  NEWFOUNDLAND 
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, 'set NEWFOUNDLAND')


        // checking ship to number input field
        browser.waitForElementVisible({ selector: 'input[name="phone"]' }, 'Phone Number* is visible')

        // checking ship to number input field
        browser.waitForElementVisible({ selector: 'input[formcontrolname="zip"]' }, 'Postal Code is visible')

        // checking ship to number input field
        browser.waitForElementVisible({ selector: 'input[formcontrolname="fax"]' }, 'Fax Number is visible')

        // checking 'ACCOUNT SECURITY' text 
        browser.assert.containsText({ selector: '//*[@id="accountSecurity"]', locateStrategy: 'xpath' }, 'ACCOUNT SECURITY')

        // checking 'Update Security Question:' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[4]/div[1]/p/strong', locateStrategy: 'xpath' }, 'Update Security Question:')

        // checking 'EDIT' text button
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[4]/div[1]/button/span[2]', locateStrategy: 'xpath' }, 'EDIT')

        // checking 'Update Password:' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[4]/div[2]/p/strong', locateStrategy: 'xpath' }, 'Update Password:')

        // checking 'EDIT' text button
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[4]/div[2]/button/span[2]', locateStrategy: 'xpath' }, 'EDIT')

        // checking 'USER SHIPPING DEFAULTS' text 
        browser.assert.containsText({ selector: '//*[@id="userShippingDefaults"]', locateStrategy: 'xpath' }, 'USER SHIPPING DEFAULTS')

        // checking 'Order Type: ' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[6]/form/div[1]/div[1]/p/strong', locateStrategy: 'xpath' }, 'Order Type:')

        // checking help icon text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[6]/form/div[1]/div[1]/p/strong/mat-icon', locateStrategy: 'xpath' }, 'help')

        // checking 'Shipping Instructions: ' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[6]/form/div[1]/div[2]/p/strong', locateStrategy: 'xpath' }, 'Shipping Instructions:')

        // checking help icon text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[6]/form/div[1]/div[2]/p/mat-icon', locateStrategy: 'xpath' }, 'help')



        // checking radio button field
        browser.waitForElementVisible({ selector: 'mat-radio-group[name="orderType"]>mat-radio-button:nth-of-type(1)' }, 'Radio Button is visible')


        // checking 'Priority Order' text      
        browser.assert.containsText({ selector: 'label[for="mat-radio-2-input"]' }, 'Priority Order')

        // checking radio button field
        browser.waitForElementVisible({ selector: 'mat-radio-group[name="shippingInstructions"]>mat-radio-button:nth-of-type(1)' }, 'Radio Button is visible')

        // checking 'Partial & Back Order' text 
        browser.assert.containsText({ selector: 'label[for="mat-radio-6-input"]' }, 'Partial & Back Order')

        // checking radio button field
        browser.waitForElementVisible({ selector: 'mat-radio-group[name="orderType"]>mat-radio-button:nth-of-type(2)' }, 'Radio Button is visible')

        // checking 'Conventional Order' text 
        browser.assert.containsText({ selector: 'label[for="mat-radio-3-input"]' }, 'Conventional Order')

        // checking radio button field
        browser.waitForElementVisible({ selector: 'mat-radio-group[name="shippingInstructions"]>mat-radio-button:nth-of-type(2)' }, 'Radio Button is visible')

        // checking 'Complete' text 
        browser.assert.containsText({ selector: 'label[for="mat-radio-7-input"]' }, 'Complete')

        // checking radio button field
        browser.waitForElementVisible({ selector: 'mat-radio-group[name="orderType"]>mat-radio-button:nth-of-type(3)' }, 'Radio Button is visible')

        // checking 'Customer Pickup' text 
        browser.assert.containsText({ selector: 'label[for="mat-radio-4-input"]' }, 'Customer Pickup')

        // checking radio button field
        browser.waitForElementVisible({ selector: 'mat-radio-group[name="shippingInstructions"]>mat-radio-button:nth-of-type(3)' }, 'Radio Button is visible')

        // checking 'Partial & Complete' text 
        browser.assert.containsText({ selector: 'label[for="mat-radio-8-input"]' }, 'Partial & Complete')

        // checking 'Parcel Shipping Options' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[6]/form/div[2]/div[1]/p/strong', locateStrategy: 'xpath' }, 'Parcel Shipping Options')

        // checking 'Truck Shipping Options' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[6]/form/div[2]/div[2]/p/strong', locateStrategy: 'xpath' }, 'Truck Shipping Options')

        // checking ship to number input field
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="shipViaParcel"]' }, 'Ship Via Parcel is visible')

        // open this select
        browser.click({ selector: 'mat-select[formcontrolname="shipViaParcel"]' }, 'open Ship Via Parcel')

        // check text ' 01 - UPS GROUND* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, '01 - UPS GROUND*')

        // check text ' 41 - UPS 3RD DAY* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, '41 - UPS 3RD DAY*')

        // check text ' 03 - UPS 2ND DAY AIR* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, '03 - UPS 2ND DAY AIR*')

        // check text ' 86 - UPS 2ND DAY AIR AM* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(4)' }, '86 - UPS 2ND DAY AIR AM*')

        // check text  74 - UPS NEXT DAY AIR SAVER* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, '74 - UPS NEXT DAY AIR SAVER*')

        // check text ' 02 - UPS NEXT DAY AIR* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(6)' }, '02 - UPS NEXT DAY AIR*')

        // check text ' 49 - UPS NDA EARLY AM* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(7)' }, '49 - UPS NDA EARLY AM*')

        // check text ' 97 - UPS NDA SAT. DEL. EARLY AM* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(8)' }, '97 - UPS NDA SAT. DEL. EARLY AM*')

        // check text ' 04 - UPS NDA - SATURDAY DELIVERY* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(9)' }, '04 - UPS NDA - SATURDAY DELIVERY*')

        // check text ' 125 - PITT OHIO EXPRESS LLC '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(10)' }, '125 - PITT OHIO EXPRESS LLC')

        // check text ' 151 - OLD DOMINION '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(11)' }, '151 - OLD DOMINION')

        // check text ' 158 - DOHRN TRANSFER LLC '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(12)' }, '158 - DOHRN TRANSFER LLC')

        // check text ' 156 - CEVA OCEAN '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(13)' }, '156 - CEVA OCEAN')

        // check text ' 118 - UPS SCS INTL '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(14)' }, '118 - UPS SCS INTL')

        // check text ' 126 - A DUIE PYLE COMPANIES '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(15)' }, '126 - A DUIE PYLE COMPANIES')

        // check text ' 72 - DHL GLOBAL FORWARDING '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(16)' }, '72 - DHL GLOBAL FORWARDING')

        // check text ' 147 - D.B. SCHENKER OCEAN FREIGHT '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(17)' }, '147 - D.B. SCHENKER OCEAN FREIGHT')

        // check text ' 137 - USF HOLLAND INC '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(18)' }, '137 - USF HOLLAND INC')

        // check text ' 29 - CUSTOMER PICKUP* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(19)' }, '29 - CUSTOMER PICKUP*')

        // check text '24 - UPS FREIGHT'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(20)' }, '24 - UPS FREIGHT')

        // check text '82 - UPS WORLDWIDE EXPEDITED*'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(21)' }, '82 - UPS WORLDWIDE EXPEDITED*')

        // check text ' 22 - VITRAN/PJAX '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(22)' }, '22 - VITRAN/PJAX')

        // check text ' 28 - BEST WAY* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(23)' }, '28 - BEST WAY*')

        // check text ' 81 - UPS WORLDWIDE EXPRESS* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(24)' }, '81 - UPS WORLDWIDE EXPRESS*')

        // check text ' 51 - INTL FED-EX PRIORITY '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(25)' }, '51 - INTL FED-EX PRIORITY')

        // check text ' 45 - EXPEDITORS AIR INTL '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(26)' }, '45 - EXPEDITORS AIR INTL')

        // check text ' 96 - FED-EXFIRST OVERNIGHT(CHECKZIP '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(27)' }, '96 - FED-EXFIRST OVERNIGHT(CHECKZIP')

        // check text ' 98 - FED-EX 2-DAY '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(28)' }, '98 - FED-EX 2-DAY')

        // check text ' 62 - INTL FED-EX ECONOMY '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(29)' }, '62 - INTL FED-EX ECONOMY')

        // check text ' 34 - ESTES EXPRESS '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(30)' }, '34 - ESTES EXPRESS')

        // check text ' 52 - INTL FED-EX GROUND '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(31)' }, '52 - INTL FED-EX GROUND')

        // check text ' 06 - FED-EX PRIORITY OVERNIGHT '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(32)' }, '06 - FED-EX PRIORITY OVERNIGHT')

        // check text ' 105 - UPS WORLDWIDE EXPRESS SAVER* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(33)' }, '105 - UPS WORLDWIDE EXPRESS SAVER*')

        // check text ' 83 - UPS WORLDWIDE STANDARD* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(34)' }, '83 - UPS WORLDWIDE STANDARD*')

        // check text ' 71 - DHL(WW PRIORITY)INTL/CAN ONLY '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(35)' }, '71 - DHL(WW PRIORITY)INTL/CAN ONLY')

        // check text '31 - U. S. MAIL*'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(36)' }, '31 - U. S. MAIL*')

        // check text ' 160 - DAYTON FREIGHT LINES '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(37)' }, '160 - DAYTON FREIGHT LINES')

        // check text ' 95 - R & L CARRIERS '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(38)' }, '95 - R & L CARRIERS')

        // check text ' 92 - FED-EX-GROUND '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(39)' }, '92 - FED-EX-GROUND')


        // check text ' 155 - CAT CONSOLIDATED '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(40)' }, '155 - CAT CONSOLIDATED')

        // check text ' 73 - FEDERAL EXPRESS(EXPRESS SAVER) '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(41)' }, '73 - FEDERAL EXPRESS(EXPRESS SAVER)')

        // check text ' 17 - ABF '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(42)' }, '17 - ABF')

        // check text ' 159 - STANDARD FORWARDING COMPANY '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(43)' }, '159 - STANDARD FORWARDING COMPANY')

        // check text ' 05 - FED-EX STANDARD OVERNIGHT '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(44)' }, '05 - FED-EX STANDARD OVERNIGHT')

        // check text ' 08 - SOUTHEASTERN FREIGHT* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(45)' }, '08 - SOUTHEASTERN FREIGHT*')

        // check text ' 157 - SAIA INC '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(46)' }, '157 - SAIA INC')

        // check text ' 161 - REDDAWAY '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(47)' }, '161 - REDDAWAY')

        // check text ' 136 - NEW ENGLAND MOTOR FREIGHT '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(48)' }, '136 - NEW ENGLAND MOTOR FREIGHT')

        // check text ' 148 - D.B. SCHENKER AIR FREIGHT '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(49)' }, '148 - D.B. SCHENKER AIR FREIGHT')

        // check text ' 07 - FED-EX PRIORITY-SATURDAY DELIV '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(50)' }, '07 - FED-EX PRIORITY-SATURDAY DELIV')

        // check text ' 46 - EXPEDITORS OCEAN INTL '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(51)' }, '46 - EXPEDITORS OCEAN INTL')

        // check text ' 48 - XPO (XPO LOGISTICS)* '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(52)' }, '48 - XPO (XPO LOGISTICS)*')

        // check text ' 154 - CEVA AIR '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(53)' }, '154 - CEVA AIR')

        // check text ' 711 - DHL(WW PRIORITY)INTL/CAN ONLY '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(54)' }, '711 - DHL(WW PRIORITY)INTL/CAN ONLY')

        // check text ' 14 - ROADWAY / YELLOW '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(55)' }, '14 - ROADWAY / YELLOW')

        // click on any one 
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(50)' }, 'selected 07 - FED-EX PRIORITY-SATURDAY DELIV')

        // check input field 'Ship Via Truck'
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="shipViaTruck"]' }, 'Ship Via Truck is visible')

        // click on it
        browser.click({ selector: 'mat-select[formcontrolname="shipViaTruck"]' }, 'open Ship Via Truck')


        // check text '125 - PITT OHIO EXPRESS LLC'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, '125 - PITT OHIO EXPRESS LLC')

        // check text '151 - OLD DOMINION'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, '151 - OLD DOMINION')

        // check text '158 - DOHRN TRANSFER LLC'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, '158 - DOHRN TRANSFER LLC')

        // check text '156 - CEVA OCEAN'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(4)' }, '156 - CEVA OCEAN')

        // check text '118 - UPS SCS INTL'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, '118 - UPS SCS INTL')

        // check text '126 - A DUIE PYLE COMPANIES'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(6)' }, '126 - A DUIE PYLE COMPANIES')

        // check text '72 - DHL GLOBAL FORWARDING'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(7)' }, '72 - DHL GLOBAL FORWARDING')

        // check text 147 - D.B. SCHENKER OCEAN FREIGHT
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(8)' }, '147 - D.B. SCHENKER OCEAN FREIGHT')

        // check text '137 - USF HOLLAND INC'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(9)' }, '137 - USF HOLLAND INC')

        // check text '29 - CUSTOMER PICKUP*'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(10)' }, '29 - CUSTOMER PICKUP*')


        // check text '24 - UPS FREIGHT'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(11)' }, '24 - UPS FREIGHT')

        // check text 22 - VITRAN/PJAX
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(12)' }, '22 - VITRAN/PJAX')

        // check text 28 - BEST WAY*
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(13)' }, '28 - BEST WAY*')

        // check text 45 - EXPEDITORS AIR INTL
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(14)' }, '45 - EXPEDITORS AIR INTL')

        // check text '34 - ESTES EXPRESS'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(15)' }, '34 - ESTES EXPRESS')

        // check text '71 - DHL(WW PRIORITY)INTL/CAN ONLY'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(16)' }, '71 - DHL(WW PRIORITY)INTL/CAN ONLY')

        // check text '160 - DAYTON FREIGHT LINES'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(17)' }, '160 - DAYTON FREIGHT LINES')

        // check text '95 - R & L CARRIERS'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(18)' }, '95 - R & L CARRIERS')

        // check text '155 - CAT CONSOLIDATED'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(19)' }, '155 - CAT CONSOLIDATED')

        // check text '17 - ABF'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(20)' }, '17 - ABF')

        // check text '159 - STANDARD FORWARDING COMPANY'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(21)' }, '159 - STANDARD FORWARDING COMPANY')

        // check text '08 - SOUTHEASTERN FREIGHT*'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(22)' }, '08 - SOUTHEASTERN FREIGHT*')

        // check text '157 - SAIA INC'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(23)' }, '157 - SAIA INC')

        // check text '161 - REDDAWAY'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(24)' }, '161 - REDDAWAY')

        // check text '136 - NEW ENGLAND MOTOR FREIGHT'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(25)' }, '136 - NEW ENGLAND MOTOR FREIGHT')

        // check text '48 - XPO (XPO LOGISTICS)*'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(26)' }, '48 - XPO (XPO LOGISTICS)*')

        // check text '14 - ROADWAY / YELLOW'
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(27)' }, '14 - ROADWAY / YELLOW')

        // click to set one
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(21)' }, 'set 159 - STANDARD FORWARDING COMPANY')

        // check 'Freight Billing Method' input method
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="parcelPaymentMethod"]' }, 'Freight Billing Method is visible')

        // click'Freight Billing Method' input method
        browser.click({ selector: 'mat-select[formcontrolname="parcelPaymentMethod"]' }, 'open Freight Billing Method')

        // check text ' Prepaid Freight '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'Prepaid Freight')

        // check text ' Collect Freight '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'Collect Freight')

        // check text ' Third Party Billing '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, 'Third Party Billing')

        // click to set one 
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'set prepaid freight')


        // check 'Freight Billing Method' input method
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="truckPaymentMethod"]' }, 'Freight Billing Method is visible')

        // click'Freight Billing Method' input method
        browser.click({ selector: 'mat-select[formcontrolname="truckPaymentMethod"]' }, 'open Freight Billing Method')

        // check text ' Prepaid Freight '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'Prepaid Freight')

        // check text ' Collect Freight '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'Collect Freight')

        // check text ' Third Party Billing '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, 'Third Party Billing')

        // click to set one 
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'set prepaid freight')


        // check 'Broker' input method
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="primaryBroker"]' }, 'Broker is visible')

        // click'Broker' input method
        browser.click({ selector: 'mat-select[formcontrolname="primaryBroker"]' }, 'open Broker')



        // check text ' A & A CONTRACT CUSTOMS BROKERS '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'A & A CONTRACT CUSTOMS BROKERS')

        // check text  A&A CONTRACT CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'A&A CONTRACT CUSTOMS BROKER')

        // check text  ABC BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, 'ABC BROKERAGE')

        // check text  ABSOLUTE GLOBAL LOGISTICS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(4)' }, 'ABSOLUTE GLOBAL LOGISTICS')

        // check text  ACCURATE CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, 'ACCURATE CUSTOMS BROKERS')

        // check text  ALWAYS CUSTOM BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(6)' }, 'ALWAYS CUSTOM BROKERS')

        // check text  ANDERSON BRICKNER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(7)' }, 'ANDERSON BRICKNER')

        // check text  ASSINIBOINE CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(8)' }, 'ASSINIBOINE CUSTOMS BROKERS')

        // check text  ATLANTIC RENTALS LTD. (PARTS) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(9)' }, 'ATLANTIC RENTALS LTD. (PARTS)')

        // check text  AXXESS INTERNATIONAL INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(10)' }, 'AXXESS INTERNATIONAL INC')

        // check text  BEAVER BROKERAGE INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(11)' }, 'BEAVER BROKERAGE INC')

        // check text  BGL BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(12)' }, 'BGL BROKERAGE')

        // check text  BGL BROKERAGE 
        //  browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(13)' }, 'BGL BROKERAGE')

        // check text  BI LOGISTICS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(14)' }, 'BI LOGISTICS')

        // check text  BILSI 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(15)' }, 'BILSI')

        // check text  BRIDGEVIEW BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(16)' }, 'BRIDGEVIEW BROKERS')

        // check text  BUCKLANDS CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(17)' }, 'BUCKLANDS CUSTOMS BROKERS')

        // check text  CALGARY CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(18)' }, 'CALGARY CUSTOMS BROKERS')

        // check text  COLE INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(19)' }, 'COLE INTERNATIONAL')

        // check text  COURTAGE BGL LTEE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(24)' }, 'COURTAGE BGL LTEE')

        // check text  CUSTOMS SERVICE INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(25)' }, 'CUSTOMS SERVICE INC')

        // check text  CUSTOMS SERVICE INC. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(26)' }, 'CUSTOMS SERVICE INC.')

        // check text  DANZAS CANADA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(27)' }, 'DANZAS CANADA')

        // check text  DAVIDSON & SONS CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(28)' }, 'DAVIDSON & SONS CUSTOMS BROKER')

        // check text  DB SCHENKER INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(29)' }, 'DB SCHENKER INTERNATIONAL')

        // check text  DELL TORONTO 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(30)' }, 'DELL TORONTO')

        // check text  DELL WILL CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(31)' }, 'DELL WILL CUSTOMS BROKERS')

        // check text  DELMAR 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(32)' }, 'DELMAR')

        // check text  DELMAR INTERNATIONAL INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(33)' }, 'DELMAR INTERNATIONAL INC')

        // check text  DHL EXPRESS CANADA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(34)' }, 'DHL EXPRESS CANADA')

        // check text  DOUANES/CUSTOMS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(35)' }, 'DOUANES/CUSTOMS')

        // check text  EUROFRET CANADA INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(36)' }, 'EUROFRET CANADA INC')

        // check text  EXPEDITORS INTL ROMANIA SRL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(37)' }, 'EXPEDITORS INTL ROMANIA SRL')

        // check text   EXPERT CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(38)' }, 'EXPERT CUSTOMS BROKER')

        // check text  FARROW GROUP 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(39)' }, 'FARROW GROUP')

        // check text  FEDEX TRADE NETWORKS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(40)' }, 'FEDEX TRADE NETWORKS')

        // check text  FISKER CARGO 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(41)' }, 'FISKER CARGO')

        // check text  FRANK M O'DOWD 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(42)' }, "FRANK M O'DOWD")

        // check text  FRANK O'DOWD 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(43)' }, "FRANK O'DOWD")

        // check text  FRITZ-STARBER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(44)' }, 'FRITZ-STARBER')

        // check text  FRONTIER SUPPLY CHAIN SOLUTION 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(45)' }, 'FRONTIER SUPPLY CHAIN SOLUTION')


        // check text  GENERAL NOLI CANADA INC. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(47)' }, 'GENERAL NOLI CANADA INC.')

        // check text  GEORGE H. YOUNG 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(48)' }, 'GEORGE H. YOUNG')

        // check text  GOUDREAU CARGO INTL' INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(49)' }, "GOUDREAU CARGO INTL' INC")

        // check text  GROUPE COLE/KEBEC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(50)' }, 'GROUPE COLE/KEBEC')

        // check text  HARTE & LYNE LTD 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(51)' }, 'HARTE & LYNE LTD')

        // check text  HEMISPHERE FREIGHT & BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(52)' }, 'HEMISPHERE FREIGHT & BROKERAGE')

        // check text  HH SMITH 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(53)' }, 'HH SMITH')

        // check text  ICE CORP 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(54)' }, 'ICE CORP')

        // check text  IN-HOUSE (DEL) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(55)' }, 'IN-HOUSE (DEL)')

        // check text  INTEGRATED CUSTOMS SERVICE LTD 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(56)' }, 'INTEGRATED CUSTOMS SERVICE LTD')

        // check text  ISL CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(57)' }, 'ISL CUSTOMS BROKER')

        // check text  ISLAND SHIPPING 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(58)' }, 'ISLAND SHIPPING')

        // check text  J RENE HERBERT 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(59)' }, 'J RENE HERBERT')

        // check text  JENSEN CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(60)' }, 'JENSEN CUSTOMS BROKER')

        // check text  JORI INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(61)' }, 'JORI INTERNATIONAL')

        // check text  JR HEBERT 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(62)' }, 'JR HEBERT')

        // check text  KEBEC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(63)' }, 'KEBEC')

        // check text  KUEHNE & NAGEL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(64)' }, 'KUEHNE & NAGEL')

        // check text  LIVINGSTON 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(65)' }, 'LIVINGSTON')

        // check text  LIVINGSTON INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(67)' }, 'LIVINGSTON INTERNATIONAL')

        // check text  LIVINGSTON INTL. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(70)' }, 'LIVINGSTON INTL.')

        // check text  MAGIC TRANSPORT INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(71)' }, 'MAGIC TRANSPORT INC')

        // check text  MASTERS LOGISTICS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(72)' }, 'MASTERS LOGISTICS')

        // check text  NEAR NORTH CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(73)' }, 'NEAR NORTH CUSTOMS BROKERS')

        // check text  NEW PORT CUSTOMS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(74)' }, 'NEW PORT CUSTOMS')

        // check text  NEWPORT CUSTOMS SERVICES INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(75)' }, 'NEWPORT CUSTOMS SERVICES INC')

        // check text  NIPPON EXPRESS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(76)' }, 'NIPPON EXPRESS')

        // check text  NOT APPLICABLE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(77)' }, 'NOT APPLICABLE')

        // check text  OAKVILLE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(78)' }, 'OAKVILLE')

        // check text  OAKVILLE CUSTOMS BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(79)' }, 'OAKVILLE CUSTOMS BROKERAGE')

        // check text  OMNITTRANS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(80)' }, 'OMNITTRANS')

        // check text  ON TIME LOGISTICS CORP 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(81)' }, 'ON TIME LOGISTICS CORP')

        // check text  PACIFIC CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(82)' }, 'PACIFIC CUSTOMS BROKERS')

        // check text  PANALPINA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(83)' }, 'PANALPINA')

        // check text  PERCY H. DAVIS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(84)' }, 'PERCY H. DAVIS')

        // check text  PREFERRED CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(85)' }, 'PREFERRED CUSTOMS BROKER')

        // check text  RUSSELL A FARROW 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(86)' }, 'RUSSELL A FARROW')

        // check text  RUSSELL A FARROW LIMITED 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(87)' }, 'RUSSELL A FARROW LIMITED')

        // check text  SAMSON M.E & P.E. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(88)' }, 'SAMSON M.E & P.E.')

        // check text  SCHENKER OF CANADA LTD. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(89)' }, 'SCHENKER OF CANADA LTD.')

        // check text  SDV CANADA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(90)' }, 'SDV CANADA')

        // check text  SECAN INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(91)' }, 'SECAN INTERNATIONAL')

        // check text   STARBER-FRITZ 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(92)' }, 'STARBER-FRITZ')

        // check text  SUMMIT INT'L TRADE SERVICES 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(93)' }, "SUMMIT INT'L TRADE SERVICES")

        // check text  SUMMIT INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(94)' }, 'SUMMIT INTERNATIONAL')

        // check text  UNICITY CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(95)' }, 'UNICITY CUSTOMS BROKERS')

        // check text  UPS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(96)' }, 'UPS')


        // check text  UPS BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(98)' }, 'UPS BROKERAGE')


        // check text  WHITE & WHITE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(100)' }, 'WHITE & WHITE')

        // check text  WHITE AND WHITE CUSTOM BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(101)' }, 'WHITE AND WHITE CUSTOM BROKER')

        // check text ' WILSON GREEN '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(102)' }, 'WILSON GREEN')


        // check text  WILSON INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(104)' }, 'WILSON INTERNATIONAL')


        // select  WHITE AND WHITE CUSTOM BROKER 
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(101)' }, 'select WHITE AND WHITE CUSTOM BROKER')

        // check help icon 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[6]/form/div[2]/div[1]/mat-form-field[3]/div[1]/div/div[3]/mat-icon', locateStrategy: 'xpath' }, 'help')


        // checking broker input field
        browser.waitForElementVisible({ selector: 'mat-select[formcontrolname="secondaryBroker"]' }, 'Broker input field is visible')

        // checking broker input field to open it
        browser.click({ selector: 'mat-select[formcontrolname="secondaryBroker"]' }, 'open Broker input field')




        // check text ' A & A CONTRACT CUSTOMS BROKERS '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, 'A & A CONTRACT CUSTOMS BROKERS')

        // check text  A&A CONTRACT CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, 'A&A CONTRACT CUSTOMS BROKER')

        // check text  ABC BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, 'ABC BROKERAGE')

        // check text  ABSOLUTE GLOBAL LOGISTICS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(4)' }, 'ABSOLUTE GLOBAL LOGISTICS')

        // check text  ACCURATE CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, 'ACCURATE CUSTOMS BROKERS')

        // check text  ALWAYS CUSTOM BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(6)' }, 'ALWAYS CUSTOM BROKERS')

        // check text  ANDERSON BRICKNER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(7)' }, 'ANDERSON BRICKNER')

        // check text  ASSINIBOINE CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(8)' }, 'ASSINIBOINE CUSTOMS BROKERS')

        // check text  ATLANTIC RENTALS LTD. (PARTS) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(9)' }, 'ATLANTIC RENTALS LTD. (PARTS)')

        // check text  AXXESS INTERNATIONAL INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(10)' }, 'AXXESS INTERNATIONAL INC')

        // check text  BEAVER BROKERAGE INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(11)' }, 'BEAVER BROKERAGE INC')

        // check text  BGL BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(12)' }, 'BGL BROKERAGE')

        // check text  BGL BROKERAGE 
        //  browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(13)' }, 'BGL BROKERAGE')

        // check text  BI LOGISTICS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(14)' }, 'BI LOGISTICS')

        // check text  BILSI 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(15)' }, 'BILSI')

        // check text  BRIDGEVIEW BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(16)' }, 'BRIDGEVIEW BROKERS')

        // check text  BUCKLANDS CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(17)' }, 'BUCKLANDS CUSTOMS BROKERS')

        // check text  CALGARY CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(18)' }, 'CALGARY CUSTOMS BROKERS')

        // check text  COLE INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(19)' }, 'COLE INTERNATIONAL')


        // check text  COURTAGE BGL LTEE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(24)' }, 'COURTAGE BGL LTEE')

        // check text  CUSTOMS SERVICE INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(25)' }, 'CUSTOMS SERVICE INC')

        // check text  CUSTOMS SERVICE INC. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(26)' }, 'CUSTOMS SERVICE INC.')

        // check text  DANZAS CANADA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(27)' }, 'DANZAS CANADA')

        // check text  DAVIDSON & SONS CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(28)' }, 'DAVIDSON & SONS CUSTOMS BROKER')

        // check text  DB SCHENKER INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(29)' }, 'DB SCHENKER INTERNATIONAL')

        // check text  DELL TORONTO 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(30)' }, 'DELL TORONTO')

        // check text  DELL WILL CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(31)' }, 'DELL WILL CUSTOMS BROKERS')

        // check text  DELMAR 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(32)' }, 'DELMAR')

        // check text  DELMAR INTERNATIONAL INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(33)' }, 'DELMAR INTERNATIONAL INC')

        // check text  DHL EXPRESS CANADA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(34)' }, 'DHL EXPRESS CANADA')

        // check text  DOUANES/CUSTOMS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(35)' }, 'DOUANES/CUSTOMS')

        // check text  EUROFRET CANADA INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(36)' }, 'EUROFRET CANADA INC')

        // check text  EXPEDITORS INTL ROMANIA SRL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(37)' }, 'EXPEDITORS INTL ROMANIA SRL')

        // check text   EXPERT CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(38)' }, 'EXPERT CUSTOMS BROKER')

        // check text  FARROW GROUP 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(39)' }, 'FARROW GROUP')

        // check text  FEDEX TRADE NETWORKS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(40)' }, 'FEDEX TRADE NETWORKS')

        // check text  FISKER CARGO 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(41)' }, 'FISKER CARGO')

        // check text  FRANK M O'DOWD 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(42)' }, "FRANK M O'DOWD")

        // check text  FRANK O'DOWD 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(43)' }, "FRANK O'DOWD")

        // check text  FRITZ-STARBER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(44)' }, 'FRITZ-STARBER')

        // check text  FRONTIER SUPPLY CHAIN SOLUTION 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(45)' }, 'FRONTIER SUPPLY CHAIN SOLUTION')

        // check text  FRONTIER SUPPLY CHAIN SOLUTION 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(46)' }, 'FRONTIER SUPPLY CHAIN SOLUTION')

        // check text  GENERAL NOLI CANADA INC. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(47)' }, 'GENERAL NOLI CANADA INC.')

        // check text  GEORGE H. YOUNG 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(48)' }, 'GEORGE H. YOUNG')

        // check text  GOUDREAU CARGO INTL' INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(49)' }, "GOUDREAU CARGO INTL' INC")

        // check text  GROUPE COLE/KEBEC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(50)' }, 'GROUPE COLE/KEBEC')

        // check text  HARTE & LYNE LTD 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(51)' }, 'HARTE & LYNE LTD')

        // check text  HEMISPHERE FREIGHT & BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(52)' }, 'HEMISPHERE FREIGHT & BROKERAGE')

        // check text  HH SMITH 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(53)' }, 'HH SMITH')

        // check text  ICE CORP 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(54)' }, 'ICE CORP')

        // check text  IN-HOUSE (DEL) 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(55)' }, 'IN-HOUSE (DEL)')

        // check text  INTEGRATED CUSTOMS SERVICE LTD 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(56)' }, 'INTEGRATED CUSTOMS SERVICE LTD')

        // check text  ISL CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(57)' }, 'ISL CUSTOMS BROKER')

        // check text  ISLAND SHIPPING 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(58)' }, 'ISLAND SHIPPING')

        // check text  J RENE HERBERT 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(59)' }, 'J RENE HERBERT')

        // check text  JENSEN CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(60)' }, 'JENSEN CUSTOMS BROKER')

        // check text  JORI INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(61)' }, 'JORI INTERNATIONAL')

        // check text  JR HEBERT 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(62)' }, 'JR HEBERT')

        // check text  KEBEC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(63)' }, 'KEBEC')

        // check text  KUEHNE & NAGEL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(64)' }, 'KUEHNE & NAGEL')

        // check text  LIVINGSTON 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(65)' }, 'LIVINGSTON')

        // check text  LIVINGSTON INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(67)' }, 'LIVINGSTON INTERNATIONAL')

        // check text  LIVINGSTON INTL. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(70)' }, 'LIVINGSTON INTL.')

        // check text  MAGIC TRANSPORT INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(71)' }, 'MAGIC TRANSPORT INC')

        // check text  MASTERS LOGISTICS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(72)' }, 'MASTERS LOGISTICS')

        // check text  NEAR NORTH CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(73)' }, 'NEAR NORTH CUSTOMS BROKERS')

        // check text  NEW PORT CUSTOMS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(74)' }, 'NEW PORT CUSTOMS')

        // check text  NEWPORT CUSTOMS SERVICES INC 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(75)' }, 'NEWPORT CUSTOMS SERVICES INC')

        // check text  NIPPON EXPRESS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(76)' }, 'NIPPON EXPRESS')

        // check text  NOT APPLICABLE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(77)' }, 'NOT APPLICABLE')

        // check text  OAKVILLE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(78)' }, 'OAKVILLE')

        // check text  OAKVILLE CUSTOMS BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(79)' }, 'OAKVILLE CUSTOMS BROKERAGE')

        // check text  OMNITTRANS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(80)' }, 'OMNITTRANS')

        // check text  ON TIME LOGISTICS CORP 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(81)' }, 'ON TIME LOGISTICS CORP')

        // check text  PACIFIC CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(82)' }, 'PACIFIC CUSTOMS BROKERS')

        // check text  PANALPINA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(83)' }, 'PANALPINA')

        // check text  PERCY H. DAVIS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(84)' }, 'PERCY H. DAVIS')

        // check text  PREFERRED CUSTOMS BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(85)' }, 'PREFERRED CUSTOMS BROKER')

        // check text  RUSSELL A FARROW 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(86)' }, 'RUSSELL A FARROW')

        // check text  RUSSELL A FARROW LIMITED 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(87)' }, 'RUSSELL A FARROW LIMITED')

        // check text  SAMSON M.E & P.E. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(88)' }, 'SAMSON M.E & P.E.')

        // check text  SCHENKER OF CANADA LTD. 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(89)' }, 'SCHENKER OF CANADA LTD.')

        // check text  SDV CANADA 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(90)' }, 'SDV CANADA')

        // check text  SECAN INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(91)' }, 'SECAN INTERNATIONAL')

        // check text   STARBER-FRITZ 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(92)' }, 'STARBER-FRITZ')

        // check text  SUMMIT INT'L TRADE SERVICES 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(93)' }, "SUMMIT INT'L TRADE SERVICES")

        // check text  SUMMIT INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(94)' }, 'SUMMIT INTERNATIONAL')

        // check text  UNICITY CUSTOMS BROKERS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(95)' }, 'UNICITY CUSTOMS BROKERS')

        // check text  UPS 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(96)' }, 'UPS')

        // check text  UPS BROKERAGE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(98)' }, 'UPS BROKERAGE')

        // check text  WHITE & WHITE 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(100)' }, 'WHITE & WHITE')

        // check text  WHITE AND WHITE CUSTOM BROKER 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(101)' }, 'WHITE AND WHITE CUSTOM BROKER')

        // check text ' WILSON GREEN '
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(102)' }, 'WILSON GREEN')

        // check text  WILSON INTERNATIONAL 
        browser.assert.containsText({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(104)' }, 'WILSON INTERNATIONAL')


        // selecting field
        browser.click({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(101)' }, 'select COLE INTERNATIONAL')



        // check 'ACCOUNT INFORMATION' text
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[7]', locateStrategy: 'xpath' }, 'ACCOUNT INFORMATION')

        // check 'Company Name or Contact Name: JLG' text
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[1]/div[1]/p/strong', locateStrategy: 'xpath' }, 'Company Name or Contact Name: JLG')

        // check 'CUSTOMER SERVICE DEPT' text
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[1]/div[1]/p/strong', locateStrategy: 'xpath' }, 'CUSTOMER SERVICE DEPT')

        // check 'JLG Customer Number' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[1]/div[2]/p/strong', locateStrategy: 'xpath' }, 'JLG Customer Number')

        // check help icon 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[1]/div[2]/p/strong/mat-icon', locateStrategy: 'xpath' }, 'help')

        // input field store ID
        browser.waitForElementVisible({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/form/mat-form-field', locateStrategy: 'xpath' }, 'Store ID is visible')

        // check text 'Account Address:'
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[2]/p/strong', locateStrategy: 'xpath' }, 'Account Address:')

        // check help icon 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[2]/p/strong/mat-icon', locateStrategy: 'xpath' }, 'help')

        // check 'JLG CUSTOMER SERVICE DEPT' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[2]/address/span[1]', locateStrategy: 'xpath' }, 'JLG CUSTOMER SERVICE DEPT')

        // check 'ATTN WARRANTY' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[2]/address/span[2]', locateStrategy: 'xpath' }, 'ATTN WARRANTY')

        // check ONE JLG DRIVE text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[2]/address/span[3]', locateStrategy: 'xpath' }, 'ONE JLG DRIVE')

        // check 'MCCONNELLSBURG, PA' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[2]/address/span[4]', locateStrategy: 'xpath' }, 'MCCONNELLSBURG, PA')

        // check '17233 US' text 
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[8]/div[2]/address/span[5]', locateStrategy: 'xpath' }, '17233 US')

        // check CANCEL button
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[9]/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL')

        // check UPDATE button
        browser.assert.containsText({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-account-profile/div[9]/button[2]/span[2]', locateStrategy: 'xpath' }, 'UPDATE')



        // End the browser session
    }
};  