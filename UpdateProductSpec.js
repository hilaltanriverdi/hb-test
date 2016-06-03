'use strict';

describe(
    'account', function () {
        browser.driver.manage().window().maximize();

    

        beforeAll(
            function () {
                browser.get('/');
                //browser.driver.wait(protractor.until.elementIsVisible(element(by.css('h1'))));
            }
        );


         it('update merchant sku and product name in product list', function(){
        browser.driver.manage().window().maximize();
        console.log('update merchant sku and product name in product list started'); 
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        var productButton=element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(2000);

        var editButton=element.all(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[2]/ng-include/div/button')).first();
        editButton.click();
        browser.sleep(2000);
        
        var productName=$("[name='product.field.UrunAdi']");
        productName.sendKeys("new name");
        browser.sleep(1000);

        var saveButton=element(by.xpath('//span[contains(text(), "Save")]'));
        saveButton.click();
        browser.sleep(1000);

        editButton.click();
        browser.sleep(3000);


        expect(element.all(by.model('vm.model.merchantSku')).first().getAttribute('value')).toEqual("M01BDTKCXV8147850D");
        expect(productName.getAttribute('value')).toEqual("new name");

 
        browser.ignoreSynchronization = false;
        console.log('update merchant sku and product name in product list spec finished'); 
        });

    }
);