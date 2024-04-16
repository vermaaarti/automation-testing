

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


    'Footer Investors Test': function (browser) {

        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        browser.click({
            selector: 'a[href="https://www.investors.oshkoshcorp.com/"]'
        }, 'open Investors');

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

            // OUR WEBSITE USES COOKIES
            browser.assert.containsText({ selector: '/html/body/div/div[4]/div/div/div/div/div/div[1]/h3/strong/span', locateStrategy: 'xpath' }, 'OUR WEBSITE USES COOKIES')

            // Oshkosh Corporation uses necessary cookies to make sure our website works.Oshkosh Corporation would also like to set optional cookies to provide you the best experience.For more detailed information about the cookies Oshkosh Corporation uses, see our Privacy Policy.
            browser.waitForElementVisible({ selector: '/html/body/div/div[4]/div/div/div/div/div/div[1]/h3/strong/span', locateStrategy: 'xpath' }, 'Oshkosh Corporation uses necessary cookies to make sure our website works.Oshkosh Corporation would also like to set optional cookies to provide you the best experience.For more detailed information about the cookies Oshkosh Corporation uses, see our Privacy Policy.')

            // I accept
            browser.waitForElementVisible({ selector: '/html/body/div/div[4]/div/div/div/div/div/div[2]/div/div[1]', locateStrategy: 'xpath' }, 'I accept')

            // right arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/div[4]/div/div/div/div/div/div[2]/div/div[1]', locateStrategy: 'xpath' }, 'right arrow is visible')

            // Reject all
            browser.waitForElementVisible({ selector: '/html/body/div/div[4]/div/div/div/div/div/div[2]/div/div[2]', locateStrategy: 'xpath' }, 'Reject all')

            // right arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/div[4]/div/div/div/div/div/div[2]/div/div[1]', locateStrategy: 'xpath' }, 'right arrow is visible')

            //click on I accept
            browser.click({ selector: '/html/body/div/div[4]/div/div/div/div/div/div[2]/div/div[1]', locateStrategy: 'xpath' }, 'accept cookie')


            // OSHKOSH logo is visible
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/div[1]/a', locateStrategy: 'xpath' }, 'OSHKOSH logo is visible')

            // Our brands & innovation
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/a', locateStrategy: 'xpath' }, 'Our brands & innovation')

            // open Our brands & innovation
            //  browser.moveToElement({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/a', locateStrategy: 'xpath' }, 5, 5, 'Moving to element for dropdown...');
            browser.perform(function () {
                browser.moveToElement({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/a', locateStrategy: 'xpath' }, 5, 5);
            });

            // Overview
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Overview')

            // Electric Vehicles
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/ul/li[2]/a', locateStrategy: 'xpath' }, 'Electric Vehicles')

            // Intelligent Products
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/ul/li[3]/a', locateStrategy: 'xpath' }, 'Intelligent Products')

            // Autonomy & Active Safety
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/ul/li[4]/a', locateStrategy: 'xpath' }, 'Autonomy & Active Safety')

            // Advanced Analytics
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/ul/li[5]/a', locateStrategy: 'xpath' }, 'Advanced Analytics')

            // Digital Manufacturing
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/ul/li[6]/a', locateStrategy: 'xpath' }, 'Digital Manufacturing')

            // Mobility
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[2]/ul/li[7]/a', locateStrategy: 'xpath' }, 'Mobility')

            // close popup
            browser.click('body');



            // Our impact
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[3]/a', locateStrategy: 'xpath' }, 'Our impact')

            // open Our impact
            // browser.moveToElement({ selector: '/html/body/div/header/div/nav/div/ul/li[3]/a', locateStrategy: 'xpath' }, 8, 7);
            browser.perform(function () {
                browser.moveToElement({ selector: '/html/body/div/header/div/nav/div/ul/li[3]/a', locateStrategy: 'xpath' }, 10, 10);
            });

            // Overview
            /*    browser.waitForElementVisible({ selector: 'ul[role="menu"]>li:nth-of-type(3)>div>ul>li:nth-of-type(1)>a' }, 'Overview')
    
                // Philanthropy
                browser.waitForElementVisible({ selector: '/html/body/form/div/header/div[1]/ul/li[3]/div/ul/li[2]/a', locateStrategy: 'xpath' }, 'Philanthropy')
    
                // Volunteering
                browser.waitForElementVisible({ selector: '/html/body/form/div/header/div[1]/ul/li[3]/div/ul/li[3]/a', locateStrategy: 'xpath' }, 'Volunteering')
    
                // Environment
                browser.waitForElementVisible({ selector: '/html/body/form/div/header/div[1]/ul/li[3]/div/ul/li[4]/a', locateStrategy: 'xpath' }, 'Environment')
    
                // Sustainability
                browser.waitForElementVisible({ selector: '/html/body/form/div/header/div[1]/ul/li[3]/div/ul/li[5]/a', locateStrategy: 'xpath' }, 'Sustainability')
    
                // close popup
                browser.click('body');
    */


            // Our story
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[4]/a', locateStrategy: 'xpath' }, 'Our story')

            // open our story
            browser.perform(function () {
                browser.moveToElement({ selector: '/html/body/div/header/div/nav/div/ul/li[4]/a', locateStrategy: 'xpath' }, 15, 15);
            });

            // Overview
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[4]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Overview')

            // Ethics
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[4]/ul/li[2]/a', locateStrategy: 'xpath' }, 'Ethics')

            // Leadership
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[4]/ul/li[3]/a', locateStrategy: 'xpath' }, 'Leadership')

            // Diversity
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[4]/ul/li[4]/a', locateStrategy: 'xpath' }, 'Diversity')

            // History
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[4]/ul/li[5]/a', locateStrategy: 'xpath' }, 'History')

            // close popup
            //  browser.click('body');


            // Careers
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[5]/a', locateStrategy: 'xpath' }, 'Careers')

            // open Careers
            browser.perform(function () {
                browser.moveToElement({ selector: '/html/body/div/header/div/nav/div/ul/li[5]/a', locateStrategy: 'xpath' }, 20, 20);
            });

            // Overview
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[5]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Overview')

            // Current openings
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[5]/ul/li[2]/a', locateStrategy: 'xpath' }, 'Current openings')

            // Students
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[5]/ul/li[3]/a', locateStrategy: 'xpath' }, 'Students')

            // Professionals
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[5]/ul/li[4]/a', locateStrategy: 'xpath' }, 'Professionals')

            // Military
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[5]/ul/li[5]/a', locateStrategy: 'xpath' }, 'Military')

            // close popup
            browser.click('body');


            // News
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[6]/a', locateStrategy: 'xpath' }, 'News')

            // Investors
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/a', locateStrategy: 'xpath' }, 'Investors')

            // Contact us
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[8]/a', locateStrategy: 'xpath' }, 'Contact us')

            // search icon is visible
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/div[3]/span', locateStrategy: 'xpath' }, 'search icon is visible')




            // Overview
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Overview')

            // News
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'News')

            // Events and presentations
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Events and presentations')

            // Financials
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Financials')

            // open Financials
            /*   browser.perform(function () {
                  browser.moveToElement({ selector: '/html/body/div/header/div/nav/div/ul/li[5]/a', locateStrategy: 'xpath' }, 10, 40);
              });
  
              // Annual and quarterly results
              browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[4]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Annual and quarterly results')
  
              // SEC filings
              browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[4]/ul/li[2]/a', locateStrategy: 'xpath' }, 'SEC filings')
  
               // close popup
               browser.click('body'); */


            // Stock info
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Stock info')

            // Governance
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Governance')

            // Resources
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Resources')

            // open Resources
            browser.perform(function () {
                browser.moveToElement({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 40, 40);
            });

            // FAQs
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'FAQs')

            // Oshkosh At a Glance
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[7]/ul/li[2]/a', locateStrategy: 'xpath' }, 'Oshkosh At a Glance')

            // Company tear sheet
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[7]/ul/li[3]/a', locateStrategy: 'xpath' }, 'Company tear sheet')

            // ESG
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[7]/ul/li[4]/a', locateStrategy: 'xpath' }, 'ESG')

            // Email alerts
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[7]/ul/li[5]/a', locateStrategy: 'xpath' }, 'Email alerts')

            // Revenue recast for Vocational segment
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[7]/ul/li[6]/a', locateStrategy: 'xpath' }, 'Revenue recast for Vocational segment')

            // close popup
            browser.click('body');


            // Contact us
            browser.waitForElementVisible({ selector: '/html/body/div/header/div/nav/div/ul/li[7]/ul/li[1]/a', locateStrategy: 'xpath' }, 'Contact us')


            // Investor Relations img is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main', locateStrategy: 'xpath' }, 'Investor Relations img is visible')

            // Oshkosh Corporation is an industrial technology company and manufacturer of purpose-built vehicles and equipment for the access, defense, fire & emergency, refuse collection, concrete placement and aviation ground support markets.
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[1]/div/div/span/span', locateStrategy: 'xpath' }, 'Oshkosh Corporation is an industrial technology company and manufacturer of purpose-built vehicles and equipment for the access, defense, fire & emergency, refuse collection, concrete placement and aviation ground support markets.')

            // More
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[1]/a', locateStrategy: 'xpath' }, 'More')

            // open More
            browser.click({ selector: '/html/body/div/main/div[2]/div/div/div[1]/a', locateStrategy: 'xpath' }, 'open More')

            // Oshkosh maintains a strong track record of delivering shareholder value through thoughtful management, smart supply chain, materials integration and a commitment to cross-portfolio innovation. Our market-leading brands develop a wide range of products to serve a diverse group of industries, allowing us to leverage innovations and efficiencies across the enterprise.
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[1]/div/div/div/span/span', locateStrategy: 'xpath' }, 'Oshkosh maintains a strong track record of delivering shareholder value through thoughtful management, smart supply chain, materials integration and a commitment to cross-portfolio innovation. Our market-leading brands develop a wide range of products to serve a diverse group of industries, allowing us to leverage innovations and efficiencies across the enterprise.')

            // Less
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[1]/a', locateStrategy: 'xpath' }, 'Less')

            // NYSE : OSK
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[2]/div[1]/div/div/span[1]', locateStrategy: 'xpath' }, 'NYSE : OSK')

            // Stock information
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[2]/div[2]/div/a[1]', locateStrategy: 'xpath' }, 'Stock information')

            // Right Arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[2]/div[2]/div/a[1]', locateStrategy: 'xpath' }, 'Right Arrow is visible')

            // Oshkosh At A Glance
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[2]/div[2]/div/a[2]', locateStrategy: 'xpath' }, 'Oshkosh At A Glance')

            // Right Arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[2]/div/div/div[2]/div[2]/div/a[2]', locateStrategy: 'xpath' }, 'Right Arrow is visible')



            // Our evolved strategy
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[3]/div/h2', locateStrategy: 'xpath' }, 'Our evolved strategy')

            // INNOVATE. SERVE. ADVANCE.
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[3]/div/div/div[1]/h4', locateStrategy: 'xpath' }, 'INNOVATE. SERVE. ADVANCE.')

            // Our strategy leads with innovation. We have always been a great innovation company. Leveraging the latest in technology for today and tomorrow across the different markets we serve differentiates us and helps us remain market leaders and stay ahead of the competition. Serving and supporting equipment throughout its lifecycle helps improve margins and drive stronger recurring revenues. Advancing our company into new markets and categories will support continued growth for the company.
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[3]/div/div/div[1]/article/p', locateStrategy: 'xpath' }, 'Our strategy leads with innovation. We have always been a great innovation company. Leveraging the latest in technology for today and tomorrow across the different markets we serve differentiates us and helps us remain market leaders and stay ahead of the competition. Serving and supporting equipment throughout its lifecycle helps improve margins and drive stronger recurring revenues. Advancing our company into new markets and categories will support continued growth for the company.')

            //  Right Arrow is visible
            browser.waitForElementVisible({ selector: ' /html/body/div/main/div[3]/div/div/div[1]/a', locateStrategy: 'xpath' }, ' Right Arrow is visible')

            //  Learn more about our strategy
            browser.waitForElementVisible({ selector: ' /html/body/div/main/div[3]/div/div/div[1]/a', locateStrategy: 'xpath' }, ' Learn more about our strategy')

            // youtube video is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[3]/div/div/div[2]/div/div', locateStrategy: 'xpath' }, 'youtube video is visible')

            // Our President and CEO, John Pfeifer, shares our strategy
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[3]/div/div/div[2]/div/p', locateStrategy: 'xpath' }, 'Our President and CEO, John Pfeifer, shares our strategy')


            // background image is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[4]/div', locateStrategy: 'xpath' }, 'background image is visible')

            // Latest news
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[4]/div/div/h2', locateStrategy: 'xpath' }, 'Latest news')

            // News
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[4]/div/div/div[1]/div[1]/span', locateStrategy: 'xpath' }, 'News')

            // View all news
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[4]/div/div/div[4]/div/a', locateStrategy: 'xpath' }, 'View all news')

            // Right Arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[4]/div/div/div[4]/div/a', locateStrategy: 'xpath' }, 'Right Arrow is visible')



            // Events and presentations
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[5]/div/div/div/h2', locateStrategy: 'xpath' }, 'Events and presentations')

            // J.P. Morgan Industrials Conference – Fireside Chat
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[5]/div/div/div/div[1]/div/div/div/h2', locateStrategy: 'xpath' }, 'J.P. Morgan Industrials Conference – Fireside Chat')

            // Right Arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[5]/div/div/div/div[1]/div/div/div/div[2]/div/a', locateStrategy: 'xpath' }, 'Right Arrow is visible')

            // Webcast
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[5]/div/div/div/div[1]/div/div/div/div[2]/div/a', locateStrategy: 'xpath' }, 'Webcast')

            // View all events
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[5]/div/div/div/div[2]/div/a', locateStrategy: 'xpath' }, 'View all events')

            // Right Arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[5]/div/div/div/div[2]/div/a', locateStrategy: 'xpath' }, 'Right Arrow is visible')



            // Fiscal Q4 2023 results
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[6]/div/div/div/h2', locateStrategy: 'xpath' }, 'Fiscal Q4 2023 results')

            // Right Arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[6]/div/div/div/div/div[1]/a', locateStrategy: 'xpath' }, 'Right Arrow is visible')

            // WEBCAST
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[6]/div/div/div/div/div[1]/a', locateStrategy: 'xpath' }, 'WEBCAST')

            // Right Arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[6]/div/div/div/div/div[2]/a', locateStrategy: 'xpath' }, 'Right Arrow is visible')

            // PRESENTATION
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[6]/div/div/div/div/div[2]/a', locateStrategy: 'xpath' }, 'PRESENTATION')

            // Right Arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[6]/div/div/div/div/div[3]/a', locateStrategy: 'xpath' }, 'Right Arrow is visible')

            // EARNINGS RELEASE
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[6]/div/div/div/div/div[3]/a', locateStrategy: 'xpath' }, 'EARNINGS RELEASE')



            // 2023 Annual Report
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[7]/div/div/div[1]/h2', locateStrategy: 'xpath' }, '2023 Annual Report')

            // We're dedicated to growing our leadership position in the markets we serve. Engineering groundbreaking innovations is what we do. Our innovations are designed with our end users in mind and are built to move industries forward. Our 2023 Annual Report provides a snapshot of our year.
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[7]/div/div/div[1]/div/article', locateStrategy: 'xpath' }, "We're dedicated to growing our leadership position in the markets we serve. Engineering groundbreaking innovations is what we do. Our innovations are designed with our end users in mind and are built to move industries forward. Our 2023 Annual Report provides a snapshot of our year.")

            // img is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[7]/div/div/div[2]/div/img', locateStrategy: 'xpath' }, 'img is visible')

            // Right Arrorw is visible
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[7]/div/div/div[2]/div/a/div[2]', locateStrategy: 'xpath' }, 'Right Arrorw is visible')

            // 2023 Annual Report
            browser.waitForElementVisible({ selector: '/html/body/div/main/div[7]/div/div/div[2]/div/a/div[2]', locateStrategy: 'xpath' }, '2023 Annual Report')



            // INVESTOR CONTACT
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[1]/h4', locateStrategy: 'xpath' }, 'INVESTOR CONTACT')

            // INVESTOR ALERTS
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/h4', locateStrategy: 'xpath' }, 'INVESTOR ALERTS')

            // Your email
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[1]/input', locateStrategy: 'xpath' }, 'Your email')

            // Sign up
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[1]/button', locateStrategy: 'xpath' }, 'Sign up')

            // right arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[1]/button', locateStrategy: 'xpath' }, 'right arrow is visible')

            // check box is visible
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[2]/div/div/label[1]', locateStrategy: 'xpath' }, 'check box is visible')

            // Press Releases
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[2]/div/div/label[1]', locateStrategy: 'xpath' }, 'Press Releases')

            // check box is visible
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[2]/div/div/label[2]', locateStrategy: 'xpath' }, 'check box is visible')

            // Events
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[2]/div/div/label[2]', locateStrategy: 'xpath' }, 'Events')

            // check box is visible
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[2]/div/div/label[3]', locateStrategy: 'xpath' }, 'check box is visible')

            // Presentations
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[2]/div/div/label[3]', locateStrategy: 'xpath' }, 'Presentations')

            // check box is visible
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[2]/div/div/label[4]', locateStrategy: 'xpath' }, 'check box is visible')

            // SEC Filings
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/form/div[2]/div/div/label[4]', locateStrategy: 'xpath' }, 'SEC Filings')

            // right arrow is visible
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/a', locateStrategy: 'xpath' }, 'right arrow is visible')

            // Unsubscribe to Email Alerts
            browser.waitForElementVisible({ selector: '/html/body/div/div[1]/div/div/div/div[2]/a', locateStrategy: 'xpath' }, 'Unsubscribe to Email Alerts')




            // VISIT OUR BRANDS
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/h5', locateStrategy: 'xpath' }, 'VISIT OUR BRANDS')

            // JLG
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[1]/a', locateStrategy: 'xpath' }, 'JLG')

            // Frontline
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[2]/a', locateStrategy: 'xpath' }, 'Frontline')

            // Jerr-Dan
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[3]/a', locateStrategy: 'xpath' }, 'Jerr-Dan')

            // Oshkosh Airport Products
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[4]/a', locateStrategy: 'xpath' }, 'Oshkosh Airport Products')

            // Hinowa
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[5]/a', locateStrategy: 'xpath' }, 'Hinowa')

            // MAXIMETAL
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[6]/a', locateStrategy: 'xpath' }, 'MAXIMETAL')

            // Oshkosh Defense
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[7]/a', locateStrategy: 'xpath' }, 'Oshkosh Defense')

            // McNeilus
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[8]/a', locateStrategy: 'xpath' }, 'McNeilus')

            // Oshkosh AeroTech
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[9]/a', locateStrategy: 'xpath' }, 'Oshkosh AeroTech')

            // Oshkosh S-Series
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[10]/a', locateStrategy: 'xpath' }, 'Oshkosh S-Series')

            // Pratt Miller
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[11]/a', locateStrategy: 'xpath' }, 'Pratt Miller')

            // Pierce
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[12]/a', locateStrategy: 'xpath' }, 'Pierce')

            // IMT
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[1]/div/ul/li[13]/a', locateStrategy: 'xpath' }, 'IMT')



            // BROWSE OUR OTHER SITES
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[2]/h5', locateStrategy: 'xpath' }, 'BROWSE OUR OTHER SITES')

            // Suppliers
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[2]/div/ul/li[1]/a', locateStrategy: 'xpath' }, 'Suppliers')

            // Investors
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[2]/div/ul/li[2]/a', locateStrategy: 'xpath' }, 'Investors')

            // Search for jobs
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[2]/div/ul/li[3]/a', locateStrategy: 'xpath' }, 'Search for jobs')

            // Transparency in Coverage
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[2]/div/ul/li[4]/a', locateStrategy: 'xpath' }, 'Transparency in Coverage')



            // FOLLOW US ON SOCIAL MEDIA
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[3]/h5', locateStrategy: 'xpath' }, 'FOLLOW US ON SOCIAL MEDIA')

            // LinkedIn
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[3]/div/ul/li[1]/a', locateStrategy: 'xpath' }, 'LinkedIn')

            // Instagram
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[3]/div/ul/li[1]/a', locateStrategy: 'xpath' }, 'Instagram')

            // Facebook
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[3]/div/ul/li[1]/a', locateStrategy: 'xpath' }, 'Facebook')

            // Glassdoor
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[3]/div/ul/li[1]/a', locateStrategy: 'xpath' }, 'Glassdoor')

            // Youtube
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[3]/div/ul/li[1]/a', locateStrategy: 'xpath' }, 'Youtube')

            // Twitter
            browser.waitForElementVisible({ selector: '/html/body/div/div[2]/div/div/div[3]/div/ul/li[1]/a', locateStrategy: 'xpath' }, 'Twitter')


            // © 2023 Oshkosh Corporation
            browser.waitForElementVisible({ selector: '/html/body/div/div[3]/div/div/div/span', locateStrategy: 'xpath' }, '© 2023 Oshkosh Corporation')

            // Privacy Policy
            browser.waitForElementVisible({ selector: '/html/body/div/div[3]/div/div/div/span/span/ul/li[1]/a', locateStrategy: 'xpath' }, 'Privacy Policy')

            // Data Systems Agreement
            browser.waitForElementVisible({ selector: '/html/body/div/div[3]/div/div/div/span/span/ul/li[2]/a', locateStrategy: 'xpath' }, 'Data Systems Agreement')




            // switch back to the first tab
            //  browser.switchWindow(originalHandle[0]);
        });


        // End the browser session
    }
};  