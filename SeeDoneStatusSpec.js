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

                username.sendKeys('merchanta');
                password.sendKeys('merchant');
                element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/div/md-card/md-card-content/form/button')).click();

                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                expect(element(by.css('.alert-success')).getText()).toMatch(/You are logged in.*/);
                browser.ignoreSynchronization = false;
            }
        );


         it('upload correct excel and see done status ', function(){
        console.log('upload correct excel and see done status started');  
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        var importButton = element.all(by.xpath('//span[contains(text(),"Import/Export")]')).first();
        importButton.click();
        browser.sleep(2000);
        

        var uploadButton=element.all(by.xpath('//span[contains(text(),"Upload Product")]')).first();
        uploadButton.click();
        browser.sleep(2000);
       
      
        var path=require('path');
        var fileToUpload = 'C:/Users/hilal/Downloads/hb-2016-06-03-07-50.xlsx';
        var absolutePath = path.resolve(process.cwd(), fileToUpload);
        
       // var inputArea=$("[ng-model='vm.excel.file']")[0];
        var inputArea = element(by.xpath('/html/body/label/input'));
        inputArea.sendKeys(absolutePath);
        browser.sleep(1000);
        
        var uploadbtn=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/form/div/div/button'));
        uploadbtn.click();  
        browser.sleep(5000);

        var statusArea = element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/div/md-custom-table/div/md-table-container/table/tbody/tr[1]/td[5]/div/div/span'));
        //expect(statusArea.getAttribute('value')).toEqual("FAILED");
        expect(statusArea.getText()).toEqual("DONE");
        
        browser.ignoreSynchronization = false;
        console.log("upload correct excel and see done status finished");
        });


    }
);