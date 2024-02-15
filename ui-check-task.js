
module.exports = {
  'User Registration Test': function (browser) {
  /*  browser
      .navigateTo('https://onlineexpress.jlg.com/user-registration')   */
          browser
          .navigateTo('https://onlineexpress.jlg.com/')
          .waitForElementVisible('body')  
          .assert.containsText('header.shepherd-header>h3', 'NEW: Technical Publications Experience')
       
          browser.click('body>div.shepherd-has-cancel-icon.shepherd-has-title.shepherd-element.shepherd-centered.shepherd-enabled>div>footer>button')
                                                           
      /*    browser.waitForElementVisible('#loginMenu', 5000, function(result) {
            if (result.value) {
              console.log('Login menu is visible');
          browser.click('#loginMenu');
            } else {
              console.error('Login menu is not visible');
            }
          });     */
          browser.click('#loginMenu');

        //  browser.waitForElementVisible('a[routerlink="/user-registration"]>span:nth-of-type(2)',60000)
        
        browser.assert.containsText({
          selector: '//*[@id="header"]/ul/li[4]/div/div/app-auth-form/div/div/a/span[2]',
          locateStrategy: 'xpath'
        }, 'REGISTER FOR AN ACCOUNT');

         browser.click('a[routerlink="/user-registration"]')
         browser.navigateTo('https://onlineexpress.jlg.com/user-registration')   
       
                  // cookies
    //   browser.waitForElementVisible(".cookie")
      browser.assert.containsText('div.cookie-header', 'Cookie Consent')
      .assert.containsText('div.flex-50', 'JLG uses necessary cookies to make sure our site works')
      .click('#inner-wrap>app-footer>app-cookie-notice>div>div>div.flex>div.flex-50._textRight>button.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base')
      
      
      // first part 

      browser.assert.containsText('.mat-step-icon-content>span', '1')

      browser.assert.containsText('div.mat-step-text-label.ng-star-inserted', 'Access Agreement')
      .assert.containsText('h3.ng-star-inserted', 'TERMS OF USE')
      .assert.containsText('a[href="https://www.jlg.com/en/terms"]', 'Click to read Terms of Use')


/*browser.waitForElementVisible({
   selector: '//*[@id="cdk-step-content-0-0"]/div/p[2]',
    locateStrategy: 'xpath', 
    timeout: 120000 
  })    */
  browser.assert.containsText({ 
    selector: '//*[@id="cdk-step-content-0-0"]/div/p[2]', 
    locateStrategy: 'xpath' },
    'JLG Industries, Inc., its affiliates and subsidiaries (collectively "JLG") welcomes you. The following Terms of Use Agreement ("Site Usage Terms") governs your access to and use of our websites www.JLG.com, onlineexpress.JLG.com, and JLG mobile applications, where applicable (collectively, the "Site”). Please review these Site Usage Terms carefully. By accessing and using the Site, you agree to be legally bound by all of the terms, conditions and notices contained or referenced herein. If you do not agree with these Site Usage Terms or our JLG’s Website Privacy Policy, you must not use the Site.');
  
  //browser.assert.containsText('//*[@id="cdk-step-content-0-0"]/div/p[2]', 'JLG Industries, Inc., its affiliates and subsidiaries (collectively "JLG") welcomes you. The following Terms of Use Agreement ("Site Usage Terms") governs your access to and use of our websites www.JLG.com, onlineexpress.JLG.com, and JLG mobile applications, where applicable (collectively, the "Site”). Please review these Site Usage Terms carefully. By accessing and using the Site, you agree to be legally bound by all of the terms, conditions and notices contained or referenced herein. If you do not agree with these Site Usage Terms or our JLG’s Website Privacy Policy, you must not use the Site.')
  
  browser.assert.containsText('#cdk-step-content-0-0>div>h3:nth-child(5)', 'PERSONAL PRIVACY')
  
  browser.assert.containsText('a[href="https://www.jlg.com/en/privacy-policy"]', 'Click to read Privacy Policy')

    browser.assert.containsText({
      selector: '//*[@id="cdk-step-content-0-0"]/div/p[4]',
      locateStrategy: 'xpath'
    }, 'JLG Industries Inc. with its corporate office located in Maryland, USA and our affiliated businesses (collectively, "JLG" or "us") are committed to being responsible custodians of the information you provide us and the information we collect in the course of operating our business. JLG takes your personal privacy seriously. This Privacy Policy describes how JLG, as a data controller, may collect, use and share information, particularly in association with the operation of our main website (www.jlg.com) and other websites.');


      
 browser.assert.containsText('#cdk-step-content-0-0>div>p.tw-text-right.ng-star-inserted>a>span.mdc-button__label', 'DECLINED') 

browser.assert.containsText('#cdk-step-content-0-0>div>p.tw-text-right.ng-star-inserted>button>span.mdc-button__label', 'AGREED') 

  browser.click('#cdk-step-content-0-0>div>p.tw-text-right.ng-star-inserted>button')


      // second part

       .assert.containsText('mat-vertical-stepper[_ngcontent-ole-app-c167]>div:nth-of-type(2)>mat-step-header>div:nth-of-type(2)>div>span', '2')
       .assert.containsText('mat-vertical-stepper[_ngcontent-ole-app-c167]>div:nth-of-type(2)>mat-step-header>div:nth-of-type(3)>div', 'Confirm User Type')

 /*
browser.waitForElementVisible('#cdk-step-content-0-1>div>div>div>p:nth-child(1)', 120000, function () {
  browser.getText('#cdk-step-content-0-1>div>div>div>p:nth-child(1)', function (result) {
      if (result.status === 0) {
          const text = result.value.trim();
          console.log('Text retrieved:', text);
    
         browser.assert.visible('#cdk-step-content-0-1>div>div>div>p:nth-child(1)', 'Does your company have a JLG Account Number? help YES NO');

       /*   browser.getText('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(1)', function (result) {
              browser.assert.visible('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(1)', 'YES');
                       }); */
        //    browser.assert.visible('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(1)', 'YES');
           
                  
        /*  browser.getText('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)', function (result) {
              browser.assert.visible('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)', 'NO');

            });   */
       //     browser.assert.visible('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)', 'NO');

         
  /*    } else {
          console.error('Error retrieving text:', result.error);
      }
  });
});   */

browser.assert.visible('#cdk-step-content-0-1>div>div>div>p:nth-child(1)', 'Does your company have a JLG Account Number? help YES NO');

     browser.assert.visible('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(1)', 'YES');

     browser.assert.visible('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)', 'NO');

 
 browser.click('button[mat-stroked-button][_ngcontent-ole-app-c167]:nth-of-type(2)');

 browser.assert.visible('#cdk-step-content-0-1>div>div>div>p.ng-star-inserted>strong', 'Please note that you can only register as a retail user in US or Canada. At this time all US retail accounts will be charged sales tax regardless of exemption status. Consult with your tax advisor for potential tax refunds.');
 
 //browser.expect.element('#cdk-step-content-0-1>div>div>div>p.tw-text-right>a>span.mdc-button__label').text.to.equal('CANCEL');
 browser.assert.visible('#cdk-step-content-0-1>div>div>div>p.tw-text-right>a>span.mdc-button__label', 'CANCEL');   

// browser.expect.element('button[_ngcontent-ole-app-c167][mat-raised-button][matsteppernext]>span:nth-of-type(2)').text.to.equal('NEXT');
 browser.assert.visible('button[_ngcontent-ole-app-c167][mat-raised-button][matsteppernext]>span:nth-of-type(2)', 'NEXT');
 
  browser.click('button[_ngcontent-ole-app-c167][mat-raised-button][matsteppernext]');
 
 
 // 3rd part 
 
   browser.assert.containsText('div.mat-step-icon.mat-step-icon-state-number.mat-step-icon-selected>div>span', '3')
    
      browser.assert.containsText('div.mat-step-label.mat-step-label-active.mat-step-label-selected>div', 'User Information')

        browser.assert.containsText('#cdk-step-content-0-2>div>form>p>button>span.mdc-button__label', 'NEXT')
      
      browser.assert.containsText('#cdk-step-content-0-2>div>form>p>a>span.mdc-button__label', 'CANCEL')
      
      browser.click('#cdk-step-content-0-2>div>form>p>button');


 // popup-part

browser.assert.containsText({
  selector: '//*[@id="mat-mdc-dialog-title-0"]',
  locateStrategy: 'xpath'
}, 'The Postal Code Is Invalid For The Selected Country. Please Review The Postal Code Entered. In Case The Postal Code Is Accurate, Please Contact Your Local JLG Sales & Service Office For Assistance.');

/*  browser.waitForElementVisible('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)', 180000, function () {
  browser.getText('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)', function (result) {
    if (result.status === 0) {
      const text = result.value.trim();
      console.log('Text retrieved:', text);
      browser.assert.visible('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)', 'OK');
         
    } else {
      console.error('Error retrieving text:', result.error);
    }
  });
})  */
browser.assert.visible('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)', 'OK');
     
/*  browser.waitForElementVisible('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(2)', 180000, function () {
  browser.getText('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(2)', function (result) {
    if (result.status === 0) {
      const text = result.value.trim();
      console.log('Text retrieved:', text);
     browser.assert.visible('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(2)', 'CANCEL');
      
    } else {
      console.error('Error retrieving text:', result.error);
    }
  });
})  */
browser.assert.visible('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(2)', 'CANCEL');
     

browser.click('app-confirmation-dialog>mat-dialog-actions>div>button:nth-of-type(1)')



// part 4
browser.assert.containsText('#cdk-step-label-0-3>div.mat-step-icon.mat-step-icon-state-number>div>span', '4')

browser.assert.containsText('#cdk-step-label-0-3>div.mat-step-label>div', 'Confirmation')


// part 5

browser.assert.containsText('#cdk-step-label-0-4>div.mat-step-icon.mat-step-icon-state-number>div>span', '5')

browser.assert.containsText('#cdk-step-label-0-4>div.mat-step-label>div', 'Thank you!')

    // .end(); // End the browser session
  }
};  