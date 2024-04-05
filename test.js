
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
  
  
    'Home clearSky Smart Fleet Test': function (browser) {
  
      // clicking on signin 
    /*  browser.click({ selector: '#loginMenu' }, 'open signin menu');
  
      // add email into email input field
      browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');
  
      // add password into password input field
      browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');
  
      // clicking sign in button
      browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');
  
      browser.waitForElementVisible('body')
      browser.pause(5000)
  
      // checking button 'get connected'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[2]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'GET CONNECTED');
  
      // switching into different window tab
      const originalHandle = [];
      // handle of original tab
      browser.windowHandle(function (result) {
        originalHandle.push(result.value);
      });
  
      // clicking button 'get connected'
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-content-slot-main/app-cartridges/app-cartridge/app-hero-carousel/div/ngx-slick-carousel/div/div/div[2]/div/app-hero-carousel-item/app-hero-carousel-image/div/div[3]/a', locateStrategy: 'xpath' }, 'open GET CONNECTED');
  
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
  
        // breadcrum  checking
        //  home >> checking 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');
  
        // ClearSky Smart Fleet Dashboard checking
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'ClearSky Smart Fleet Dashboard');
  
  
      
        // open Legacy ClearSky
        browser.click({ selector: 'li[mattooltipclass="nav-tooltip"]:nth-of-type(6)>a' }, 'open Legacy ClearSky')
  
       // browser.pause(4000)
        browser.waitForElementVisible('body')   */
       // browser.waitForElementVisible({ selector: 'p[class="headline"]'}, 60000)
       // browser.pause(400000)
  
      // browser.waitForElementVisible({ selector: '/html/body/div[6]/div[1]/div/div[2]/p[1]', locateStrategy: 'xpath' }, 'welcome')
  
       // logo 
      // browser.waitForElementVisible({ selector: 'div.loginPageLogoWrapper>img'}, 'clearSky logo is visible')
        // WELCOME TO CLEARSKY™
       // browser.waitForElementVisible({ selector: 'div[class="pull-right hidden-xs navbarRightSection"]'}, 'First time here?')
   browser.url('https://clearsky.jlg.com/sensornet/html5/iapp/login/html/clearsky.html')
   
        browser.waitForElementVisible({ selector: 'p[class="headline"]'}, 'WELCOME TO CLEARSKY™')
  
        
        // THE SIMPLE FLEET MANAGEMENT
        browser.waitForElementVisible({ selector: 'div[class="brandingTextArea"]' }, 'THE SIMPLE FLEET MANAGEMENT')
  
        // SOLUTION FROM JLG.
        browser.waitForElementVisible({ selector: 'div[class="brandingTextArea"]' }, 'SOLUTION FROM JLG.')
  
       // register now
      // browser.waitForElementVisible({ selector: 'div[class="pull-right hidden-xs navbarRightSection"]' }, 'First time here? Register now.')
  
        // SIGN IN TO YOUR JLG® CLEARSKY ACCOUNT
        //browser.waitForElementVisible({ selector: '/html/body/div[6]/div[2]/div/div[1]/div[1]/div/h1', locateStrategy: 'xpath' }, 'SIGN IN TO YOUR JLG® CLEARSKY ACCOUNT')
  
        //LOGIN TO CLEARSKY
        //browser.waitForElementVisible({ selector: '/html/body/div[6]/div[2]/div/div[1]/div[2]/div/section/div/div/form/h1', locateStrategy: 'xpath' }, 'LOGIN TO CLEARSKY')
  
  
  
  
  
  
        // switch back to the first tab
     //   browser.switchWindow(originalHandle[0]);
     // });
  
  
  
  
  
  
      // End the browser session
    }
  };  