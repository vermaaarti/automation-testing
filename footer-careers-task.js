
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


    'Footer Careers Test': function (browser) {

       
        // switching into different window tab
        const originalHandle = [];
        // handle of original tab
        browser.windowHandle(function (result) {
            originalHandle.push(result.value);
        });

        browser.click({
            selector: 'a[href="https://www.jlg.com/about-jlg/careers"]'
        }, 'open Careers');

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
           // browser.pause(6000)

            // Home >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(1)' }, 'Home >>')

            // About JLG >>
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>a:nth-of-type(2)' }, 'About JLG >>')

            //  Careers
            browser.waitForElementVisible({ selector: 'div[id="breadcrumbWrapper"]>div>span' }, 'Careers')

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



            // CAREERS
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/h1', locateStrategy: 'xpath' }, 'CAREERS')

            //  At JLG, we have some of the most talented and skilled people in the industry working for us. When you’re part of the JLG team, you’re joining a global network committed to the same goal: reaching out with solutions that meet our customers’ challenges.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/div/p[1]', locateStrategy: 'xpath' }, 'At JLG, we have some of the most talented and skilled people in the industry working for us. When you’re part of the JLG team, you’re joining a global network committed to the same goal: reaching out with solutions that meet our customers’ challenges.')

            //  JLG is dedicated to providing you with a safe working environment and providing equal opportunities to all of our employees.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[1]/div/div/div/div/div/p[2]', locateStrategy: 'xpath' }, 'JLG is dedicated to providing you with a safe working environment and providing equal opportunities to all of our employees.')

            // Search Jobs
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/h4', locateStrategy: 'xpath' }, 'Search Jobs')

            // Find job openings at JLG locations around the world.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/div/div/div[1]/p[1]', locateStrategy: 'xpath' }, 'Find job openings at JLG locations around the world.')

            // External Candidate Opportunities
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/div/div/div[1]/a', locateStrategy: 'xpath' }, 'External Candidate Opportunities')

            // Internal Candidate Opportunities
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/div/div/div[1]/p[2]', locateStrategy: 'xpath' }, 'Internal Candidate Opportunities')

            // As part of our hiring process, we participate in E-Verify. 
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/div/div/div[1]/p[3]', locateStrategy: 'xpath' }, 'As part of our hiring process, we participate in E-Verify.')

            // oshkosh logo is visible
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[1]/div/div/img', locateStrategy: 'xpath' }, 'oshkosh logo is visible')

            // Locations
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/h4', locateStrategy: 'xpath' }, 'Locations')

            // JLG has 39 sales and service locations globally; our largest manufacturing facility is located in McConnellsburg, Pennsylvania. We have additional manufacturing facilities in Pennsylvania and Ohio in the United States, as well as in France and Belgium.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[2]/div/p[2]', locateStrategy: 'xpath' }, 'JLG has 39 sales and service locations globally; our largest manufacturing facility is located in McConnellsburg, Pennsylvania. We have additional manufacturing facilities in Pennsylvania and Ohio in the United States, as well as in France and Belgium.')

            // Company Benefits
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/h4', locateStrategy: 'xpath' }, 'Company Benefits')

            // JLG offers a Total Rewards package that includes competitive salaries, comprehensive benefits and excellent growth opportunities. We also offer a tuition-reimbursement program for team members interested in furthering their education.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[2]', locateStrategy: 'xpath' }, 'JLG offers a Total Rewards package that includes competitive salaries, comprehensive benefits and excellent growth opportunities. We also offer a tuition-reimbursement program for team members interested in furthering their education.')

            // Benefits include:
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[3]/strong', locateStrategy: 'xpath' }, 'Benefits include:')

            // Competitive salary-Tuition reimbursement
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[3]/div/p[4]', locateStrategy: 'xpath' }, 'Competitive salary-Tuition reimbursement')

            // Assistance
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[4]/h4', locateStrategy: 'xpath' }, 'Assistance')

            // If you need help seeking a job opportunity at JLG Industries, or if you need reasonable accommodation with the application process, please contact us.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[4]/div/p[2]', locateStrategy: 'xpath' }, 'If you need help seeking a job opportunity at JLG Industries, or if you need reasonable accommodation with the application process, please contact us.')

           
            // open contact us
            browser.click({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[4]/div/p[2]/a', locateStrategy: 'xpath' }, 'open contact us')

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

                // accept cookie
                browser.click({ selector: '/html/body/form/div/main/div[2]/div/div/div[2]/div[1]', locateStrategy: 'xpath' }, 'accept cookie')

                // Contact us
                browser.assert.containsText({ selector: '/html/body/form/div/main/div[2]/div[1]/h1', locateStrategy: 'xpath' }, 'Contact us')

                // switch back to the first tab
                browser.switchWindow(originalHandle[1]);
            });


            // Oshkosh Corporation is an Equal Opportunity Employer.  This company will provide equal opportunity to all individuals without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or veteran status.  Information collected regarding categories as provided by law will in no way affect the decision regarding an employment application.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[5]/p[1]', locateStrategy: 'xpath' }, 'Oshkosh Corporation is an Equal Opportunity Employer.  This company will provide equal opportunity to all individuals without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or veteran status.  Information collected regarding categories as provided by law will in no way affect the decision regarding an employment application.')

            // Oshkosh Corporation is also a federal contractor which takes affirmative action to employ and advance in employment qualified minorities, women, person with disabilities, disabled veterans, and veterans of the Vietnam era. Any employee or applicant for employment who is qualified under the applicable regulations will be covered under our affirmative action program by providing this information to the Company. Submission of this information is voluntary, will be kept confidential, and is not a requirement for employment.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[5]/p[2]', locateStrategy: 'xpath' }, 'Oshkosh Corporation is also a federal contractor which takes affirmative action to employ and advance in employment qualified minorities, women, person with disabilities, disabled veterans, and veterans of the Vietnam era. Any employee or applicant for employment who is qualified under the applicable regulations will be covered under our affirmative action program by providing this information to the Company. Submission of this information is voluntary, will be kept confidential, and is not a requirement for employment.')

            // Certain positions with Oshkosh Corporation require access to controlled goods and technologies subject to the International Traffic in Arms Regulations or the Export Administration Regulations. Applicants for these positions may need to be "U.S. Persons," as defined in these regulations. Generally, a "U.S. Person" is a U.S. citizen, lawful permanent resident, or an individual who has been admitted as a refugee or grated asylum.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[5]/p[3]', locateStrategy: 'xpath' }, 'Certain positions with Oshkosh Corporation require access to controlled goods and technologies subject to the International Traffic in Arms Regulations or the Export Administration Regulations. Applicants for these positions may need to be "U.S. Persons," as defined in these regulations. Generally, a "U.S. Person" is a U.S. citizen, lawful permanent resident, or an individual who has been admitted as a refugee or grated asylum.')

            // JLG Industries will not discharge or in any other manner discriminate against employees or applicants because they have inquired about, discussed, or disclosed their own pay or the pay of another employee or applicant. However, employees who have access to the compensation information of other employees or applicants as a part of their essential job functions cannot disclose the pay of other employees or applicants to individuals who do not otherwise have access to compensation information, unless the disclosure is (a) in response to a formal complaint or charge, (b) in furtherance of an investigation, proceeding, hearing, or action, including an investigation conducted by the employer, or (c) consistent with JLG Industries' legal duty to furnish information.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[5]/p[4]', locateStrategy: 'xpath' }, "JLG Industries will not discharge or in any other manner discriminate against employees or applicants because they have inquired about, discussed, or disclosed their own pay or the pay of another employee or applicant. However, employees who have access to the compensation information of other employees or applicants as a part of their essential job functions cannot disclose the pay of other employees or applicants to individuals who do not otherwise have access to compensation information, unless the disclosure is (a) in response to a formal complaint or charge, (b) in furtherance of an investigation, proceeding, hearing, or action, including an investigation conducted by the employer, or (c) consistent with JLG Industries' legal duty to furnish information.")


            // Know Your Rights
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[5]/span[1]/a', locateStrategy: 'xpath' }, 'Know Your Rights')

            //open Know Your Rights
            browser.click({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[5]/span[1]/a', locateStrategy: 'xpath' }, 'open Know Your Rights')

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
        })

            // Pay Transparency Statement
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[5]/span[2]/a', locateStrategy: 'xpath' }, 'Pay Transparency Statement')

            // open Pay Transparency Statement
            browser.click({ selector: '/html/body/div/form/div[9]/div[3]/div/div[1]/div[2]/div/div[2]/div/div[5]/span[2]/a', locateStrategy: 'xpath' }, 'open Pay Transparency Statement')

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
        })

            // JLG Job Fairs
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[1]/h4/a', locateStrategy: 'xpath' }, 'JLG Job Fairs')

            // open JLG Job Fairs
            browser.click({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[1]/h4/a', locateStrategy: 'xpath' }, 'open JLG Job Fairs')

            browser.waitForElementVisible('body')

            // Job Fairs
            browser.assert.containsText({ selector: '/html/body/div/form/div[5]/div[4]/div/div/div/span', locateStrategy: 'xpath' }, 'Job Fairs')

            // back
            browser.url('https://www.jlg.com/en/about-jlg/careers')


            // img is visible
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[2]/div/img', locateStrategy: 'xpath' }, 'img is visible')

            // Join the JLG Team - Join Us At A Job Fair
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[2]/div/p', locateStrategy: 'xpath' }, 'Join the JLG Team - Join Us At A Job Fair')

            // SEE JOB FAIR SCHEDULE
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[1]/div[2]/div/a', locateStrategy: 'xpath' }, 'SEE JOB FAIR SCHEDULE')

            // News
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[2]/div[1]/h4', locateStrategy: 'xpath' }, 'News')

            // Learn what's happening at JLG.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[2]/div[2]/div/a', locateStrategy: 'xpath' }, "Learn what's happening at JLG.")

            // DirectAccess: An Access Industry Resource
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[3]/div[1]/h4/a', locateStrategy: 'xpath' }, 'DirectAccess: An Access Industry Resource')

            // img is visible
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[3]/div[2]/div/img', locateStrategy: 'xpath' }, 'img is visible')

            // Push your business to new levels of success with direct access to actionable knowledge from our experts.
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[3]/div[2]/div/div', locateStrategy: 'xpath' }, 'Push your business to new levels of success with direct access to actionable knowledge from our experts.')

              // SUBSCRIBE NOW
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[3]/div[2]/div/a', locateStrategy: 'xpath' }, 'SUBSCRIBE NOW')

            // Reaching Out Video
            browser.assert.containsText({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[4]/div[1]/h4', locateStrategy: 'xpath' }, 'Reaching Out Video')

            // VIDEO is visible
            browser.waitForElementVisible({ selector: '/html/body/div/form/div[9]/div[3]/div/div[2]/div[4]/div[2]/div/span/img', locateStrategy: 'xpath' }, 'VIDEO is visible')


        });


        // End the browser session
    }
};  