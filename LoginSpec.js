'use strict';

describe(
    'account', function () {
        browser.driver.manage().window().maximize();

        var username = element(by.xpath('//input[@name="username"]'));
        var password = element(by.xpath('//input[@name="password"]'));
        // var accountMenu = element(by.id('account-menu'));
        var login = element(by.xpath('/html/body/div/md-content/header/div/div/button'));
        
        // var logout = element(by.id('logout'));

        beforeAll(
            function () {
                browser.get('/');
                //browser.driver.wait(protractor.until.elementIsVisible(element(by.css('h1'))));
            }
        );

        it('should login with username and password', function () {
            console.log("login spec");
                //expect(element.all(by.css('h1')).first().getText()).toMatch(/Welcome to Hepsiburada Merchant Portal!/);
                // accountMenu.click();
                login.click();

                username.sendKeys('cta');
                password.sendKeys('cta');
                element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/div/md-card/md-card-content/form/button')).click();

                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                expect(element(by.css('.alert-success')).getText()).toMatch(/You are logged in.*/);
                browser.ignoreSynchronization = false;
            }
        );


        it('select merchant', function(){
        console.log('switch between merchant spec');  
        browser.ignoreSynchronization = true;
        var merchantButton = element(by.xpath('//button[contains(., "M")]'));
        merchantButton.click();
        
        var merchantInputField = element(by.model('vm.merchantQuery'));
        merchantInputField.sendKeys('merchant');
        browser.sleep(2000);
        
        var form= $('form[name="searchMerchantForm"]');
        var list=form.$$(("md-list-item")[0]);
        var button=$('._md-no-style', list);
        button.click();
        browser.ignoreSynchronization = false;
        console.log("switch between merchant finished");
        });


    

    



//var btn=element(by.css($('form[name="searchMerchantForm"]')))

      /*  it(
            'should login successfully with admin account', function () {
                expect(element.all(by.css('h1')).first().getText()).toMatch(/Sign in/);

                username.clear().sendKeys('admin');
                password.clear().sendKeys('admin');
                element(by.css('button[type=submit]')).click();

                expect(element(by.css('.alert-success')).getText()).toMatch(/You are logged in as user "admin"/);
            }
        );

        it(
            'should be able to update settings', function () {
                accountMenu.click();
                element(by.css('[ui-sref="settings"]')).click();

                expect(element(by.css('h2')).getText()).toMatch(/User settings for \[admin\]/);
                element(by.css('button[type=submit]')).click();

                var message = $('.alert-success').getText();
                expect(message).toMatch(/Settings saved!/);
            }
        );

        it(
            'should be able to update password', function () {
                accountMenu.click();
                element(by.css('[ui-sref="password"]')).click();

                expect(element.all(by.css('h2')).first().getText()).toMatch(/Password for \[admin\]/);
                password.sendKeys('newpassword');
                element(by.id('confirmPassword')).sendKeys('newpassword');
                element(by.css('button[type=submit]')).click();

                var message = $('.alert-success').getText();
                expect(message).toMatch(/Password changed!/);
                accountMenu.click();
                logout.click();

                accountMenu.click();
                login.click();

                username.sendKeys('admin');
                password.sendKeys('newpassword');
                element(by.css('button[type=submit]')).click();

                accountMenu.click();
                element(by.css('[ui-sref="password"]')).click();
                // change back to default
                password.clear().sendKeys('admin');
                element(by.id('confirmPassword')).clear().sendKeys('admin');
                element(by.css('button[type=submit]')).click();
            }
        );
        */

       /* afterAll(
            function () {
                accountMenu.click();
                logout.click();
            }
        );*/
    }
);
