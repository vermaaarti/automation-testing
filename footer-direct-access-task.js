
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


    'Footer Direct Access Test': function (browser) {

        browser.click({
            selector: 'a[href="https://www.jlg.com/en/direct-access"]'
        }, 'open Direct Access');

        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
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
            browser.pause(6000)

            // close popup
            browser.click({ selector: 'div[class="featherlight-content"]>button'}, 'Close popup')


            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a' }, 'Home >>')

            //  DirectAccess
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'DirectAccess')


            // Cookie Consent
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[5]/div/p[1]/strong', locateStrategy: 'xpath' }, 'Cookie Consent')

            // JLG uses necessary cookies to make sure our site works. JLG would also like to set optional cookies to provide you the best user experience. For more detailed information about the cookies JLG uses, see our Privacy Policy.
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[5]/div/p[2]', locateStrategy: 'xpath' }, 'JLG uses necessary cookies to make sure our site works. JLG would also like to set optional cookies to provide you the best user experience. For more detailed information about the cookies JLG uses, see our Privacy Policy.')

            // I ACCEPT
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[5]/div/div/div[1]', locateStrategy: 'xpath' }, 'I ACCEPT')

            // REJECT ALL
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[5]/div/div/div[2]', locateStrategy: 'xpath' }, 'REJECT ALL')

            // accept cookie
            browser.click({ selector: '/html/body/div/form/div[5]/div/div/div[1]', locateStrategy: 'xpath' }, 'I ACCEPT')

            //  img is visible
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[1]/div/video', locateStrategy: 'xpath' }, 'youtube video is visible')

            //  STAY INFORMED. STAY CONFIDENT.
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[1]/div/div[1]/p[1]/strong/em', locateStrategy: 'xpath' }, 'STAY INFORMED. STAY CONFIDENT.')

            //  Direct Access gives you valuable, actionable knowledge that helps you rise to your full potential, no matter what your role on the job site. Subscribe now to receive monthly updates straight to your inbox.
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[1]/div/div[1]/p[2]', locateStrategy: 'xpath' }, 'Direct Access gives you valuable, actionable knowledge that helps you rise to your full potential, no matter what your role on the job site. Subscribe now to receive monthly updates straight to your inbox.')

            // SUBSCRIBE
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[1]/div/div[1]/p[2]/button', locateStrategy: 'xpath' }, 'SUBSCRIBE')

            // LATEST TRENDS AND STORIES
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/h2', locateStrategy: 'xpath' }, 'LATEST TRENDS AND STORIES')

            // youtube video
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[1]', locateStrategy: 'xpath' }, 'youtube video is visible')

            // Parts & Service
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[1]/div[1]', locateStrategy: 'xpath' }, 'Parts & Service')

            //  ACCESSORIES AND ADD-ONS TO SUPPORT STEEL ERECTION 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[1]/div[1]/h3', locateStrategy: 'xpath' }, ' ACCESSORIES AND ADD-ONS TO SUPPORT STEEL ERECTION')

            // Articles
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[1]/div[2]', locateStrategy: 'xpath' }, 'Articles - ')


            // IMG1
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[2]', locateStrategy: 'xpath' }, 'IMG1 is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[2]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  MARKET UPDATE: DEMAND INCREASING FOR ROTATING TELEHANDLERS 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[2]/div[1]/h3/span', locateStrategy: 'xpath' }, ' MARKET UPDATE: DEMAND INCREASING FOR ROTATING TELEHANDLERS')

            // Blog Posts - 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[2]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts - ')


            // IMG2
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[3]', locateStrategy: 'xpath' }, 'IMG2 is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[3]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  STARRING ROLE: JLG EQUIPMENT ELEVATES FILMMAKING TO NEW HEIGHTS 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[3]/div[1]/h3/span', locateStrategy: 'xpath' }, ' STARRING ROLE: JLG EQUIPMENT ELEVATES FILMMAKING TO NEW HEIGHTS')

            // Blog Posts - 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[3]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts - ')


            // IMG3
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[4]', locateStrategy: 'xpath' }, 'IMG3 is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[4]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  UNLOCKING EFFICIENCY: 5 TIPS TO IMPROVE CONCRETE OPERATIONS WITH A TELEHANDLER 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[4]/div[1]/h3/span', locateStrategy: 'xpath' }, 'UNLOCKING EFFICIENCY: 5 TIPS TO IMPROVE CONCRETE OPERATIONS WITH A TELEHANDLER')

            // Blog Posts - 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[1]/div[1]/a[4]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts - ')

            // CATEGORY
              browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[1]', locateStrategy: 'xpath' }, 'CATEGORY')
  
              //  icon
              browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[1]', locateStrategy: 'xpath' }, 'ICON is visible')
  
              // open CATEGORY
              browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div', locateStrategy: 'xpath' }, 'open CATEGORY')
  
              // Safety
              browser.waitForElementVisible({ selector: 'a[href="https://www.jlg.com/en/direct-access/category/safety"]' }, 'Safety')
  
              // open Safety
              browser.click({ selector: 'a[href="https://www.jlg.com/en/direct-access/category/safety"]' }, 'open Safety')
  
              browser.waitForElementVisible('body')
  
              // Home >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')
  
              // DirectAccess
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')
  
              //  Safety
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Safety')
  
              // back
              browser.url('https://www.jlg.com/en/direct-access');
  
  
  
              // Innovations
              browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[2]/p', locateStrategy: 'xpath' }, 'Innovations')
  
              // open Innovations
              browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[2]', locateStrategy: 'xpath' }, 'open Innovations')
  
              browser.waitForElementVisible('body')
  
              // Home >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')
  
              // DirectAccess >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')
  
              //  Innovations
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Innovations')
  
              // back
              browser.url('https://www.jlg.com/en/direct-access');
  
  
  
              // Equipment
              browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[3]/p', locateStrategy: 'xpath' }, 'Equipment')
  
              // open Equipment
              browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[3]', locateStrategy: 'xpath' }, 'open Equipment')
  
              browser.waitForElementVisible('body')
  
              // Home >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')
  
              // DirectAccess >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')
  
              //  Equipment
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Equipment')
  
              // back
              browser.url('https://www.jlg.com/en/direct-access');
  
  
  
              // Training
              browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[4]/p', locateStrategy: 'xpath' }, 'Training')
  
              // open Training
              browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[4]', locateStrategy: 'xpath' }, 'open Training')
  
              browser.waitForElementVisible('body')
  
              // Home >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')
  
              // DirectAccess >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')
  
              //  Training
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Training')
  
              // back
              browser.url('https://www.jlg.com/en/direct-access');
  
  
  
              // Industry Trends
              browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[5]/p', locateStrategy: 'xpath' }, 'Industry Trends')
  
              // open Industry Trends
              browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[5]', locateStrategy: 'xpath' }, 'open Industry Trends')
  
              browser.waitForElementVisible('body')
  
              // Home >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')
  
              // DirectAccess >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')
  
              //  Industry Trends
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Industry Trends')
  
              // back
              browser.url('https://www.jlg.com/en/direct-access');
  
  
  
              // Parts & Service
              browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[6]/p', locateStrategy: 'xpath' }, 'Parts & Service')
  
              // open Parts & Service
              browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[6]', locateStrategy: 'xpath' }, 'open Parts & Service')
  
              browser.waitForElementVisible('body')
  
              // Home >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')
  
              // DirectAccess >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')
  
              //  Parts & Service
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Parts & Service')
  
              // back
              browser.url('https://www.jlg.com/en/direct-access');
  
  
  
              // Access 101
              browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[7]/p', locateStrategy: 'xpath' }, 'Access 101')
  
              // open Access 101
              browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[1]/a[7]', locateStrategy: 'xpath' }, 'open Access 101')
  
              browser.waitForElementVisible('body')
  
              // Home >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')
  
              // DirectAccess >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')
  
              //  Access 101
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Access 101')
  
              // back
              browser.url('https://www.jlg.com/en/direct-access');
  
  

            // CONTENT TYPE
           browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'CONTENT TYPE')

            //  icon
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'ICON is visible')

            // open CONTENT TYPE
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'open CONTENT TYPE')


            // icon 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[1]', locateStrategy: 'xpath' }, 'ICON is visible')

            // Case Studies
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[1]', locateStrategy: 'xpath' }, 'Case Studies')

            // open Case Studies
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[1]', locateStrategy: 'xpath' }, 'open Case Studies')

            browser.waitForElementVisible('body')

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            // DirectAccess >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')

            //  Case Studies
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Case Studies')

            // back
            browser.url('https://www.jlg.com/en/direct-access');


            // open CONTENT TYPE
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'open CONTENT TYPE')

            // icon 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[2]', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[2]' , locateStrategy: 'xpath'}, 'Blog Posts')

            // open Blog Posts
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[2]', locateStrategy: 'xpath' }, 'open Blog Posts')

            browser.waitForElementVisible('body')

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            // DirectAccess >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')

            //  Blog Posts
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Blog Posts')

            // back
            browser.url('https://www.jlg.com/en/direct-access');



            // open CONTENT TYPE
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'open CONTENT TYPE')

            // icon 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[3]', locateStrategy: 'xpath'}, 'ICON is visible')

            // Expert Q&A
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[3]', locateStrategy: 'xpath'}, 'Expert Q&A')

            // open Expert Q&A
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[3]', locateStrategy: 'xpath' }, 'open Expert Q&A')

            browser.waitForElementVisible('body')

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            // DirectAccess >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')

            //  Expert Q&A
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Expert Q&A')

            // back
            browser.url('https://www.jlg.com/en/direct-access');



            // open CONTENT TYPE
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'open CONTENT TYPE')

            // icon 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[4]', locateStrategy: 'xpath'}, 'ICON is visible')

            // Tech Tips
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[4]', locateStrategy: 'xpath'}, 'Tech Tips')

            // open Tech Tips
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[4]', locateStrategy: 'xpath' }, 'open Tech Tips')

            browser.waitForElementVisible('body')

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            // DirectAccess >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')

            //  Tech Tips
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Tech Tips')

            // back
            browser.url('https://www.jlg.com/en/direct-access');



            // open CONTENT TYPE
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'open CONTENT TYPE')

            // icon 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[5]', locateStrategy: 'xpath'}, 'ICON is visible')

            // White Papers & Ebooks
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[5]', locateStrategy: 'xpath'}, 'White Papers & Ebooks')

            // open White Papers & Ebooks
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[5]', locateStrategy: 'xpath' }, 'open White Papers & Ebooks')

            browser.waitForElementVisible('body')

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            // DirectAccess >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')

            //  White Papers & Ebooks
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'White Papers & Ebooks')

            // back
            browser.url('https://www.jlg.com/en/direct-access');



            // open CONTENT TYPE
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'open CONTENT TYPE')
           
            // icon 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[6]', locateStrategy: 'xpath'}, 'ICON is visible')

            // Videos & Podcasts
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[6]', locateStrategy: 'xpath'}, 'Videos & Podcasts')

            // open Videos & Podcasts
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[6]', locateStrategy: 'xpath' }, 'open Videos & Podcasts')

            browser.waitForElementVisible('body')

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            // DirectAccess >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')

            //  Videos & Podcasts
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Videos & Podcasts')

            // back
            browser.url('https://www.jlg.com/en/direct-access');



            // open CONTENT TYPE
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'open CONTENT TYPE')

            // icon 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[7]', locateStrategy: 'xpath'}, 'ICON is visible')

            // Articles
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[7]', locateStrategy: 'xpath'}, 'Articles')

            // open Articles
            browser.click({ selector: '/html/body/div[1]/form/div[10]/div[2]/div/div[2]/div/div[2]/a[7]', locateStrategy: 'xpath' }, 'open Articles')

            browser.waitForElementVisible('body')

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            // DirectAccess >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'DirectAccess >>')

            //  Articles
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Articles')

            // back
            browser.url('https://www.jlg.com/en/direct-access');



            // VIEW MORE
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[2]/p/a/span', locateStrategy: 'xpath' }, 'VIEW MORE')

            // YOUTUBE VIDEO
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[3]/a/video', locateStrategy: 'xpath' }, 'YOUTUBE VIDEO is visible')

            // Innovations
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[3]/a/div[1]/div/div[1]', locateStrategy: 'xpath' }, 'Innovations')

            //  HEAR CUSTOMERS SHARE THEIR EXPERIENCES WITH JLG'S  SELF-LEVELING CHASSIS TECHNOLOGY 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[3]/a/div[1]/div/h3/span', locateStrategy: 'xpath' }, "HEAR CUSTOMERS SHARE THEIR EXPERIENCES WITH JLG'S  SELF-LEVELING CHASSIS TECHNOLOGY")

            // VIDEO ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[3]/a/div[1]/div/div[2]', locateStrategy: 'xpath' }, 'video icon is visible')

            // Videos & Podcasts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[3]/a/div[1]/div/div[2]', locateStrategy: 'xpath' }, 'Videos & Podcasts -')


            // SAFETY
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/h2', locateStrategy: 'xpath' }, 'SAFETY')

            // VIEW ALL POSTS
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/a', locateStrategy: 'xpath' }, 'VIEW ALL POSTS')



            // IMG
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[1]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Safety
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[1]/div[1]/div', locateStrategy: 'xpath' }, 'Safety')

            //  PICKING THE RIGHT COMPACT CRAWLER BOOM TO SUPPORT STEEL ERECTION 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[1]/div[1]/h3/span', locateStrategy: 'xpath' }, "PICKING THE RIGHT COMPACT CRAWLER BOOM TO SUPPORT STEEL ERECTION")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[1]/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[1]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts -')




            // IMG
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[2]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Safety
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[2]/div[1]/div', locateStrategy: 'xpath' }, 'Safety')

            //  EBOOK: HOW TO REDUCE THE HIDDEN COSTS OF LADDERS 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[2]/div[1]/h3/span', locateStrategy: 'xpath' }, "EBOOK: HOW TO REDUCE THE HIDDEN COSTS OF LADDERS")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[2]/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // White Papers & Ebooks -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[2]/div[2]', locateStrategy: 'xpath' }, 'White Papers & Ebooks -')



            // IMG
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[3]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Safety
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[3]/div[1]/div', locateStrategy: 'xpath' }, 'Safety')

            //  6 HOW-TO TIPS FOR TELEHANDLER OPERATORS 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[3]/div[1]/h3/span', locateStrategy: 'xpath' }, "6 HOW-TO TIPS FOR TELEHANDLER OPERATORS")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[3]/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[3]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts -')



            // IMG
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[4]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Safety
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[4]/div[1]/div', locateStrategy: 'xpath' }, 'Safety')

            //  PRIORITIZING MENTAL HEALTH IN CONSTRUCTION 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[4]/div[1]/h3/span', locateStrategy: 'xpath' }, "PRIORITIZING MENTAL HEALTH IN CONSTRUCTION")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[4]/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[1]/div/div/a[4]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts -')


            // EQUIPMENT
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/h2', locateStrategy: 'xpath' }, 'EQUIPMENT')

            // VIEW ALL POSTS
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/a', locateStrategy: 'xpath' }, 'VIEW ALL POSTS')


            //---------------------1
            // IMG1
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[1]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[1]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  MARKET UPDATE: DEMAND INCREASING FOR ROTATING TELEHANDLERS 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[1]/div[1]/h3/span', locateStrategy: 'xpath' }, "MARKET UPDATE: DEMAND INCREASING FOR ROTATING TELEHANDLERS")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[1]/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[1]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts -')


            //---------------------2
            // IMG2
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[2]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[2]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  STARRING ROLE: JLG EQUIPMENT ELEVATES FILMMAKING TO NEW HEIGHTS 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[2]/div[1]/h3/span', locateStrategy: 'xpath' }, "STARRING ROLE: JLG EQUIPMENT ELEVATES FILMMAKING TO NEW HEIGHTS")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[2]/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[2]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts -')


            //---------------------3
            // IMG3
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[3]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[3]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  UNLOCKING EFFICIENCY: 5 TIPS TO IMPROVE CONCRETE OPERATIONS WITH A TELEHANDLER 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[3]/div[1]/h3/span', locateStrategy: 'xpath' }, "UNLOCKING EFFICIENCY: 5 TIPS TO IMPROVE CONCRETE OPERATIONS WITH A TELEHANDLER")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[3]/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[3]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts -')


            //---------------------4 
            // IMG4
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[4]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[4]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  PICKING THE RIGHT COMPACT CRAWLER BOOM TO SUPPORT STEEL ERECTION 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[4]/div[1]/h3/span', locateStrategy: 'xpath' }, "PICKING THE RIGHT COMPACT CRAWLER BOOM TO SUPPORT STEEL ERECTION")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[4]/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/div[2]/div/div/a[4]/div[2]', locateStrategy: 'xpath' }, 'Blog Posts -')



            // VIEW ALL CATEGORIES
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[5]/p/a', locateStrategy: 'xpath' }, 'VIEW ALL CATEGORIES')



            //---------------------1
            // IMG1
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[1]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[1]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  MARKET OUTLOOK: A LOOK AT PUSH-AROUND MEWPS 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[1]/div[1]/h3/span', locateStrategy: 'xpath' }, "MARKET OUTLOOK: A LOOK AT PUSH-AROUND MEWPS")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[1]/div/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // Blog Posts -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[1]/div/div[2]', locateStrategy: 'xpath' }, 'Blog Posts -')



            //---------------------2
            // IMG1
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[2]', locateStrategy: 'xpath' }, 'IMG is visible')

            // Equipment
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[2]/div[1]/div', locateStrategy: 'xpath' }, 'Equipment')

            //  WHITEPAPER: 5 NEW GLOBAL MEGATRENDS IMPACTING THE 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[2]/div[1]/h3/span', locateStrategy: 'xpath' }, "WHITEPAPER: 5 NEW GLOBAL MEGATRENDS IMPACTING THE")

            // ICON
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[2]/div/div[2]/i', locateStrategy: 'xpath' }, 'ICON is visible')

            // White Papers & Ebooks -
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[6]/a[2]/div/div[2]', locateStrategy: 'xpath' }, 'White Papers & Ebooks -')


            // Don't miss important industry information. Subscribe now to receive email updates with newly posted content.
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[1]', locateStrategy: 'xpath' }, "Don't miss important industry information. Subscribe now to receive email updates with newly posted content.")


            // FIRST NAME
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[1]/label', locateStrategy: 'xpath' }, 'FIRST NAME')

            // FIRST NAME INPUT FIELD
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[1]/input', locateStrategy: 'xpath' }, 'FIRST NAME INPUT FIELD is visible')

            // LAST NAME
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[2]/label', locateStrategy: 'xpath' }, 'LAST NAME')

            // LAST NAME INPUT FIELD
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[2]/input', locateStrategy: 'xpath' }, 'LAST NAME INPUT FIELD is visible')

            // COMPANY NAME
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[3]/label', locateStrategy: 'xpath' }, 'COMPANY NAME')

            // COMPANY NAME INPUT FIELD
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[3]/input', locateStrategy: 'xpath' }, 'COMPANY NAME INPUT FIELD is visible')

            // EMAIL ADDRESS
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[4]/label', locateStrategy: 'xpath' }, 'EMAIL ADDRESS')

            // EMAIL ADDRESS INPUT FIELD
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[4]/input', locateStrategy: 'xpath' }, 'EMAIL ADDRESS INPUT FIELD is visible')

            // check box
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[5]/label/input', locateStrategy: 'xpath' }, 'check box is visible')

            // I CONSENT TO JLG COLLECTING AND PROCESSING MY DETAILS IN ACCORDANCE WITH ITS PRIVACY POLICY. 
            browser.waitForElementVisible({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/div[5]/label', locateStrategy: 'xpath' }, 'I CONSENT TO JLG COLLECTING AND PROCESSING MY DETAILS IN ACCORDANCE WITH ITS PRIVACY POLICY.')

            // SUBMIT
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/button', locateStrategy: 'xpath' }, 'SUBMIT')

            // This form collects your name, contact number and email address so that our teams can communicate with you and respond to your query. Please read our Privacy Policy to see how we protect and use your submitted data.
            browser.assert.containsText({ selector: '/html/body/div[1]/form/div[10]/div[7]/div/div/div[2]/p', locateStrategy: 'xpath' }, 'This form collects your name, contact number and email address so that our teams can communicate with you and respond to your query. Please read our Privacy Policy to see how we protect and use your submitted data.')


















            // switch back to the first tab
            //  browser.switchWindow(originalHandle[0]);
        });







        // switching into different window tab




        // End the browser session
    }
};  