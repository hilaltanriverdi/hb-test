'use strict';

describe(
    'account', function () {
        browser.driver.manage().window().maximize();
         var username = element(by.xpath('//input[@name="username"]'));
        var password = element(by.xpath('//input[@name="password"]'));
         var accountMenu = element(by.xpath('//span[contains(text(), "Merchanta")]'));
        var login = element(by.xpath('/html/body/div/md-content/header/div/div/button'));
        var logout = element(by.xpath('//md-menu-content/md-menu-item[3]/button/label'));
    

        beforeAll(
            function () {
                browser.get('/');
                //browser.driver.wait(protractor.until.elementIsVisible(element(by.css('h1'))));
            }
        );

         it('should login with username and password', function () {
            console.log("login spec");
                
                login.click();

                username.sendKeys('merchanta');
                password.sendKeys('merchant');
                element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/div/md-card/md-card-content/form/button')).click();

                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                expect(element(by.css('.alert-success')).getText()).toMatch(/You are logged in.*/);
                browser.ignoreSynchronization = false;
            }
        );


         it('update product barcod in product list', function(){
        browser.driver.manage().window().maximize();
        console.log('update product barcod in product list started'); 
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        var productButton=element.all(by.xpath('/html/body/div[1]/md-content/header/md-content/md-tabs/md-tabs-wrapper/md-tabs-canvas/md-pagination-wrapper/md-tab-item[2]/span')).first();
        productButton.click();
        browser.sleep(1000);

        var editButton=element.all(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[2]/ng-include/div/button/md-icon')).first();
        editButton.click();
        browser.sleep(2000);
        
        var productBarcod=element.all(by.model('vm.model.baseFields[fieldDef.name].value')).first();
        productBarcod.sendKeys("12");

        var saveButton=element(by.xpath('//span[contains(text(), "Save")]'));
        saveButton.click();
        browser.sleep(1000);

        editButton.click();
        browser.sleep(2000);


        expect(element.all(by.model('vm.model.merchantSku')).first().getAttribute('value')).toEqual("merchant");
        expect(productBarcod.getAttribute('value')).toEqual("12");
        browser.ignoreSynchronization = false;
        console.log('update product barcod in product list finished'); 
        });


         afterAll(
            function () {
                browser.ignoreSynchronization = true;
                accountMenu.click();
                logout.click();
                browser.ignoreSynchronization = false;
                browser.sleep(2000);
                console.log('logout successfully'); 
            }
        );



    }
);