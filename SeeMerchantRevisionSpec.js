'use strict';

describe(
    'account', function () {
        browser.driver.manage().window().maximize();

        var username = element(by.xpath('//input[@name="username"]'));
        var password = element(by.xpath('//input[@name="password"]'));
        
        var login = element(by.xpath('/html/body/div/md-content/header/div/div/button'));
        
        

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


        it('see merchanta revision', function(){
        console.log('see merchanta revision spec started');  
        browser.ignoreSynchronization = true;
        
        var editButton=element.all(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[2]/ng-include/div/button/md-icon')).first();
        editButton.click();
        browser.sleep(2000);

        var productBarcod=element(by.model('vm.model.baseFields[fieldDef.name].value')).first();

        expect(element.all(by.model('vm.model.merchantSku')).first().getAttribute('value')).toEqual("merchant");
        expect(productBarcod.getAttribute('value')).toEqual("12");
		
		var cancelButton=element(by.xpath('//button[contains(., "Cancel")]'));
        cancelButton.click();

        browser.ignoreSynchronization = false;
        console.log("see merchanta revision spec finished");
        });
		
		
		 it('see error on merchanta s product', function(){
        console.log('see error on merchanta product spec started');  
        browser.ignoreSynchronization = true;

        var editButton=element(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[2]/ng-include/div/button'));
        editButton.click();
        browser.sleep(2000);

        var errorArea=element(by.xpath('//span[contains(text(), "Length cannot be smaller than 10.0. The actual length is 0")]'));
        expect(errorArea.getText()).toMatch("Length cannot be smaller than 10.0. The actual length is 0");
        
        browser.sleep(2000);


        browser.ignoreSynchronization = false;
        console.log("see error on merchanta product spec finished");
        });

        
       
    }
);