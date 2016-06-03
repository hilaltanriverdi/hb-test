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


        it('upload product', function(){
        console.log('upload product spec started');  
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        var importButton = element.all(by.xpath('//span[contains(text(),"Import/Export")]')).first();
        importButton.click();
        browser.sleep(2000);
        

        var uploadButton=element.all(by.xpath('//span[contains(text(),"Upload Product")]')).first();
        uploadButton.click();
        browser.sleep(2000);
       
      
        var path=require('path');
        var fileToUpload = 'C:/Users/hilal/Downloads/hb-2016-06-03-07-51.xlsx';
        var absolutePath = path.resolve(process.cwd(), fileToUpload);
        
       // var inputArea=$("[ng-model='vm.excel.file']")[0];
        var inputArea = element(by.xpath('/html/body/label/input'));
        inputArea.sendKeys(absolutePath);
        browser.sleep(1000);
        
        var uploadbtn=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/form/div/div/button'));
        uploadbtn.click();  
        browser.sleep(2000);

        var statusArea = element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/div/md-custom-table/div/md-table-container/table/tbody/tr[1]/td[5]/div/div/span'));
        //expect(statusArea.getAttribute('value')).toEqual("FAILED");
        expect(statusArea.getText()).toEqual("FAILED");
        
        browser.ignoreSynchronization = false;
        console.log("upload product spec finished");
        });


    }
);