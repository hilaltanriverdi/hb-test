'use strict';

describe('as an admin add a new validation for a product attribute', function () {
        browser.driver.manage().window().maximize();

      
        beforeAll(
            function () {
                browser.get('/');
               
            }
        );


        it('should select merchant', function(){
        console.log('select merchanta spec started');  
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
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
        console.log("select merchata spec finished");
        });



        it('should validate product fields', function(){
        browser.driver.manage().window().maximize();
        console.log('define validation rule spec started'); 
        browser.ignoreSynchronization =true;
        browser.sleep(1000);

        var productButton = element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(2000);

        var urunId=element(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/product-table/div/md-custom-table/div/md-table-container/table/tbody/tr/td[5]'));
        urunId.click();
        browser.sleep(2000);

        var inputField=$('form[name="editDialog"]'); 
        var inpt=inputField.element(by.model('vm.model'));
        inpt.clear();
        browser.sleep(1000);
        inpt.sendKeys("dvf ds");
        browser.sleep(1000);
        
         var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform();

        browser.sleep(2000);


        expect(element.all(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/alert/md-toolbar/div/span')).first().getText()).toMatch(/updated*/);
        browser.ignoreSynchronization = false;
        console.log('define validation rule spec finished'); 
        });


       
    }
);