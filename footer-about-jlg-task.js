
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


    'Footer About JLG Test': function (browser) {

      
          // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        browser.click({
            selector: 'a[href="https://www.jlg.com/about-jlg"]'
        }, 'open About JLG');


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
          //  browser.pause(6000)

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a' }, 'Home >>')

            //  About JLG
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'About JLG')
            

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
            
            
            //  img
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[1]/div', locateStrategy: 'xpath' }, 'img is visible')
             
           // ABOUT JLG INDUSTRIES
           browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/h1', locateStrategy: 'xpath'}, 'ABOUT JLG INDUSTRIES')
            
           // JLG Industries, Inc. has been earning customer confidence and trust through innovation since 1969. Our customers are our greatest priority, and we remain steadfast in our commitment to understanding their challenges.
           browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/div/p[1]', locateStrategy: 'xpath'}, 'JLG Industries, Inc. has been earning customer confidence and trust through innovation since 1969. Our customers are our greatest priority, and we remain steadfast in our commitment to understanding their challenges.')
           
            // As the world’s leading designer and manufacturer of access equipment, JLG products and personnel can be found all over the world, going above and beyond to support customers. We deliver the powerful, versatile equipment they need, along with unsurpassed training and service, because we have a responsibility to be more than a manufacturing company. We’re a partner in our customers’ success, reaching out worldwide to enable performance, boost productivity, ensure uptime and support forward progress.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/div/p[2]', locateStrategy: 'xpath'}, 'As the world’s leading designer and manufacturer of access equipment, JLG products and personnel can be found all over the world, going above and beyond to support customers. We deliver the powerful, versatile equipment they need, along with unsurpassed training and service, because we have a responsibility to be more than a manufacturing company. We’re a partner in our customers’ success, reaching out worldwide to enable performance, boost productivity, ensure uptime and support forward progress.')
            
             // JLG is an Oshkosh Corporation Company [NYSE: OSK].
           browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/div/p[3]', locateStrategy: 'xpath'}, 'JLG is an Oshkosh Corporation Company [NYSE: OSK].')
            
            // Our Mission
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/h4', locateStrategy: 'xpath'}, 'Our Mission')
            
            //  Through leadership, teamwork and dedication, we provide world-class excellence in quality, service and delivery to our distributors and customers, while delivering opportunities and enrichment for our employees and superior performance for our shareholders.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/div/p[2]', locateStrategy: 'xpath'}, 'Through leadership, teamwork and dedication, we provide world-class excellence in quality, service and delivery to our distributors and customers, while delivering opportunities and enrichment for our employees and superior performance for our shareholders.')
           
            // Learn more about our guiding principles when you download our Code of Ethics and Conduct: The Oshkosh Way.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/div/p[3]', locateStrategy: 'xpath'}, 'Learn more about our guiding principles when you download our Code of Ethics and Conduct: The Oshkosh Way.')
            
            // Our Story
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/h4', locateStrategy: 'xpath'}, 'Our Story')
           
            // Our story begins when our company founder, John L. Grove, left a successful crane manufacturing company that he co-founded. To enjoy some time off, he and his wife traveled across the U.S., visiting major landmarks, including the Hoover Dam. It was there that Grove learned of a pressing need for a machine that could lift workers into the air safely and efficiently.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath'}, 'Our story begins when our company founder, John L. Grove, left a successful crane manufacturing company that he co-founded. To enjoy some time off, he and his wife traveled across the U.S., visiting major landmarks, including the Hoover Dam. It was there that Grove learned of a pressing need for a machine that could lift workers into the air safely and efficiently.')
           
            // When he returned from his trip, Grove rallied a small group of people around his big idea: there had to be a safer way to work at height. So, keeping workers’ needs at the top of his mind, he set out to resolve this growing concern in the construction industry. With a crew of just 20 workers at a small metal fabrication shop in McConnellsburg, Pennsylvania, he conceptualized, built and sold the first JLG aerial work platform in 1970, which started our company and pioneered the access industry.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/div/p[3]', locateStrategy: 'xpath'}, 'When he returned from his trip, Grove rallied a small group of people around his big idea: there had to be a safer way to work at height. So, keeping workers’ needs at the top of his mind, he set out to resolve this growing concern in the construction industry. With a crew of just 20 workers at a small metal fabrication shop in McConnellsburg, Pennsylvania, he conceptualized, built and sold the first JLG aerial work platform in 1970, which started our company and pioneered the access industry.')
           
            // Today, that pioneering spirit still drives us to redefine what it means to be productive and safe at height. Through customer-inspired innovation and the exploration of new technologies, we’re advancing our industry on job sites around the world. And we do it all with people in mind, creating solutions that protect, elevate and empower our customers to do their jobs.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/div/p[4]', locateStrategy: 'xpath'}, 'Today, that pioneering spirit still drives us to redefine what it means to be productive and safe at height. Through customer-inspired innovation and the exploration of new technologies, we’re advancing our industry on job sites around the world. And we do it all with people in mind, creating solutions that protect, elevate and empower our customers to do their jobs.')
           
            // When Grove passed away in 2003, he left behind a legacy—one that’s centered around a constant desire to keep people safe. This principle is still central to our company as we continue to expand into global markets, develop cutting-edge products and bring a fresh perspective to the worksite of the future.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/div/p[5]', locateStrategy: 'xpath'}, 'When Grove passed away in 2003, he left behind a legacy—one that’s centered around a constant desire to keep people safe. This principle is still central to our company as we continue to expand into global markets, develop cutting-edge products and bring a fresh perspective to the worksite of the future.')
           
            // Learn more about the progress we’ve made in over half a century of elevating access.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/div/p[6]', locateStrategy: 'xpath'}, 'Learn more about the progress we’ve made in over half a century of elevating access.')
           
            // VIEW TIMELINE
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/div/p[7]', locateStrategy: 'xpath'}, 'VIEW TIMELINE')
           
            // Our Sustainability Efforts
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/h4', locateStrategy: 'xpath'}, 'Our Sustainability Efforts')
           
            // We have long been pioneers in producing environmentally friendly lift and access equipment. We also continually seek out and embrace ways we can be more sustainable in every aspect of our operation. Sustainability guides our responsibility to the environment and to our customers, who demand green solutions.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[2]', locateStrategy: 'xpath'}, 'We have long been pioneers in producing environmentally friendly lift and access equipment. We also continually seek out and embrace ways we can be more sustainable in every aspect of our operation. Sustainability guides our responsibility to the environment and to our customers, who demand green solutions.')
           
            // At our parent company, Oshkosh Corporation, sustainability drives responsible manufacturing, careful resource management and environmentally sound products and services. As an Oshkosh company, we continue to lead the way in making innovative products that meet our customers’ needs for energy-efficient solutions, while reducing environmental impacts. We’ve invested in team member education by building a state-of-the-art Operational Excellence Training Center. This Center focuses on ensuring our team members have the skills required to be leaders in the industry.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[3]', locateStrategy: 'xpath'}, 'At our parent company, Oshkosh Corporation, sustainability drives responsible manufacturing, careful resource management and environmentally sound products and services. As an Oshkosh company, we continue to lead the way in making innovative products that meet our customers’ needs for energy-efficient solutions, while reducing environmental impacts. We’ve invested in team member education by building a state-of-the-art Operational Excellence Training Center. This Center focuses on ensuring our team members have the skills required to be leaders in the industry.')
           
            // Protecting the environment is a core value at JLG. It’s our goal to reduce waste and emissions, minimize adverse environmental impacts, promote resource conservation and improve energy performance throughout our company. All our team members share the responsibility for energy reduction, sustainability and environmental performance. We strive to develop and maintain Environmental and Energy Management Systems for our manufacturing facilities both domestically and internationally. JLG has achieved ISO 14001 certification at the Tianjin, China, facility.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[4]', locateStrategy: 'xpath'}, 'Protecting the environment is a core value at JLG. It’s our goal to reduce waste and emissions, minimize adverse environmental impacts, promote resource conservation and improve energy performance throughout our company. All our team members share the responsibility for energy reduction, sustainability and environmental performance. We strive to develop and maintain Environmental and Energy Management Systems for our manufacturing facilities both domestically and internationally. JLG has achieved ISO 14001 certification at the Tianjin, China, facility.')
           
            // Domestic Oshkosh Corporation manufacturing facilities are members of the Department of Energy’s Better Plants Program, pledging to reduce energy consumption by 25%.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[5]', locateStrategy: 'xpath'}, 'Domestic Oshkosh Corporation manufacturing facilities are members of the Department of Energy’s Better Plants Program, pledging to reduce energy consumption by 25%.')
           
            // View the Oshkosh sustainability report to learn more about our sustainability efforts.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[6]', locateStrategy: 'xpath'}, 'View the Oshkosh sustainability report to learn more about our sustainability efforts.')
           
            // VIEW OUR SUSTAINABILITY PAGE
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[7]', locateStrategy: 'xpath'}, 'VIEW OUR SUSTAINABILITY PAGE')
           
            // Our Commitment to Safety
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[4]/h4', locateStrategy: 'xpath'}, 'Our Commitment to Safety')
           
            // Fundamentally, our company is built on keeping people safe while performing work, and that foundation, plus a pursuit of excellence, is why we uphold the idea that “Safety is an uncompromised value at JLG.”
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[4]/div/p[2]', locateStrategy: 'xpath'}, 'Fundamentally, our company is built on keeping people safe while performing work, and that foundation, plus a pursuit of excellence, is why we uphold the idea that “Safety is an uncompromised value at JLG.”')
           
            // Through a continuous improvement approach of team member engagement in all our workplaces, we’ve implemented a progressive safety management system that has resulted in achievements in OSHA VPP Star certifications in our largest manufacturing operations throughout North America, as well as certifications in OHSAS 18001 and ISO 45001 internationally.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[4]/div/p[3]', locateStrategy: 'xpath'}, 'Through a continuous improvement approach of team member engagement in all our workplaces, we’ve implemented a progressive safety management system that has resulted in achievements in OSHA VPP Star certifications in our largest manufacturing operations throughout North America, as well as certifications in OHSAS 18001 and ISO 45001 internationally.')
           
            // These achievements have led to industry-leading incident rate reductions and recognition of outstanding accomplishments in safety. But we won’t be satisfied until we’ve realized our goal of zero incidents. Learn more about our commitment to safety at JLG.
            browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[4]/div/p[4]', locateStrategy: 'xpath'}, 'These achievements have led to industry-leading incident rate reductions and recognition of outstanding accomplishments in safety. But we won’t be satisfied until we’ve realized our goal of zero incidents. Learn more about our commitment to safety at JLG.')
           

             // A History of Innovation
             browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[1]/h4', locateStrategy: 'xpath'}, 'A History of Innovation')
           
             // Explore half a century of progress.
             browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[2]/div/p/a', locateStrategy: 'xpath'}, 'Explore half a century of progress.')
           
             // click on Explore half a century of progress.
             browser.click({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[2]/div/p/a', locateStrategy: 'xpath'}, 'open Explore half a century of progress.')
            
             browser.waitForElementVisible('body')

             // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

             // About JLG >>
             browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'About JLG >>')

            //  About JLG
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'About JLG')
            
            browser.url('https://www.jlg.com/en/about-jlg')

           
             // DirectAccess: An Access Industry Resource
             browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[2]/div[1]/h4/a', locateStrategy: 'xpath'}, 'DirectAccess: An Access Industry Resource')
           
              // open DirectAccess: An Access Industry Resource
              browser.click({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[2]/div[1]/h4/a', locateStrategy: 'xpath'}, 'open DirectAccess: An Access Industry Resource')

              browser.waitForElementVisible('body')

              // Home >>
             browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a' }, 'Home >>')
 
             //  DirectAccess
             browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'DirectAccess')
             
             browser.url('https://www.jlg.com/en/about-jlg')
 
           
             //  IMG 
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[2]/div[2]/div', locateStrategy: 'xpath' }, 'img is visible')
           
             //  Push your business to new levels of success with direct access to actionable knowledge from our experts.
             browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[2]/div[2]/div/div', locateStrategy: 'xpath'}, 'Push your business to new levels of success with direct access to actionable knowledge from our experts.')
           
             // SUBSCRIBE NOW
             browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[2]/div[2]/div/a', locateStrategy: 'xpath'}, 'SUBSCRIBE NOW')
           
             // The JLG Story
             browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[3]/div[1]/h4', locateStrategy: 'xpath'}, 'The JLG Story')
           
             //  YT VIDEO
             browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[3]/div[2]/div', locateStrategy: 'xpath' }, 'youtube video is visible')
           
             // News
             browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[4]/div[1]/h4', locateStrategy: 'xpath'}, 'News')
           
             // Learn what's happening at JLG.
             browser.assert.containsText({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[4]/div[2]/div/a', locateStrategy: 'xpath'}, "Learn what's happening at JLG.")
           
              // open Learn what's happening at JLG.
              browser.click({selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[4]/div[2]/div/a', locateStrategy: 'xpath'}, "open Learn what's happening at JLG.")
           
              browser.waitForElementVisible('body')

              // Home >>
             browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')
 
              // News & Events >>
              browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'News & Events >>')
 
             //  Press Releases
             browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Press Releases')
             





            // switch back to the first tab
          //  browser.switchWindow(originalHandle[0]);
        });


           
        // End the browser session
    }
};  