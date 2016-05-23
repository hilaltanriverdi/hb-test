'use strict';

describe(
    'account', function () {
        browser.driver.manage().window().maximize();
        
      

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
        browser.sleep(5000);

        var taskButton=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/product-table/div/md-custom-table/div/ng-transclude/ng-transclude/md-toolbar/div/button[2]/span'));
        taskButton.click();
        browser.sleep(4000);
        

        browser.ignoreSynchronization = false;
        console.log("see task spec finished");
        });


        it('see task for more than one product', function(){
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        var exit=element(by.css('/html/body/div[3]/md-dialog/form/md-toolbar/div/button/md-icon'));
        exit.click();
        /*browser.sleep(2000);
        console.log('task for more product started'); 
        var productButton = element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(5000);

        var selectproducts=element(by.xpath('//thead/tr/th[1]/md-checkbox/div[1]'));
        selectproducts.click();
        browser.sleep(5000);

        var taskButton=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/product-table/div/md-custom-table/div/ng-transclude/ng-transclude/md-toolbar/div/button[2]/span'));
        taskButton.click();
        browser.sleep(4000);*/
    

        browser.ignoreSynchronization = false;
        });




    }
);
