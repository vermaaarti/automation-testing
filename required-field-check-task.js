describe('Registration validation check', function () {
  it('Search Nightwatch.js and check results', function (browser) {
    browser
      // maximizing window
      .window.maximize()
      // navigating to theurl
      .navigateTo('https://onlineexpress.jlg.com/user-registration')

    // cookies
    // checking the presence of cookie consent text    
    browser.assert.containsText('div.cookie-header', 'Cookie Consent')
    // checking paragraph in the cookie part
    browser.assert.containsText('div.flex-50', 'JLG uses necessary cookies to make sure our site works. JLG would also like to set optional cookies to provide you the best user experience. For more detailed information about the cookies JLG uses, see our Privacy Policy.')
    // checking accept all button in the cookie part
    browser.assert.containsText('#inner-wrap>app-footer>app-cookie-notice>div>div>div.flex>div.flex-50._textRight>button.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base>span.mdc-button__label', 'ACCEPT ALL')
    // // checking reject all button in the cookie part
    browser.assert.containsText('#inner-wrap>app-footer>app-cookie-notice>div>div>div.flex>div.flex-50._textRight>button.m-left-10.mdc-button.mat-mdc-button.mat-primary.mat-mdc-button-base>span.mdc-button__label', 'REJECT ALL')
    // clicking into accept all button
    browser.click('#inner-wrap>app-footer>app-cookie-notice>div>div>div.flex>div.flex-50._textRight>button.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base')
    // clicking for 1st part
    browser.click('#cdk-step-content-0-0>div>p.tw-text-right.ng-star-inserted>button')
    // clicking for 2nd part
    browser.click('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)');
    // clicking for 2nd part
    browser.click('button[_ngcontent-ole-app-c167][mat-raised-button][matsteppernext]');


    // checking header

    // checking for part 3

    browser.assert.containsText('div.mat-step-icon.mat-step-icon-state-number.mat-step-icon-selected>div>span', '3')
    // checking for part 3s  user info
    browser.assert.containsText('div.mat-step-label.mat-step-label-active.mat-step-label-selected>div', 'User Information')


    // checking input area fields

    browser.setValue('input[name="firstName"]', 'John');
    browser.setValue('input[formcontrolname="login"]', 'johndoe@gmail.com');
    browser.setValue('[name="lastName"]', 'Doe');
    browser.setValue('input[name="password"]', 'ABCjohndoe123@');

    browser.click('mat-select[name="language"]');
    browser.click('div[tabindex="-1"]>mat-option:first-child');

    browser.setValue('input[name="confirmPassword"]', 'ABCjohndoe123@');
    browser.setValue('input[name="email"]', 'johndoe@gmail.com');

    browser.click('mat-select[name="marketingUserRole"]');
    browser.click('div[tabindex="-1"]>mat-option:first-child');

    browser.click('mat-select[formcontrolname="securityQ"]');
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
    browser.click('div[tabindex="-1"]>mat-option:first-child');

    browser.click('mat-select[formcontrolname="state"]');
    browser.click('div[tabindex="-1"]>mat-option:first-child');

    browser.setValue('input[formcontrolname="zip"]', '492100');

    browser.assert.containsText('#cdk-step-content-0-2>div>form>p>button>span.mdc-button__label', 'NEXT')

    browser.assert.containsText('#cdk-step-content-0-2>div>form>p>a>span.mdc-button__label', 'CANCEL')

    browser.click('#cdk-step-content-0-2>div>form>p>button');


    // popup-part


    // checking for paragraph
    browser.assert.containsText('app-confirmation-dialog>h6', 'The Postal Code Is Invalid For The Selected Country. Please Review The Postal Code Entered. In Case The Postal Code Is Accurate, Please Contact Your Local JLG Sales & Service Office For Assistance.')
    // checking for ok button
    browser.assert.containsText('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)', 'OK')
    // checking for cancel button
    browser.assert.containsText('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(2)', 'CANCEL')
    // clicking on ok button
    browser.click('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)')

  });
});