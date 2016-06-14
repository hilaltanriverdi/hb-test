'use strict';

describe('as a merchant upload zip file', function () {
        browser.driver.manage().window().maximize();

      
        beforeAll(
            function () {
                browser.get('/');
               
            }
        );

        it('should upload zip file', function(){
        browser.driver.manage().window().maximize();
        console.log('should upload zip file spec started'); 
        browser.ignoreSynchronization =true;
        browser.sleep(1000);

        var importButton = element.all(by.xpath('//span[contains(text(), "Import/Export")]')).first();
        importButton.click();
        browser.sleep(2000);

        var zipButton=element.all(by.xpath('//span[contains(text(),"Upload Zip")]')).first();
        zipButton.click();
        browser.sleep(1000);

        var path=require('path');

        var fileToUpload = 'C:/Users/hilal/Downloads/myimages.zip';
        var absolutePath = path.resolve(process.cwd(), fileToUpload);
        
       
        var inputArea = element(by.xpath('/html/body/label/input'));
        inputArea.sendKeys(absolutePath);

        var uploadButton=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/if-merchant-selected/ng-transclude/form/div/div/button/span'));
        uploadButton.click();
        browser.sleep(7000);

        expect(element(by.xpath('span[contains(text(),"myimages.zip")]')).isPresent()).toBe(true);
        

        browser.ignoreSynchronization = false;
        console.log('should upload zip file spec finished'); 
        });


       
    }
);