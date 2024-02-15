describe('Registration validation check', function() {
    it('Search Nightwatch.js and check results', function(browser) {
      browser
        .navigateTo('https://onlineexpress.jlg.com/user-registration')
         //.maximizeWindow()
        //.execute('window.moveTo(0, 0); window.resizeTo(screen.width, screen.height);') 
        .waitForElementVisible('body')

          // cookies
    //   browser.waitForElementVisible(".cookie")
      // browser.waitForElementVisible(".cookie-header")
      browser.assert.containsText('div.cookie-header', 'Cookie Consent')
      browser.assert.containsText('div.flex-50', 'JLG uses necessary cookies to make sure our site works')
      //browser.waitForElementVisible(".flex-50._textRight")   
      browser.click('#inner-wrap>app-footer>app-cookie-notice>div>div>div.flex>div.flex-50._textRight>button.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base')
      
      browser.click('#cdk-step-content-0-0>div>p.tw-text-right.ng-star-inserted>button')

      browser.click('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)');

      browser.click('button[_ngcontent-ole-app-c167][mat-raised-button][matsteppernext]');

      
// checking header

// checking 3


//browser.waitForElementVisible('div.mat-step-icon.mat-step-icon-state-number.mat-step-icon-selected>div>span', 120000)
browser.assert.containsText('div.mat-step-icon.mat-step-icon-state-number.mat-step-icon-selected>div>span', '3')
  
// browser.waitForElementVisible('div.mat-step-label.mat-step-label-active.mat-step-label-selected>div', 120000)
 browser.assert.containsText('div.mat-step-label.mat-step-label-active.mat-step-label-selected>div', 'User Information')


// checking input area fields

browser.setValue('input[name="firstName"]', 'John');
browser.setValue('input[formcontrolname="login"]', 'johndoe@gmail.com');
browser.setValue('[name="lastName"]', 'Doe');
browser.setValue('input[name="password"]', 'ABCjohndoe123@');

browser.click('mat-select[name="language"]');
//browser.waitForElementVisible('mat-select[name="language"]', 40000);
browser.click('div[tabindex="-1"]>mat-option:first-child');  // mat-option[id="mat-option-2

browser.setValue('input[name="confirmPassword"]', 'ABCjohndoe123@');
browser.setValue('input[name="email"]', 'johndoe@gmail.com');

browser.click('mat-select[name="marketingUserRole"]');
//browser.waitForElementVisible('mat-select[name="marketingUserRole"]', 40000);
browser.click('div[tabindex="-1"]>mat-option:first-child'); 

browser.click('mat-select[formcontrolname="securityQ"]');
//browser.waitForElementVisible('mat-select[formcontrolname="securityQ"]', 40000);
browser.click('div[tabindex="-1"]>mat-option:first-child');  

browser.setValue('input[formcontrolname="securityA"]', 'kheer');  


browser.setValue('input[name="companyName"]', 'ABCDEF');
browser.setValue('input[formcontrolname="defaultStoreId"]', 'AB2310');
browser.setValue('input[formcontrolname="address1"]', 'currency tower');
browser.setValue('input[formcontrolname="phone"]', '9182736405');
browser.setValue('input[formcontrolname="address2"]', 'NSN');
browser.setValue('input[formcontrolname="fax"]', '5928');
browser.setValue('input[formcontrolname="address3"]', 'ABCwqetqswd');
browser.setValue('textarea[formcontrolname="notes"]', 'good');
browser.setValue('input[formcontrolname="city"]', 'raipur');

browser.click('mat-select[formcontrolname="country"]');
//browser.waitForElementVisible('mat-select[formcontrolname="country"]', 40000);
browser.click('div[tabindex="-1"]>mat-option:first-child');

browser.click('mat-select[formcontrolname="state"]');
//browser.waitForElementVisible('mat-select[formcontrolname="state"]', 40000);
browser.click('div[tabindex="-1"]>mat-option:first-child');

browser.setValue('input[formcontrolname="zip"]', '492100');


//browser.waitForElementVisible('#cdk-step-content-0-2>div>form>p', 60000)
//browser.waitForElementVisible('#cdk-step-content-0-2>div>form>p>button', 60000)
browser.assert.containsText('#cdk-step-content-0-2>div>form>p>button>span.mdc-button__label', 'NEXT')


//browser.waitForElementVisible('#cdk-step-content-0-2>div>form>p', 60000)
//browser.waitForElementVisible('#cdk-step-content-0-2>div>form>p>a', 60000)
browser.assert.containsText('#cdk-step-content-0-2>div>form>p>a>span.mdc-button__label', 'CANCEL')


//browser.waitForElementVisible('#cdk-step-content-0-2>div>form>p>button', 80000)
browser.click('#cdk-step-content-0-2>div>form>p>button');


// popup-part
/*  browser.waitForElementVisible('app-confirmation-dialog', 100000, function() {
//  browser.expect.element('app-confirmation-dialog').to.be.visible;
 });   */

//browser.assert.visible('app-confirmation-dialog>h6')
browser.assert.containsText('app-confirmation-dialog>h6', 'The Postal Code Is Invalid For The Selected Country. Please Review The Postal Code Entered. In Case The Postal Code Is Accurate, Please Contact Your Local JLG Sales & Service Office For Assistance.')


//browser.assert.visible('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)')
browser.assert.containsText('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)', 'OK')


//browser.assert.visible('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(2)')
browser.assert.containsText('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(2)', 'CANCEL')


browser.click('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)')    
 
    }); 
  });