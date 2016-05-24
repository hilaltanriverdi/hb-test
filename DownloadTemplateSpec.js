'use strict';

describe(
    'account', function () {
        browser.driver.manage().window().maximize();

        var username = element(by.xpath('//input[@name="username"]'));
        var password = element(by.xpath('//input[@name="password"]'));
         var accountMenu = element(by.id('account-menu'));
        var login = element(by.xpath('/html/body/div/md-content/header/div/div/button'));
        
        beforeAll(
            function () {
                browser.get('/');
                
            }
        );

        it('should login with username and password', function () {
            console.log("login spec");
                
                login.click();

                username.sendKeys('merchant');
                password.sendKeys('merchant');
                element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/div/md-card/md-card-content/form/button')).click();

                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                expect(element(by.css('.alert-success')).getText()).toMatch(/You are logged in.*/);
                browser.ignoreSynchronization = false;
            }
        );


        it('download product data template', function(){
        console.log('download product data template spec started');  
        browser.ignoreSynchronization = true;
        
        var productButton = element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();

        var templateButton=element(by.xpath('//div/md-tabs/md-tabs-wrapper/md-tabs-canvas/md-pagination-wrapper/md-tab-item[2]/span'));
        templateButton.click();
        browser.sleep(3000);

        var hb=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/product-type-select/div/div[2]/div[1]/md-content/md-list/md-list-item/div/button'));
        hb.click();
        browser.sleep(3000);

        browser.ignoreSynchronization = false;
        console.log("download product data template spec finished");
        });


        

    }
);
