
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


    'Home Inspections and Forms Test': function (browser) {

        // clicking on signin 
        browser.click({ selector: '#loginMenu' }, 'open signin menu');

        // add email into email input field
        browser.setValue({ selector: '#mat-input-2' }, 'pranjal_pandey@amicusglobal.com');

        // add password into password input field
        browser.setValue({ selector: '#mat-input-3' }, 'Pr@nshu5');

        // clicking sign in button
        browser.click({ selector: '#header > ul > li.has-child.ng-star-inserted > div > div > app-auth-form > div > div > form > div > button' }, 'sign in the user');

        browser.waitForElementVisible('body')
        browser.pause(6000)




        // clicking button 'VIEW FORMS'
        browser.click({ selector: '//*[@id="mainContainer"]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-page-slot/section/app-template/app-one-column-page/section/app-cartridges[1]/app-cartridge[3]/app-content-slot-main/app-cartridges/app-cartridge/app-marketing-box-banner/div/div/div[3]/div[2]/a', locateStrategy: 'xpath' }, 'open VIEW FORMS');


        // browser.waitForElementVisible('body')

        // text 'Home>>'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[1]', locateStrategy: 'xpath' }, 'Home>>')

        // text 'Inspections & Forms'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[1]/div/app-base-breadcrumbs/ol/li[2]/span', locateStrategy: 'xpath' }, 'Inspections & Forms')

        // text 'INSPECTIONS AND FORMS'
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/h1', locateStrategy: 'xpath' }, 'INSPECTIONS AND FORMS')

        //  ID Plate Replacement Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[1]', locateStrategy: 'xpath' }, 'ID Plate Replacement Form')

        //  open ID Plate Replacement Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[1]', locateStrategy: 'xpath' }, 'open ID Plate Replacement Form')

        browser.waitForElementVisible('body')

        // back
        browser.url('https://onlineexpress-t.jlg.com/warranty-safety/machine-inspection-forms')


        //  JLG Boom Lift and Trailer Mounted Boom Lifts Inspection Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[2]', locateStrategy: 'xpath' }, 'JLG Boom Lift and Trailer Mounted Boom Lifts Inspection Form')

        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        // open JLG Boom Lift and Trailer Mounted Boom Lifts Inspection Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[2]', locateStrategy: 'xpath' }, 'open JLG Boom Lift and Trailer Mounted Boom Lifts Inspection Form')

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

        //  JLG Compact Crawler Inspection Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[3]', locateStrategy: 'xpath' }, 'JLG Compact Crawler Inspection Form')

        //  open JLG Compact Crawler Inspection Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[3]', locateStrategy: 'xpath' }, 'open JLG Compact Crawler Inspection Form')

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

        //  JLG EcoLift Inspection Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[4]', locateStrategy: 'xpath' }, 'JLG EcoLift Inspection Form')

        //  JLG EcoLift Inspection Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[4]', locateStrategy: 'xpath' }, 'open JLG EcoLift Inspection Form')

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

        //  JLG LiftPod Inspection
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[5]', locateStrategy: 'xpath' }, 'JLG LiftPod Inspection')

        //  JLG LiftPod Inspection
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[5]', locateStrategy: 'xpath' }, 'open JLG LiftPod Inspection')

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

        //  JLG Scissor Inspection Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[6]', locateStrategy: 'xpath' }, 'JLG Scissor Inspection Form')

        //  open JLG Scissor Inspection Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[6]', locateStrategy: 'xpath' }, 'open JLG Scissor Inspection Form')

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

        //  JLG Stock Picker Inspection Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[7]', locateStrategy: 'xpath' }, 'JLG Stock Picker Inspection Form')

        //  open JLG Stock Picker Inspection Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[7]', locateStrategy: 'xpath' }, 'open JLG Stock Picker Inspection Form')

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

        //  JLG Toucan Inspection Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[8]', locateStrategy: 'xpath' }, 'JLG Toucan Inspection Form')

        //  open JLG Toucan Inspection Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[8]', locateStrategy: 'xpath' }, 'open JLG Toucan Inspection Form')

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

        //  JLG Vertical Lift Inspection Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[9]', locateStrategy: 'xpath' }, 'JLG Vertical Lift Inspection Form')

        //  open JLG Vertical Lift Inspection Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[9]', locateStrategy: 'xpath' }, 'open JLG Vertical Lift Inspection Form')

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

        //  Machine Registration
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[10]', locateStrategy: 'xpath' }, 'Machine Registration')

        //  open Machine Registration
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[10]', locateStrategy: 'xpath' }, 'open Machine Registration')

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

        //  Machine Registration FS80/60
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[11]', locateStrategy: 'xpath' }, 'Machine Registration FS80/60')

        //  open Machine Registration FS80/60
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[11]', locateStrategy: 'xpath' }, 'open Machine Registration FS80/60')

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

        //  Machine Registration FT140/70
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[12]', locateStrategy: 'xpath' }, 'Machine Registration FT140/70')

        //  open Machine Registration FT140/70
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[12]', locateStrategy: 'xpath' }, 'open Machine Registration FT140/70')

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

        //  Owner Update Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[13]', locateStrategy: 'xpath' }, 'Owner Update Form')

        //  open Owner Update Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[13]', locateStrategy: 'xpath' }, 'open Owner Update Form')

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

        //  Product Modification and Application Request Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[14]', locateStrategy: 'xpath' }, 'Product Modification and Application Request Form')

        //  open Product Modification and Application Request Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[14]', locateStrategy: 'xpath' }, 'open Product Modification and Application Request Form')

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

        //  Product Status Verification Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[15]', locateStrategy: 'xpath' }, 'Product Status Verification Form')

        //  open Product Status Verification Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[15]', locateStrategy: 'xpath' }, 'open Product Status Verification Form')

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

        //  Safety Campaign Completion Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[16]', locateStrategy: 'xpath' }, 'Safety Campaign Completion Form')

        //  open Safety Campaign Completion Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[16]', locateStrategy: 'xpath' }, 'open Safety Campaign Completion Form')


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

        //  Rotating Telehandler New Machine and Pre-Delivery Inspections
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[17]', locateStrategy: 'xpath' }, 'Rotating Telehandler New Machine and Pre-Delivery Inspections')

        //  open Rotating Telehandler New Machine and Pre-Delivery Inspections
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[17]', locateStrategy: 'xpath' }, 'open Rotating Telehandler New Machine and Pre-Delivery Inspections')

        browser.waitForElementVisible('body')

        // back
        browser.url('https://onlineexpress-t.jlg.com/warranty-safety/machine-inspection-forms')

        //  Telehandler - New Machine and Pre-Delivery Inspections
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[18]', locateStrategy: 'xpath' }, 'Telehandler - New Machine and Pre-Delivery Inspections')

        //  open Telehandler - New Machine and Pre-Delivery Inspections
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[18]', locateStrategy: 'xpath' }, 'open Telehandler - New Machine and Pre-Delivery Inspections')

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

        //  Telehandler TF6-42 - Annual, Pre-Delivery, Frequent Machine Inspections
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[19]', locateStrategy: 'xpath' }, 'Telehandler TF6-42 - Annual, Pre-Delivery, Frequent Machine Inspections')

        //  open Telehandler TF6-42 - Annual, Pre-Delivery, Frequent Machine Inspections
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[19]', locateStrategy: 'xpath' }, 'open Telehandler TF6-42 - Annual, Pre-Delivery, Frequent Machine Inspections')

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

        //  Telehandler TF6-42 - New Machine Inspection
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[20]', locateStrategy: 'xpath' }, 'Telehandler TF6-42 - New Machine Inspection')

        //  open Telehandler TF6-42 - New Machine Inspection
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[20]', locateStrategy: 'xpath' }, 'open Telehandler TF6-42 - New Machine Inspection')

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

        //  Triple L Trailer Inspection Report
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[21]', locateStrategy: 'xpath' }, 'Triple L Trailer Inspection Report')

        //  open Triple L Trailer Inspection Report
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[21]', locateStrategy: 'xpath' }, 'open Triple L Trailer Inspection Report')

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

        //  Triple L Trailer Maintenance Schedule
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[22]', locateStrategy: 'xpath' }, 'Triple L Trailer Maintenance Schedule')

        //  open Triple L Trailer Maintenance Schedule
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[22]', locateStrategy: 'xpath' }, 'open Triple L Trailer Maintenance Schedule')

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

        //  Triple L Trailer Periodic Service Form
        browser.waitForElementVisible({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[23]', locateStrategy: 'xpath' }, 'Triple L Trailer Periodic Service Form')

        //  open Triple L Trailer Periodic Service Form
        browser.click({ selector: '/html/body/app-root/div/div[2]/div[2]/app-dynamic-route-component/app-template/app-page-slot/section/app-template/app-two-column-page/section/div[2]/div[2]/app-cartridges/app-cartridge/app-rich-text-main/div/p/a[23]', locateStrategy: 'xpath' }, 'open Triple L Trailer Periodic Service Form')

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



        // End the browser session
    }
};  