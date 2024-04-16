
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


    'Home Control Software Test': function (browser) {

        // clicking on signin 
        browser.click({ selector: '#loginMenu' }, 'open signin menu');

        // add email into email input field
        browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');

        // add password into password input field
        browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');

        // clicking sign in button
        browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');

        browser.waitForElementVisible('body')
        browser.pause(9000)

        // clicking button 'SEARCH BY MACHINE'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[4]/div[2]/a', locateStrategy: 'xpath' }, 'open FIND CONTROL SOFTWARE');

        // browser.waitForElementVisible('body')


        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Control Software'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/div/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Control Software')

        // SEARCH BY MACHINE MODEL OR MODULE PART NUMBER
        browser.assert.containsText({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-article-search-box/div/div/div/div/h1', locateStrategy: 'xpath' }, 'SEARCH BY MACHINE MODEL OR MODULE PART NUMBER')

        // search icon
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-article-search-box/div/div/div/div/app-search/form/span', locateStrategy: 'xpath' }, 'search icon is visible')

        // search button 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[1]/app-article-search-box/div/div/div/div/app-search/form/button', locateStrategy: 'xpath' }, 'SEARCH')

        // CONTROL SOFTWARE
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/p/span/strong/font/font', locateStrategy: 'xpath' }, 'CONTROL SOFTWARE')

        // Adobe Acrobat and Winzip are required for the files, links to download the programs are available in the download section of this webpage. An Interface Cable is required to download software to JLG Modules.
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/table/tbody/tr/td/p[1]/span', locateStrategy: 'xpath' }, 'Adobe Acrobat and Winzip are required for the files, links to download the programs are available in the download section of this webpage. An Interface Cable is required to download software to JLG Modules.')

        // For PC with Serial Ports please order JLG p/n 1060629
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/table/tbody/tr/td/p[1]/span', locateStrategy: 'xpath' }, 'For PC with Serial Ports please order JLG p/n 1060629')

        // For PC with USB ports please order JLG P/N 1001137005
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/table/tbody/tr/td/p[1]/span', locateStrategy: 'xpath' }, 'For PC with USB ports please order JLG P/N 1001137005')

        // For Compact Crawler Booms – LoadTool Ramhino – JLG P/N 18223100
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/table/tbody/tr/td/p[1]/span', locateStrategy: 'xpath' }, 'For Compact Crawler Booms – LoadTool Ramhino – JLG P/N 18223100')

        // Instructions for uploading your control software is included in the downloadable zip file.  For further assistance please call 1-877-JLG-LIFT. 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/table/tbody/tr/td/p[2]/span/font', locateStrategy: 'xpath' }, 'Instructions for uploading your control software is included in the downloadable zip file.  For further assistance please call 1-877-JLG-LIFT. ')

        // To ensure the proper software, please verify the Module part number prior to install.
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/table/tbody/tr/td/p[3]/font/span', locateStrategy: 'xpath' }, 'To ensure the proper software, please verify the Module part number prior to install.')

        // *Note: Some systems may prevent the downloading of zip/exe files, if you encounter issues downloading files please contact your IT department for assistance.
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/table/tbody/tr/td/p[4]/span/font', locateStrategy: 'xpath' }, '*Note: Some systems may prevent the downloading of zip/exe files, if you encounter issues downloading files please contact your IT department for assistance.')

        // JLG requires downloading the software to the PC prior to uploading to the modules. 
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[2]/app-rich-text-main/div/table/tbody/tr/td/p[5]/span/font', locateStrategy: 'xpath' }, 'JLG requires downloading the software to the PC prior to uploading to the modules. ')




        // End the browser session
    }
};  