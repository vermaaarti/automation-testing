
module.exports = {
  'User Registration Test': function (browser) {


    // maximizing window
    browser.window.maximize()
    // navigation to default url
    browser.navigateTo('https://onlineexpress.jlg.com/')

    // popup validation part

    // popup header text checking
    browser.waitForElementVisible('.shepherd-title', 30000)
    browser.assert.containsText({
      selector: '.shepherd-title'
    }, 'NEW: Technical Publications Experience');

    // checking paragraph in popup
    browser.assert.textContains({
      selector: '.shepherd-text',
    }, 'Easily find and download schematics and manuals (Parts, Operation, Service and Supplement) all in one place.')
    // checking for done button
    browser.assert.containsText({
      selector: '/html/body/div[2]/div/footer/button',
      locateStrategy: 'xpath'
    }, 'DONE');

    // click on OK in popup button
    browser.click({
      selector: 'body>div.shepherd-has-cancel-icon.shepherd-has-title.shepherd-element.shepherd-centered.shepherd-enabled>div>footer>button',
    });


    // clicking in sign in 
    //  browser.click('#loginMenu');
    browser.click({
      selector: '#loginMenu',
    });
    // checking register for an account button
    browser.assert.containsText({
      selector: '//*[@id="header"]/ul/li[4]/div/div/app-auth-form/div/div/a/span[2]',
      locateStrategy: 'xpath'
    }, 'REGISTER FOR AN ACCOUNT');
    // clicking into register for an account
    //  browser.click('a[routerlink="/user-registration"]')
    browser.click({
      selector: 'a[routerlink="/user-registration"]',
    });
    // navigating to user-registration page
    browser.navigateTo('https://onlineexpress.jlg.com/user-registration')

    // cookies part

    // checking cookie consent part
    browser.assert.containsText({
      selector: 'div.cookie-header',
    }, 'Cookie Consent');
    // checking paragraph in the cookie part
    browser.assert.containsText({
      selector: 'div.flex-50',
    }, 'JLG uses necessary cookies to make sure our site works. JLG would also like to set optional cookies to provide you the best user experience. For more detailed information about the cookies JLG uses, see our Privacy Policy.');
    // checking accept all button in the cookie part
    browser.assert.containsText({
      selector: '#inner-wrap>app-footer>app-cookie-notice>div>div>div.flex>div.flex-50._textRight>button.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base>span.mdc-button__label',
    }, 'ACCEPT ALL');
    // checking reject all button in the cookie part
    browser.assert.containsText({
      selector: '#inner-wrap>app-footer>app-cookie-notice>div>div>div.flex>div.flex-50._textRight>button.m-left-10.mdc-button.mat-mdc-button.mat-primary.mat-mdc-button-base>span.mdc-button__label',
    }, 'REJECT ALL');
    // clicking into accept all button
    browser.click({
      selector: '#inner-wrap>app-footer>app-cookie-notice>div>div>div.flex>div.flex-50._textRight>button.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base',
    });


    // first part

    // checking for presence of 1
    browser.assert.containsText({
      selector: '.mat-step-icon-content>span',
    }, '1');
    // checking for presence of access agreement
    browser.assert.containsText({
      selector: 'div.mat-step-text-label.ng-star-inserted',
    }, 'Access Agreement');
    //   // checking for presence of terms of use
    browser.assert.containsText({
      selector: 'h3.ng-star-inserted'
    }, 'TERMS OF USE');
    //   // checking for presence of click to read terms of use
    browser.assert.containsText({
      selector: 'a[href="https://www.jlg.com/en/terms"]'
    }, 'Click to read Terms of Use');


    // switching into different window tab
    const originalHandle = [];
    // handle of original tab
    browser.windowHandle(function (result) {
      originalHandle.push(result.value);
    });
    // clicking on click to read terms of use
    browser.click({
      selector: 'a[href="https://www.jlg.com/en/terms"]'
    });
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


    // checking for presence of paragraph
    browser.assert.textContains({ selector: '//*[@id="cdk-step-content-0-0"]/div/p[2]', locateStrategy: 'xpath' }, 'JLG Industries, Inc., its affiliates and subsidiaries (collectively "JLG") welcomes you. The following Terms of Use Agreement ("Site Usage Terms") governs your access to and use of our websites www.JLG.com, onlineexpress.JLG.com, and JLG mobile applications, where applicable (collectively, the "Site”). Please review these Site Usage Terms carefully. By accessing and using the Site, you agree to be legally bound by all of the terms, conditions and notices contained or referenced herein. If you do not agree with these Site Usage Terms or our JLG’s Website Privacy Policy, you must not use the Site.')
    // checking for presence of personal privacy
    browser.assert.containsText({
      selector: '#cdk-step-content-0-0>div>h3:nth-child(5)',
    }, 'PERSONAL PRIVACY');
    // checking for presence of click to read privacy policy
    browser.assert.containsText({
      selector: 'a[href="https://www.jlg.com/en/privacy-policy"]',
    }, 'Click to read Privacy Policy');

    // switching into different window tab

    browser.click({
      selector: 'a[href="https://www.jlg.com/en/privacy-policy"]'
    });
    // Get handles of all open windows
    browser.windowHandles(function (result) {
      const handles = result.value;
      // Find the handle of the new tab (which is different from the original tab)
      const newHandle = handles.find(handle => !originalHandle.includes(handle));
      // add the new tab to originalHandle array
      originalHandle.push(newHandle);
      // Switch to the new tab
      browser.switchWindow(newHandle);
      browser.waitForElementVisible('body')
      // switch back to the first tab
      browser.switchWindow(originalHandle[0]);
    });

    // checking for the presence of paragraph
    browser.assert.containsText({
      selector: '//*[@id="cdk-step-content-0-0"]/div/p[4]',
      locateStrategy: 'xpath'
    }, 'JLG Industries Inc. with its corporate office located in Maryland, USA and our affiliated businesses (collectively, "JLG" or "us") are committed to being responsible custodians of the information you provide us and the information we collect in the course of operating our business. JLG takes your personal privacy seriously. This Privacy Policy describes how JLG, as a data controller, may collect, use and share information, particularly in association with the operation of our main website (www.jlg.com) and other websites.');

    // checking for presence of declined button
    browser.assert.containsText({
      selector: '#cdk-step-content-0-0>div>p.tw-text-right.ng-star-inserted>a>span.mdc-button__label',
    }, 'DECLINED');
    // checking for presence of agreed button
    browser.assert.containsText({
      selector: '#cdk-step-content-0-0>div>p.tw-text-right.ng-star-inserted>button>span.mdc-button__label',
    }, 'AGREED');
    // clicking on agreed button
    browser.click({
      selector: '#cdk-step-content-0-0>div>p.tw-text-right.ng-star-inserted>button'
    });



    // second part

    // checking for presence of 2
    browser.assert.containsText({
      selector: 'mat-vertical-stepper[_ngcontent-ole-app-c167]>div:nth-of-type(2)>mat-step-header>div:nth-of-type(2)>div>span',
    }, '2');
    // checking for presence of confirm user type
    browser.assert.containsText({
      selector: 'mat-vertical-stepper[_ngcontent-ole-app-c167]>div:nth-of-type(2)>mat-step-header>div:nth-of-type(3)>div',
    }, 'Confirm User Type');
    // checking for presence of paragraph
    browser.assert.containsText({
      selector: '#cdk-step-content-0-1>div>div>div>p:nth-child(1):nth-child(1)',
    }, 'Does your company have a JLG Account Number?');
    // checking for presence of help icon
    browser.assert.containsText({
      selector: '#cdk-step-content-0-1>div>div>div>p:nth-child(1)>mat-icon',
    }, 'help');

    // checking for presence of yes button
    browser.assert.containsText({
      selector: 'button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(1)',
    }, 'YES');
    // checking for presence of no button 
    browser.assert.containsText({
      selector: 'button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)',
    }, 'NO');

    // clicking on no button
    // browser.click('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)');
    browser.click({
      selector: 'button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)'
    });
    // checking for presence of paragraph
    browser.assert.containsText({
      selector: '#cdk-step-content-0-1>div>div>div>p.ng-star-inserted>strong',
    }, 'Please note that you can only register as a retail user in US or Canada. At this time all US retail accounts will be charged sales tax regardless of exemption status. Consult with your tax advisor for potential tax refunds.');
    // checking for presence of cancel button
    browser.assert.containsText({
      selector: '#cdk-step-content-0-1>div>div>div>p.tw-text-right>a>span.mdc-button__label',
    }, 'CANCEL');
    // checking for presence of nect button
    browser.assert.containsText({
      selector: 'button[_ngcontent-ole-app-c167][mat-raised-button][matsteppernext]>span:nth-of-type(2)',
    }, 'NEXT');
    // clicking on next button 
    // browser.click('button[_ngcontent-ole-app-c167][mat-raised-button][matsteppernext]');
    browser.click({
      selector: 'button[_ngcontent-ole-app-c167][mat-raised-button][matsteppernext]'
    });



    // 3rd part 

    // checking for presence of 3
    browser.assert.containsText({
      selector: 'div.mat-step-icon.mat-step-icon-state-number.mat-step-icon-selected>div>span',
    }, '3');
    // checking for presence of user information
    browser.assert.containsText({
      selector: 'div.mat-step-label.mat-step-label-active.mat-step-label-selected>div',
    }, 'User Information');
    // checking for presence of next button
    browser.assert.containsText({
      selector: '#cdk-step-content-0-2>div>form>p>button>span.mdc-button__label',
    }, 'NEXT');
    // checking for presence of cancel button
    browser.assert.containsText({
      selector: '#cdk-step-content-0-2>div>form>p>a>span.mdc-button__label',
    }, 'CANCEL');
    // clicking into next button
    //browser.click('#cdk-step-content-0-2>div>form>p>button');
    browser.click({
      selector: '#cdk-step-content-0-2>div>form>p>button'
    });



    // popup-part

    // checking for presence of paragraph
    browser.assert.containsText({
      selector: '//*[@id="mat-mdc-dialog-title-0"]',
      locateStrategy: 'xpath'
    }, 'The Postal Code Is Invalid For The Selected Country. Please Review The Postal Code Entered. In Case The Postal Code Is Accurate, Please Contact Your Local JLG Sales & Service Office For Assistance.');

    // checking for presence of ok button
    browser.assert.containsText({
      selector: 'app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)',
    }, 'OK');
    // checking for presence of cancel button
    browser.assert.containsText({
      selector: 'app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(2)',
    }, 'CANCEL');
    // clicking into the ok button
    //browser.click('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)')
    browser.click({
      selector: 'app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)'
    });




    // part 4

    // checking for presence of 4
    browser.assert.containsText({
      selector: '#cdk-step-label-0-3>div.mat-step-icon.mat-step-icon-state-number>div>span',
    }, '4');
    // checking for presence of confirmation
    browser.assert.containsText({
      selector: '#cdk-step-label-0-3>div.mat-step-label>div',
    }, 'Confirmation');



    // part 5

    // checking for presence of 5
    browser.assert.containsText({
      selector: '#cdk-step-label-0-4>div.mat-step-icon.mat-step-icon-state-number>div>span'
    }, '5');
    // checking for presence of thank you text
    browser.assert.containsText({
      selector: '#cdk-step-label-0-4>div.mat-step-label>div',
    }, 'Thank you!');

    // End the browser session
  }
};  