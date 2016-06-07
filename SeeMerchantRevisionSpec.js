'use strict';

describe(

    'account', function () {
        browser.driver.manage().window().maximize();

        var username = element(by.xpath('//input[@name="username"]'));
        var password = element(by.xpath('//input[@name="password"]'));
         var accountMenu = element(by.xpath('//span[contains(text(), "Cta")]'));
        var login = element(by.xpath('/html/body/div/md-content/header/div/div/button'));
        var login = element(by.xpath('/html/body/div/md-content/header/div/div/button'));
        var logout = element(by.xpath('//button[contains(., "Sign out")]'));
        
        beforeAll(
            function () {
                browser.get('/');
               
            }
        );

        it('should login with username and password', function () {
            console.log("login spec");
                
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
        console.log('select merchanta spec started');  
        browser.ignoreSynchronization = true;
        var merchantButton = element(by.xpath('//button[contains(., "M")]'));
        merchantButton.click();
        
        var merchantInputField = element(by.model('vm.merchantQuery'));
        merchantInputField.sendKeys('merchanta');
        browser.sleep(2000);
        
        var form= $('form[name="searchMerchantForm"]');
        var list=form.$$(("md-list-item")[0]);
        var button=$('._md-no-style', list);
        button.click();
        browser.ignoreSynchronization = false;
        console.log("select merchata spec finished");
        });


        it('see merchanta revision', function(){
        console.log('see merchanta revision spec started');  
        browser.ignoreSynchronization = true;

        var productButton=element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(3000);
        
        var editButton=element(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[2]/ng-include/div/button'));
        editButton.click();
        browser.sleep(2000);

        var productBarcod=element(by.model('vm.model.baseFields[fieldDef.name].value'));

        expect(element.all(by.model('vm.model.merchantSku')).first().getAttribute('value')).toEqual("M01BDTKCXV8147850D");
        expect(productBarcod.getAttribute('value')).toEqual("12");

        var cancelButton=element(by.xpath('//button[contains(., "Cancel")]'));
        cancelButton.click();

        browser.ignoreSynchronization = false;
        console.log("see merchanta revision spec finished");
        });


       it('see error on merchanta product', function(){
        console.log('see error on merchanta product spec started');  
        browser.ignoreSynchronization = true;

        var editButton=element(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[2]/ng-include/div/button'));
        editButton.click();
        browser.sleep(2000);

        var errorArea=element(by.xpath('//span[contains(text(), "Length cannot be smaller than 2. The actual length is 0")]'));
        expect(errorArea.getText()).toMatch("Length cannot be smaller than 2. The actual length is 0");
        
        browser.sleep(2000);

        var cancelButton=element(by.xpath('//button[contains(., "Cancel")]'));
        cancelButton.click();
        browser.sleep(2000);

        browser.ignoreSynchronization = false;
        console.log("see error on merchanta product spec finished");
        });
       


       it('see error on merchantb product', function(){
        console.log('see error on merchantb product spec started');  
        browser.ignoreSynchronization = true;


         var merchantButton = element(by.xpath('//button[contains(., "M")]'));
        merchantButton.click();
        
        var merchantInputField = element(by.model('vm.merchantQuery'));
        merchantInputField.clear();
        merchantInputField.sendKeys('merchantb');
        browser.sleep(1000);
        
        var form= $('form[name="searchMerchantForm"]');
        var list=form.$$(("md-list-item")[0]);
        var button=$('._md-no-style', list);
        button.click();


        var editButton=element(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[2]/ng-include/div/button'));
        editButton.click();
        browser.sleep(2000);

        var errorArea=element(by.xpath('//span[contains(text(), "Length cannot be smaller than 2. The actual length is 0")]'));
        expect(errorArea.getText()).toMatch("Length cannot be smaller than 2. The actual length is 0");
        
        browser.sleep(2000);

        var cancelButton=element(by.xpath('//button[contains(., "Cancel")]'));
        cancelButton.click();
        browser.sleep(1000);

        browser.ignoreSynchronization = false;
        console.log("see error on merchantb product spec finished");
        });


        it('see only merchantb products', function(){
        browser.driver.manage().window().maximize();
        console.log('see only merchantb products spec started'); 
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
        var productButton=element.all(by.xpath('/html/body/div[1]/md-content/header/md-content/md-tabs/md-tabs-wrapper/md-tabs-canvas/md-pagination-wrapper/md-tab-item[2]/span')).first();
        productButton.click();
        browser.sleep(1000);

        var editButton=element.all(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[2]/ng-include/div/button/md-icon')).first();
        editButton.click();
        browser.sleep(2000);
        


        expect(element.all(by.model('vm.model.merchantSku')).first().getAttribute('value')).toEqual("merchant");
        
        var canselButton=element(by.xpath('//button[contains(., "Cancel")]'));
        canselButton.click();
        browser.ignoreSynchronization = false;
        console.log('see only merchantb products spec finished'); 
        });


       afterAll(
            function () {
                browser.ignoreSynchronization = true;
                accountMenu.click();
                logout.click();
                browser.ignoreSynchronization = false;
                console.log('logout successfully'); 
            }
        );
        

       
    }
);