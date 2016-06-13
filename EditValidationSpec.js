'use strict';

describe('as an admin edit validation for a product attribute', function () {
        browser.driver.manage().window().maximize();

        beforeAll(
            function () {
                browser.get('/');
               
            }
        );

        
        it('should edit validation rule', function(){
        browser.driver.manage().window().maximize();
        console.log('should edit validation rule spec started'); 
        browser.ignoreSynchronization =true;
        browser.sleep(2000);
        var databaseButton=element.all(by.xpath('//span[contains(text(), "Database")]')).first();
        databaseButton.click();
        browser.sleep(2000);

        var validationRules=element.all(by.xpath('//span[contains(text(), "Validation Rules")]')).first();
        validationRules.click();
        browser.sleep(2000);

        var pagelimit=element(by.model('$pagination.limit'));
        pagelimit.click();
        browser.sleep(1000);

        var selectlimit=element(by.xpath('//div[contains(text(), "20")]'));
        selectlimit.click();
        browser.sleep(1000);

        console.log("number of products :");
        element.all(by.repeater('model in vm.pageData')).count().then(function(count) {
        console.log(count);  });

       
        var editButton=element.all(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/md-custom-table/div/md-table-container/table/tbody/tr[1]')).first();

        editButton.click();
        browser.sleep(2000);

        var severity=element.all(by.model('vm.model.severity')).first();
        severity.click();
        browser.sleep(1000);

        var severity2=element.all(by.repeater('severity in vm.severityList')).get(1);
        severity2.click();
        browser.sleep(1000);
        
        var save=element.all(by.xpath('//button[contains(., "save")]')).first();
        save.click();

        browser.sleep(1000);

        expect(element.all(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/div/alert/md-toolbar/div/span')).first().getText()).toMatch(/has been updated successfully*/);

        browser.ignoreSynchronization = false;
        console.log('should edit validation rule spec finished'); 
        });


       
    }
);