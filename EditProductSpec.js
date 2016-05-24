'use strict';

describe(
    'account', function () {
        browser.driver.manage().window().maximize();

        

        beforeAll(
            function () {
                browser.get('/');
                
            }
        );


        it('edit product and see revision', function(){

        console.log("edit product spec started");
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.sleep(2000); 
        var productButton = element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(5000);

        var product=element(by.xpath('//tbody/tr[1]/td[2]/div/div/a'));

        
        product.click();
        browser.sleep(3000);

      
        var inputField=element.all(by.model('vm.model.fields[key]')).first();
        inputField.sendKeys('yeni');
        browser.sleep(2000);
        
        var saveButton=element(by.xpath('//button[contains(., "Save")]'));
        saveButton.click();
        browser.sleep(6000);
        
        product.click();
        browser.sleep(2000);

        
        expect(element.all(by.model('vm.model.fields[key]')).first().getAttribute('value')).toEqual("yeni");

        browser.ignoreSynchronization = false;
         console.log("edit product spec finished");
});



         it('cansel to edit product and see there is no revision', function(){

        console.log("cansel to edit product spec started");
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.sleep(2000); 
        var productButton = element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(5000);

        var product=element(by.xpath('//tbody/tr[1]/td[2]/div/div/a'));

        
        product.click();
        browser.sleep(3000);

      
        var inputField=element.all(by.model('vm.model.fields[key]')).first();
        inputField.sendKeys(' ignore this');
        browser.sleep(2000);
        
        var cancelButton=element(by.xpath('//button[contains(., "Cancel")]'));
        cancelButton.click();
        browser.sleep(6000);
        
        product.click();
        browser.sleep(2000);

        expect(element.all(by.model('vm.model.fields[key]')).first().getAttribute('value')).toEqual("yeni");

        browser.ignoreSynchronization = false;
         console.log("cansel to edit product spec finished");
});



        
    }
);
