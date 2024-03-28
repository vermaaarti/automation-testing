
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
    browser.click({ selector: '#loginMenu' }, 'open signin menu');

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


      // serial number input field
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/div/form/div/input', locateStrategy: 'xpath' }, 'serial number input field is visible');

      // search icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/div/form/div/mat-icon[2]', locateStrategy: 'xpath' }, 'search icon is visible');

      // help icon 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/div/form/mat-icon', locateStrategy: 'xpath' }, 'help')

      // dashboard icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[1]/a/i', locateStrategy: 'xpath' }, 'dashboard icon is visible');

      // 'Dashboard' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[1]/a/span', locateStrategy: 'xpath' }, 'Dashboard')

      // Map icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[2]/a/i', locateStrategy: 'xpath' }, 'Map icon is visible');

      // 'Map' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[2]/a/span', locateStrategy: 'xpath' }, 'Map')

      // List icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[3]/a/i', locateStrategy: 'xpath' }, 'List icon is visible');

      // 'List' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[3]/a/span', locateStrategy: 'xpath' }, 'List')

      // Site Networks icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[4]/a/span[1]', locateStrategy: 'xpath' }, 'Site Networks icon is visible');

      // 'Site Networks' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[4]/a/span[2]', locateStrategy: 'xpath' }, 'Site Networks')

      // Access Control icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[5]/a/span[1]', locateStrategy: 'xpath' }, 'Access Control icon is visible');

      // 'Access Control' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[5]/a/span[2]', locateStrategy: 'xpath' }, 'Access Control')

      // Legacy ClearSky icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[1]/a/i', locateStrategy: 'xpath' }, 'Legacy ClearSky icon is visible');

      // 'Legacy ClearSky' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[6]/a/span', locateStrategy: 'xpath' }, 'Legacy ClearSky')

      // clearSky logo 
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/img', locateStrategy: 'xpath' }, 'ClearSky logo is visible');


      // 'DEFAULT DASHBOARD' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/div[1]/button[1]/span[2]/span[1]', locateStrategy: 'xpath' }, 'DEFAULT DASHBOARD')

      // arrow_drop_down logo 
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/div[1]/button[1]/span[2]/span[2]/mat-icon', locateStrategy: 'xpath' }, 'arrow_drop_down icon is visible');

      // click this button 
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/div[1]/button[1]', locateStrategy: 'xpath' }, 'open DEFAULT DASHBOARD')

      // browser.pause(4000)
      // check 'Default Dashboard' text
      browser.waitForElementVisible({ selector: 'button[role="menuitem"]:nth-of-type(1)' }, 'Default Dashboard')

      // check 'new Dashboard' text
      browser.assert.containsText({ selector: 'button[role="menuitem"]:nth-of-type(3)' }, 'New Dashboard')

      // edit_outline logo 
      browser.waitForElementVisible({ selector: 'button[role="menuitem"]:nth-of-type(3)>span>span>mat-icon:nth-of-type(1)' }, 'edit_outline logo is visible');

      // delete_outline logo 
      browser.waitForElementVisible({ selector: 'button[role="menuitem"]:nth-of-type(3)>span>span>mat-icon:nth-of-type(2)' }, 'delete_outline logo is visible');


      // check 'NEw' text
      browser.assert.containsText({ selector: 'button[role="menuitem"]:nth-of-type(4)' }, 'NEw')

      // edit_outline logo 
      browser.waitForElementVisible({ selector: 'button[role="menuitem"]:nth-of-type(4)>span>span>mat-icon:nth-of-type(1)' }, 'edit_outline logo is visible');

      // delete_outline logo 
      browser.waitForElementVisible({ selector: 'button[role="menuitem"]:nth-of-type(4)>span>span>mat-icon:nth-of-type(2)' }, 'delete_outline logo is visible');

      // check 'ADD NEW' text
      browser.waitForElementVisible({ selector: 'div[role="menu"]>div>div>button' }, 'ADD NEW')

      // close popup
      // browser.keys(browser.Keys.ESCAPE, 'close popup');  
      browser.click('body');


      // Opening a Saved Dashboard will override your current dashboard filters. Would you like to continue?
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/mat-dialog-content/div', locateStrategy: 'xpath' }, 'Opening a Saved Dashboard will override your current dashboard filters. Would you like to continue?')

      // CONTINUE
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/mat-dialog-actions/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CONTINUE')

      // CANCEL
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/mat-dialog-actions/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'CANCEL')

      // X BUTTON
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/button', locateStrategy: 'xpath' }, 'x button is visible')

      // click into it
      browser.click({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/button', locateStrategy: 'xpath' }, 'close popup')


      // filter_list logo 

      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/div[1]/button[2]/mat-icon', locateStrategy: 'xpath' }, 'filter_list icon is visible');

      // 'FILTER' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/div[1]/button[2]/span[2]', locateStrategy: 'xpath' }, 'FILTER')

      // CLICK 'FILTER' text 
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/div[1]/button[2]', locateStrategy: 'xpath' }, 'open FILTER')

      // Turned On
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/div/div/button[1]/span', locateStrategy: 'xpath' }, 'Turned On');

      // click Turned On
      browser.click({ selector: '/html/body/div[4]/div[2]/div/div/div/button[1]', locateStrategy: 'xpath' }, 'open Turned On');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');


      // Alert Source
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/div/div/button[2]/span', locateStrategy: 'xpath' }, 'Alert Source');

      // click Alert source
      browser.click({ selector: '/html/body/div[4]/div[2]/div/div/div/button[2]', locateStrategy: 'xpath' }, 'open Alert Source');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');


      // Alerts
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/div/div/button[3]/span', locateStrategy: 'xpath' }, 'Alerts');

      // click Alerts
      browser.click({ selector: '/html/body/div[4]/div[2]/div/div/div/button[3]', locateStrategy: 'xpath' }, 'open Alerts');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // Charging Status
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/div/div/button[4]/span', locateStrategy: 'xpath' }, 'Charging Status');

      // click Charging Status
      browser.click({ selector: '/html/body/div[4]/div[2]/div/div/div/button[4]', locateStrategy: 'xpath' }, 'open Charging Status');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // ClearSky Device
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/div/div/button[5]/span', locateStrategy: 'xpath' }, 'ClearSky Device');

      // click ClearSky Device
      browser.click({ selector: '/html/body/div[4]/div[2]/div/div/div/button[5]', locateStrategy: 'xpath' }, 'open ClearSky Device');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // DEF Remaining
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/div/div/button[6]/span', locateStrategy: 'xpath' }, 'DEF Remaining');

      // click DEF Remaining
      browser.click({ selector: '/html/body/div[4]/div[2]/div/div/div/button[6]', locateStrategy: 'xpath' }, 'open DEF Remaining');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');


      //   scroll
      // browser.execute("document.querySelector('div.cdk-overlay-container>div:nth-of-type(2)>div').scrollIntoView()");



      // Code Category
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]:nth-of-type(2)>div>div>div>button:nth-of-type(7)>span' }, 'Code Category');

      // click Code Category
      browser.click({ selector: 'div[dir="ltr"]:nth-of-type(2)>div>div>div>button:nth-of-type(7)' }, 'open Code Category');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // Code Source  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(8)>span' }, 'Code Source');

      // click Code Source
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(8)' }, 'open Code Source');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // Fuel Level  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(9)>span' }, 'Fuel Level');

      // click Fuel Level
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(9)' }, 'open Fuel Level');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // Has DTCs  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(10)>span' }, 'Has DTCs');

      // click Has DTCs
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(10)' }, 'open Has DTCs');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // HRM  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(11)>span' }, 'HRM');

      // click HRM
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(11)' }, 'open HRM');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // Ignition Status  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(12)>span' }, 'Ignition Status');

      // click Ignition Status
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(12)' }, 'open Ignition Status');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // Not Turned On  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(13)>span' }, 'Not Turned On');

      // click Not Turned On
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(13)' }, 'open Not Turned On');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');




      // In Network  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(14)>span' }, 'In Network');

      // click In Network
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(14)' }, 'open In Network');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');




      // Model Group  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(15)>span' }, 'Model Group');

      // click Model Group
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(15)' }, 'open Model Group');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');




      // Model  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(16)>span' }, 'Model');

      // click Model
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(16)' }, 'open Model');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');




      // Model Type  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(17)>span' }, 'Model Type');

      // click Model Type
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(17)' }, 'open Model Type');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // Entered SN in Last 24hrs  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(18)>span' }, 'Entered SN in Last 24hrs');

      // click Entered SN in Last 24hrs
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(18)' }, 'open Entered SN in Last 24hrs');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // Exited SN in Last 24hrs  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(19)>span' }, 'Exited SN in Last 24hrs');

      // click Exited SN in Last 24hrs
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(19)' }, 'open Exited SN in Last 24hrs');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');

      // + icon
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[1]/mat-chip-listbox[2]/div/app-new-filter/button/span[3]', locateStrategy: 'xpath' }, 'open + icon');



      // State of Charge  
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(20)>span' }, 'State of Charge');

      // click State of Charge
      browser.click({ selector: 'div[dir="ltr"]>div>div>div>button:nth-of-type(20)' }, 'open State of Charge');

      // cancel button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // ok button
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'OK');

      // click on ok button
      browser.click({ selector: '/html/body/div[4]/div[3]/div/div/div/app-filter-menu/div/button[2]', locateStrategy: 'xpath' }, 'OK');


      // browser.pause(40000000)


      // CANCEL  button
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[2]/button[1]/span[2]', locateStrategy: 'xpath' }, 'CANCEL');

      // SAVE button
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/div/div/div[2]/button[2]/span[2]', locateStrategy: 'xpath' }, 'SAVE');

      // browser.pause(400000000)
      // 'Assets | 100% of Fleet' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-fleet-header/app-fleet-percentage-bar/app-progress-bar-with-text/div/span', locateStrategy: 'xpath' }, 'Assets | 100% of Fleet')

      // 'keyboard_double_arrow_left' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-nav-toggle/app-cs-nav-toggle/mat-icon', locateStrategy: 'xpath' }, 'keyboard_double_arrow_left')

      // 'drag_indicator' logo
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'FLEET OVERVIEW' text 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'FLEET OVERVIEW')

      // 'settings' logo  
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // click 'settings' icon  
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[2]', locateStrategy: 'xpath' }, 'click settings')

      // 'Add Widget' text  
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[2]/ul/li[2]/a', locateStrategy: 'xpath' }, 'Add Widget')

      // 'Remove' text
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[2]/ul/li[3]/a', locateStrategy: 'xpath' }, 'Remove')

      //  click 'Add Widget' text  
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[2]/ul/li[2]/a', locateStrategy: 'xpath' }, 'open Add Widget')

      // CUSTOMIZE WIDGETS
      browser.waitForElementVisible({ selector: 'div[class="mat-mdc-dialog-title mdc-dialog__title tw-flex tw-items-center"]' }, 'CUSTOMIZE WIDGETS')

      // icon 
      browser.waitForElementVisible({ selector: 'div[class="mat-mdc-dialog-title mdc-dialog__title tw-flex tw-items-center"]>button>mat-icon' }, 'customize widgets icon is visible')

      // Fleet Overview
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[1]/span[1]/span', locateStrategy: 'xpath' }, 'Fleet Overview')

      // Quick Links
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[2]/span[1]/span', locateStrategy: 'xpath' }, 'Quick Links')

      // Model Type Composition
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[3]/span[1]/span', locateStrategy: 'xpath' }, 'Model Type Composition')

      // Machine Use
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[4]/span[1]/span', locateStrategy: 'xpath' }, 'Machine Use')

      // Fleet Average Age
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[5]/span[1]/span', locateStrategy: 'xpath' }, 'Fleet Average Age')

      // Ignition Status
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[6]/span[1]/span', locateStrategy: 'xpath' }, 'Ignition Status')

      // Fuel Level
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[7]/span[1]/span', locateStrategy: 'xpath' }, 'Fuel Level')

      // State of Charge
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[8]/span[1]/span', locateStrategy: 'xpath' }, 'State of Charge')

      // DEF Remaining
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[9]/span[1]/span', locateStrategy: 'xpath' }, 'DEF Remaining')

      // Reported Last 24 Hours
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[10]/span[1]/span', locateStrategy: 'xpath' }, 'Reported Last 24 Hours')

      // Alerts
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[11]/span[1]/span', locateStrategy: 'xpath' }, 'Alerts')

      // Hardware Reporting Metric
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[12]/span[1]/span', locateStrategy: 'xpath' }, 'Hardware Reporting Metric')

      // Envelope Profile
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[13]/span[1]/span', locateStrategy: 'xpath' }, 'Envelope Profile')

      // Battery Monitoring
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[14]/span[1]/span', locateStrategy: 'xpath' }, 'Battery Monitoring')

      // Diagnostic Trouble Code
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[15]/span[1]/span', locateStrategy: 'xpath' }, 'Diagnostic Trouble Code')

      // Fleet Age
      browser.waitForElementVisible({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-widget-dialog/div[2]/mat-selection-list/mat-list-option[16]/span[1]/span', locateStrategy: 'xpath' }, 'Fleet Age')

      // 'save' button
      browser.waitForElementVisible({ selector: 'button[class="mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base"]' }, 'SAVE')

      // 'cancel' button
      browser.click({ selector: 'button[class="mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"]' }, 'CANCEL')

      // close popup
      browser.click('body');

      // click 'settings' icon  
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[2]', locateStrategy: 'xpath' }, 'click settings')

      // click 'Remove' 
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-header/div[2]/ul/li[3]/a', locateStrategy: 'xpath' }, 'open Remove')

      // 'Remove Widget'
      browser.assert.containsText({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/h6', locateStrategy: 'xpath' }, 'Remove Widget')

      // 'Are you sure you want to remove this widget?'
      browser.assert.containsText({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/mat-dialog-content/div', locateStrategy: 'xpath' }, 'Are you sure you want to remove this widget?')

      // 'YES'
      browser.assert.containsText({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/mat-dialog-actions/div/button[1]/span[2]', locateStrategy: 'xpath' }, 'YES')

      // 'CANCEL'
      browser.assert.containsText({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/mat-dialog-actions/div/button[2]/span[2]', locateStrategy: 'xpath' }, 'CANCEL')

      // click  x button
      browser.click({ selector: '/html/body/div[4]/div[2]/div/mat-dialog-container/div/div/app-confirmation-dialog/button', locateStrategy: 'xpath' }, 'click X button')

      // close popup
      //    browser.keys(browser.Keys.ESCAPE, 'close popup');
      browser.click('body');

      // 'Machines with DTCs'  
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-content/ngx-slick-carousel/div/div/div[1]/div/div/div/div/app-grid-blocks-item-sub', locateStrategy: 'xpath' }, 'Machines with DTCs')

      // 'More Details'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-content/ngx-slick-carousel/div/div/div[1]/div/div/div/div/a', locateStrategy: 'xpath' }, 'More Details')

      //  click 'More Details'
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-content/ngx-slick-carousel/div/div/div[1]/div/div/div/div/a', locateStrategy: 'xpath' }, 'open More Details')

      // >> icon 
      browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-dtc-widget-dialog>div>div>mat-icon' }, '>> icon is visible')

      // DTC DETAILS
      browser.waitForElementVisible({ selector: 'div[class="mdc-dialog__container"]>div>app-dtc-widget-dialog>div>div' }, 'DTC DETAILS')

      // DTC 
      browser.waitForElementVisible({ selector: 'thead[class="sticky-header"]>tr>th:nth-of-type(1)' }, 'DTC')

      // Code Description
      browser.waitForElementVisible({ selector: 'thead[class="sticky-header"]>tr>th:nth-of-type(2)' }, 'Code Description')

      // Code Source
      browser.waitForElementVisible({ selector: 'thead[class="sticky-header"]>tr>th:nth-of-type(3)' }, 'Code Source')

      // Code Category
      browser.waitForElementVisible({ selector: 'thead[class="sticky-header"]>tr>th:nth-of-type(4)' }, 'Code Category')

      // # Of Assets
      browser.waitForElementVisible({ selector: 'thead[class="sticky-header"]>tr>th:nth-of-type(5)' }, '# Of Assets')


      // close popup
      // browser.click('body');

      // close popup
      browser.click({ selector: 'div[class="mdc-dialog__container"]>div>app-dtc-widget-dialog>div>div>mat-icon' }, 'close popup')







      // 'Machines with Low Fuel or SOCs'
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-content/ngx-slick-carousel/div/div/div[2]/div/div/div/div/app-grid-blocks-item-sub', locateStrategy: 'xpath' }, 'Machines with Low Fuel or SOCs')

      // 'Machines with System Alerts'  
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-content/ngx-slick-carousel/div/div/div[3]/div/div/div/div/app-grid-blocks-item-sub', locateStrategy: 'xpath' }, 'Machines with System Alerts')

      // 'Machines with Engine Alerts'  
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-content/ngx-slick-carousel/div/div/div[4]/div/div/div/div/app-grid-blocks-item-sub', locateStrategy: 'xpath' }, 'Machines with Engine Alerts')

      // 'Machines with Telematics Alerts'
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[1]/app-widget/app-fleet-overview-widget/app-widget-content/ngx-slick-carousel/div/div/div[5]/div/div/div/div/app-grid-blocks-item-sub', locateStrategy: 'xpath' }, 'Machines with Telematics Alerts')

      // 'drag_indicator'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'QUICK LINKS'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'QUICK LINKS')

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'Pick List'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[1]/a', locateStrategy: 'xpath' }, 'Pick List')


      // click 'Pick List'
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[1]/a', locateStrategy: 'xpath' }, 'open Pick List')

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
        // Home >>
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

        // Equipment Information
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Equipment Information');

        // switch back to the first tab
        browser.switchWindow(originalHandle[1]);
      });

      // 'Technical Publications'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[2]/a', locateStrategy: 'xpath' }, 'Technical Publications')

      //click 'Technical Publications'
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[2]/a', locateStrategy: 'xpath' }, 'open Technical Publications')

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
        // Home >>
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

        // Technical Publications
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Technical Publications');

        // switch back to the first tab
        browser.switchWindow(originalHandle[1]);
      });

      // 'Interactive Parts Manuals'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[3]/a', locateStrategy: 'xpath' }, 'Interactive Parts Manuals')

      // click 'Interactive Parts Manuals'
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[3]/a', locateStrategy: 'xpath' }, 'open Interactive Parts Manuals')

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
        // Home >>
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

        // Interactive Manuals
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Interactive Manuals');

        // switch back to the first tab
        browser.switchWindow(originalHandle[1]);
      });

      // '3-D Hydraulic Schematics'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[4]/a', locateStrategy: 'xpath' }, '3-D Hydraulic Schematics')

      // click '3-D Hydraulic Schematics'
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[4]/a', locateStrategy: 'xpath' }, 'open 3-D Hydraulic Schematics')

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
        browser.switchWindow(originalHandle[1]);
      });

      // 'Service Bulletins'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[5]/a', locateStrategy: 'xpath' }, 'Service Bulletins')

      // click 'Service Bulletins'
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[5]/a', locateStrategy: 'xpath' }, 'open Service Bulletins')

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
        // Home >>
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

        // Safety & Service Bulletins
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Safety & Service Bulletins');

        // switch back to the first tab
        browser.switchWindow(originalHandle[1]);
      });

      // 'Control Software'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[6]/a', locateStrategy: 'xpath' }, 'Control Software')

      // click 'Control Software'
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-content/ul/li[6]/a', locateStrategy: 'xpath' }, 'open Control Software')

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
        // Home >>
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home >>');

        // Control Software
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[2]', locateStrategy: 'xpath' }, 'Control Software');

        // switch back to the first tab
        browser.switchWindow(originalHandle[1]);
      });


      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[2]/app-widget/app-quick-links/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'Model Type Composition'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[3]/app-widget/app-model-type/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'MODEL TYPE COMPOSITION')

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[3]/app-widget/app-model-type/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // left arrow
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[3]/app-widget/app-model-type/app-widget-content/ngx-slick-carousel/button[1]', locateStrategy: 'xpath' }, 'left arrow icon is visible');

      // right arrow
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[3]/app-widget/app-model-type/app-widget-content/ngx-slick-carousel/button[2]', locateStrategy: 'xpath' }, 'right arrow icon is visible');

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[4]/app-widget/app-machine-in-use/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'MACHINE USE'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[4]/app-widget/app-machine-in-use/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'MACHINE USE')

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[4]/app-widget/app-machine-in-use/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[5]/app-widget/app-fleet-average-age/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'FLEET AVERAGE AGE...'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[5]/app-widget/app-fleet-average-age/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'FLEET AVERAGE AGE ...')

      // >> icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[5]/app-widget/app-fleet-average-age/app-widget-header/div[1]/app-widget-title/a/span/mat-icon', locateStrategy: 'xpath' }, '>> icon is visible');

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[5]/app-widget/app-fleet-average-age/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[6]/app-widget/app-engine-status/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'FLEET AVERAGE AGE...'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[6]/app-widget/app-engine-status/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'IGNITION STATUS')

      // POWER setting icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[6]/app-widget/app-engine-status/app-widget-header/div[1]/app-widget-title/a/span/app-widget-icon', locateStrategy: 'xpath' }, 'power_settings_new icon is visible');

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[6]/app-widget/app-engine-status/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[7]/app-widget/app-fuel-level/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'FUEL LEVEL'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[7]/app-widget/app-fuel-level/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'FUEL LEVEL')

      // local_gas_station icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[7]/app-widget/app-fuel-level/app-widget-header/div[1]/app-widget-title/a/span/app-widget-icon/mat-icon', locateStrategy: 'xpath' }, 'local_gas_station icon is visible');

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[7]/app-widget/app-fuel-level/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[8]/app-widget/app-state-of-charge-widget/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'STATUS OF CHARGE'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[8]/app-widget/app-state-of-charge-widget/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'STATE OF CHARGE')

      // BOLT icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[8]/app-widget/app-state-of-charge-widget/app-widget-header/div[1]/app-widget-title/a/span/app-widget-icon/mat-icon', locateStrategy: 'xpath' }, 'bolt icon is visible');

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[8]/app-widget/app-state-of-charge-widget/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[9]/app-widget/app-def-level/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'FUEL LEVEL'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[9]/app-widget/app-def-level/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'DEF REMAINING')

      // opacity icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[9]/app-widget/app-def-level/app-widget-header/div[1]/app-widget-title/a/span/app-widget-icon/mat-icon', locateStrategy: 'xpath' }, 'opacity icon is visible');

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[9]/app-widget/app-def-level/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[10]/app-widget/app-last-reported/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'REPORTED LAST 24 HOURS'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[10]/app-widget/app-last-reported/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'REPORTED LAST 24 HOURS')

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[10]/app-widget/app-last-reported/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[11]/app-widget/app-alerts-widget/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'ALERTS'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[11]/app-widget/app-alerts-widget/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'ALERTS')

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[11]/app-widget/app-alerts-widget/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[12]/app-widget/app-hardware-reporting-metric/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'MACHINE USE'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[12]/app-widget/app-hardware-reporting-metric/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'HARDWARE REPORTING METRIC')

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[12]/app-widget/app-hardware-reporting-metric/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'ENVELOPE PROFILE'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'ENVELOPE PROFILE')

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // input field
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-footer/div[1]/form/app-historic-select/mat-form-field/div[1]/div/div[2]/mat-select', locateStrategy: 'xpath' }, 'input field')

      // open input field
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-footer/div[1]/form/app-historic-select/mat-form-field/div[1]/div/div[2]/mat-select', locateStrategy: 'xpath' }, 'open input field')

      // 24 Hours
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(1)' }, '24 Hours')

      // 7 Days
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(2)' }, '7 Days')

      // 14 Days
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(3)' }, '14 Days')

      // 31 Days
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(4)' }, '31 Days')

      // 90 Days
      browser.waitForElementVisible({ selector: 'div[dir="ltr"]>div>div>mat-option:nth-of-type(5)' }, '90 Days')

      // close popup
      browser.click('body')



      // range indicator
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-footer/app-widget-applicable-assets-bar/div/app-progress-bar/div', locateStrategy: 'xpath' }, 'range indicator')

      // applicable assets
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-footer/app-widget-applicable-assets-bar/div/span', locateStrategy: 'xpath' }, 'APPLICABLE ASSETS')

      // % button
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-footer/div[2]/mat-button-toggle-group/mat-button-toggle[1]/button', locateStrategy: 'xpath' }, '% button')

      // # button
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[13]/app-widget/app-envelope-profile-use/app-widget-footer/div[2]/mat-button-toggle-group/mat-button-toggle[2]/button', locateStrategy: 'xpath' }, '# button')

      // 'drag_indicator' ICON
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-header/div[1]/app-widget-drag-handler/mat-icon', locateStrategy: 'xpath' }, 'drag_indicator')

      // 'BATTERY MONITORING'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-header/div[1]/app-widget-title/a/span', locateStrategy: 'xpath' }, 'BATTERY MONITORING')

      // 'settings'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-header/div[2]/div/mat-icon', locateStrategy: 'xpath' }, 'settings')

      // battery_charging_full icon 
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-content/div/div/div[1]/div/div[1]/mat-icon', locateStrategy: 'xpath' }, 'battery_charging_full icon is visible')

      // State of Charge
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-content/div/div/div[1]/div/div[1]/span', locateStrategy: 'xpath' }, 'State of Charge')

      // bolt icon 
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-content/div/div/div[2]/div/div[1]/mat-icon', locateStrategy: 'xpath' }, 'bolt icon is visible')

      // '% Charge Complete'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-content/div/div/div[2]/div/div[1]/span', locateStrategy: 'xpath' }, '% Charge Complete')

      // history icon 
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-content/div/div/div[3]/div/div[1]/mat-icon', locateStrategy: 'xpath' }, 'history icon is visible')

      // 'Time Since Last Charge'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-dashboard/app-clearsky-content/div/app-widget-list/app-widget-item[14]/app-widget/app-battery-monitoring/app-widget-content/div/div/div[3]/div/div[1]/span', locateStrategy: 'xpath' }, 'Time Since Last Charge')



      // click on map part
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[2]/a', locateStrategy: 'xpath' }, 'open map section')

      // check toggle button
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-map/app-clearsky-content/app-map-content/div/app-map-toggles/app-map-toggle/mat-slide-toggle/div/button', locateStrategy: 'xpath' }, 'toggle button is visible');

      // 'Landmarks'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-map/app-clearsky-content/app-map-content/div/app-map-toggles/app-map-toggle/mat-slide-toggle/div/label/span', locateStrategy: 'xpath' }, 'Landmarks')

      // 'FILTER TO VISIBLE MACHINES'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-map/app-clearsky-content/app-map-content/div/div/app-persistent-slide-out/div/div[1]/button/span[2]', locateStrategy: 'xpath' }, 'FILTER TO VISIBLE MACHINES')

      // click on 'List'  
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[3]/a', locateStrategy: 'xpath' }, 'open List')


      // list section 

      // 'Displaying 1-25 of '
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/div[1]/app-paginator-displaying-info/span', locateStrategy: 'xpath' }, 'Displaying 1-25 of')

      // FILTER SELECTED MACHINES
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/div[1]/button/span[2]', locateStrategy: 'xpath' }, 'FILTER SELECTED MACHINES')

      // CHECK BOX
      // browser.waitForElementVisible({ selector: 'th[class="machine-selection"]>mat-checkbox>div>div>input' }, 'check box is visible');

      // checking ' Model Type '
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/div[2]/table/thead/tr/th[2]/div/div', locateStrategy: 'xpath' }, 'Model Type')

      // checking ' Model'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/div[2]/table/thead/tr/th[3]/div/div[1]', locateStrategy: 'xpath' }, 'Model')

      // checking ' Brand '
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/div[2]/table/thead/tr/th[4]/div/div[1]', locateStrategy: 'xpath' }, 'Brand')

      // checking ' Serial Number '
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/div[2]/table/thead/tr/th[5]/div/div[1]', locateStrategy: 'xpath' }, 'Serial Number')

      // checking ' Asset ID '
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/div[2]/table/thead/tr/th[6]/div/div[1]', locateStrategy: 'xpath' }, 'Asset ID')

      // more_vert icon
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/div[2]/table/thead/tr/th[8]/button/mat-icon', locateStrategy: 'xpath' }, 'more_vert icon is visible');

      // checking ' Items per page: '
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/mat-paginator/div/div/div[1]/div', locateStrategy: 'xpath' }, 'Items per page:')

      // input field
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/mat-paginator/div/div/div[1]/mat-form-field', locateStrategy: 'xpath' }, 'page no. input box is visible');

      // open this input field
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/mat-paginator/div/div/div[1]/mat-form-field', locateStrategy: 'xpath' }, 'open this input box');

      // checking '25'
      browser.waitForElementVisible({ selector: 'div[role="listbox"]>mat-option:nth-of-type(1)>span' }, '25')

      // checking '50'
      browser.waitForElementVisible({ selector: 'div[role="listbox"]>mat-option:nth-of-type(2)>span' }, '50')

      // checking '100'
      browser.waitForElementVisible({ selector: 'div[role="listbox"]>mat-option:nth-of-type(3)>span' }, '100')

      // close popup
      browser.click('body');

      // checking '1 -25 of'
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/mat-paginator/div/div/div[2]/div', locateStrategy: 'xpath' }, '1 – 25 of')

      // > 
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-list/app-clearsky-content/div/mat-paginator/div/div/div[2]/button[2]', locateStrategy: 'xpath' }, '> arraow is visible');


      //click on  'Site Networks' 
      browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-sidebar/app-cs-layout-nav/nav/ul/li[4]/a', locateStrategy: 'xpath' }, 'open Site Networks')

      //  TOGGLE ICON
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-map/app-clearsky-content/app-map-content/div/app-map-toggles/app-map-toggle/mat-slide-toggle/div/button', locateStrategy: 'xpath' }, 'toggle button is visible');

      // LANDMARKS
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-map/app-clearsky-content/app-map-content/div/app-map-toggles/app-map-toggle/mat-slide-toggle/div/label/span', locateStrategy: 'xpath' }, 'Landmarks')

      //  Filter to Visible Machines 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-map/app-clearsky-content/app-map-content/div/div/app-persistent-slide-out/div/div[1]/button/span[2]', locateStrategy: 'xpath' }, 'FILTER TO VISIBLE MACHINES')
      //browser.pause(400000)






      browser.pause(8000)
      // browser.waitForElementVisible({ selector: 'li[mattooltipclass="nav-tooltip"]:nth-of-type(5)>a' }, 20000)


      // open 'Access Control' 
      browser.click({ selector: 'li[mattooltipclass="nav-tooltip"]:nth-of-type(5)>a' }, 'open Access Control')


      // MAP
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[1]/app-widget/app-access-site-network-map-widget/app-widget-header/div/div/app-widget-title/a/span', locateStrategy: 'xpath' }, 'MAP')

      //  Filter to Visible Machines 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[1]/app-widget/app-access-site-network-map-widget/app-widget-content/app-map-content/div/div/app-persistent-slide-out/div/div[1]/button/span[2]', locateStrategy: 'xpath' }, 'FILTER TO VISIBLE MACHINES')

      // LIST
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-header/div/div/app-widget-title/a/span', locateStrategy: 'xpath' }, 'LIST')

      // filters input
      browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/mat-form-field/div[1]/div/div[2]/input', locateStrategy: 'xpath' }, 'filter input is visible');

      // Equipment Id
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/div[1]/table/thead/tr/th[1]/div/div[1]', locateStrategy: 'xpath' }, 'Equipment Id')

      // Oem Name
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/div[1]/table/thead/tr/th[2]/div', locateStrategy: 'xpath' }, 'Oem Name')

      // Model
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/div[1]/table/thead/tr/th[3]/div', locateStrategy: 'xpath' }, 'Model')

      // Site Network Name
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/div[1]/table/thead/tr/th[4]/div', locateStrategy: 'xpath' }, 'Site Network Name')

      // Ignition Status
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/div[1]/table/thead/tr/th[5]/div', locateStrategy: 'xpath' }, 'Ignition Status')

      // Diagnostic Trouble Code
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/div[1]/table/thead/tr/th[6]/div', locateStrategy: 'xpath' }, 'Diagnostic Trouble Code')

      //  Items per page: 
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/div[2]/mat-paginator/div/div/div[1]/div[1]', locateStrategy: 'xpath' }, 'Items per page:')

      // of
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[2]/app-widget/app-access-list-widget/app-widget-content/div[2]/mat-paginator/div/div/div[2]/div', locateStrategy: 'xpath' }, 'of')

      // ACCESS CONTROL METRICS
      browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-clearsky-page/app-clearsky/section/app-cs-layout-main/div/app-cs-layout-content/app-cartridges/app-cartridge/app-access-control/app-clearsky-content/app-widget-list/app-widget-item[3]/app-widget/app-access-metrics-widget/app-widget-header/div/div/app-widget-title/a/span', locateStrategy: 'xpath' }, 'ACCESS CONTROL METRICS')

      browser.pause(4000)

      // open Legacy ClearSky
      browser.click({ selector: 'li[mattooltipclass="nav-tooltip"]:nth-of-type(6)>a' }, 'open Legacy ClearSky').url('https://clearsky.jlg.com/sensornet/html5/iapp/login/html/clearsky.html');

      browser.waitForElementVisible('body')

      browser.waitForElementVisible({ selector: 'p[class="headline"]' }, 'WELCOME TO CLEARSKY™')

      // THE SIMPLE FLEET MANAGEMENT
      browser.waitForElementVisible({ selector: 'div[class="brandingTextArea"]' }, 'THE SIMPLE FLEET MANAGEMENT')

      // SOLUTION FROM JLG.
      browser.waitForElementVisible({ selector: 'div[class="brandingTextArea"]' }, 'SOLUTION FROM JLG.')

      // register now
      browser.waitForElementVisible({ selector: 'div[class="pull-right hidden-xs navbarRightSection"]' }, 'First time here? Register now.')

      // SIGN IN TO YOUR JLG® CLEARSKY ACCOUNT
      browser.waitForElementVisible({ selector: '/html/body/div[6]/div[2]/div/div[1]/div[1]/div/h1', locateStrategy: 'xpath' }, 'SIGN IN TO YOUR JLG® CLEARSKY ACCOUNT')

      //LOGIN TO CLEARSKY
      browser.waitForElementVisible({ selector: '/html/body/div[6]/div[2]/div/div[1]/div[2]/div/section/div/div/form/h1', locateStrategy: 'xpath' }, 'LOGIN TO CLEARSKY')

      // switch back to the first tab
      //   browser.switchWindow(originalHandle[0]);
    });






    // End the browser session
  }
};  