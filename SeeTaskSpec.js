'use strict';

describe(
    'account', function () {
        browser.driver.manage().window().maximize();
         var accountMenu = element(by.xpath('//button[contains(., "Cta")]'));
         var logout = element(by.xpath('//md-menu-content/md-menu-item[3]/button/label'));

        beforeAll(
            function () {
                browser.get('/');
                
            }
        );

       
        it('see task for one product', function(){
        console.log("see task spec started");
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.sleep(2000); 
        var productButton = element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(5000);

        var selectoneproduct=element(by.xpath('//tbody/tr[1]/td[1]/md-checkbox/div[1]'));

        selectoneproduct.click();
        

        var taskButton=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/product-table/div/md-custom-table/div/ng-transclude/ng-transclude/md-toolbar/div/button[2]/span'));
        taskButton.click();
        browser.sleep(1000);
        

        browser.ignoreSynchronization = false;
        console.log("see task spec finished");
        });


        it('see task for more than one product', function(){
        browser.driver.manage().window().maximize();
        console.log('task for more product started'); 
        browser.ignoreSynchronization = true;

        var btncancel=element(by.xpath('//button[contains(., "cancel")]'));
        btncancel.click();
        browser.sleep(1000);

        var selectproducts=element(by.xpath('//thead/tr/th[1]/md-checkbox/div[1]'));
        selectproducts.click();

        var taskButton=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/product-table/div/md-custom-table/div/ng-transclude/ng-transclude/md-toolbar/div/button[2]/span'));
        taskButton.click();
        browser.sleep(2000);

        btncancel.click();
        browser.sleep(2000);

         browser.ignoreSynchronization = false;
        });



        it('do not see task when did not select product', function(){
        browser.driver.manage().window().maximize();
        console.log('do not see task when did not select product started'); 
        browser.ignoreSynchronization = true;
        
        var selectproducts=element(by.xpath('//thead/tr/th[1]/md-checkbox/div[1]'));
        selectproducts.click();

        expect(element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/product-table/div/md-custom-table/div/ng-transclude/ng-transclude/md-toolbar/div/button[2]/span')).isDisplayed()).toBe(false); 
        browser.ignoreSynchronization = false;
        console.log('do not see task when did not select product finished'); 
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
