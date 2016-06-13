'use strict';

describe('as an admin add a new validation for a product attribute', function () {
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
            console.log("login spec started");
                
                login.click();

                username.sendKeys('admin');
                password.sendKeys('admin');
                element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/div/md-card/md-card-content/form/button')).click();

                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                expect(element(by.css('.md-center-tabs')).isPresent()).toBe(true);
                browser.ignoreSynchronization = false;

                console.log("login spec finished");
            }
        );


         it('define validation rule', function(){
        browser.driver.manage().window().maximize();
        console.log('define validation rule spec started'); 
        browser.ignoreSynchronization =true;
        browser.sleep(1000);
        var databaseButton=element.all(by.xpath('//span[contains(text(), "Database")]')).first();
        databaseButton.click();
        browser.sleep(2000);

        var validationRules=element.all(by.xpath('//span[contains(text(), "Validation Rules")]')).first();
        validationRules.click();
        browser.sleep(1000);

        var addButton=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/md-custom-table/div/ng-transclude/md-toolbar/div/a'));
        addButton.click();
        browser.sleep(2000);

        var name = element(by.model('vm.model.name'));
        name.sendKeys('newname');
         
        var title = element(by.model('vm.model.title'));
        title.sendKeys('newtitle');
         browser.sleep(1000);

        var severity=element.all(by.model('vm.model.severity')).first();
        severity.click();
        browser.sleep(1000);

        var severity2=element.all(by.repeater('severity in vm.severityList')).get(1);
        severity2.click();
        browser.sleep(1000);

        var decription=element(by.model('vm.model.description'));
        decription.sendKeys('newdescription');
         
        var scope=element(by.model('vm.model.scope'));
        scope.sendKeys('newscope');
         
        
        var message=element(by.model('vm.model.message'));
         message.sendKeys('newmessage');
         
        var expression=element(by.model('vm.model.expression'));
        expression.sendKeys('!"$".matches("^[a-zA-Zşjnvjbfhbjh].*")');

        
        var datatypes=element(by.model('$mdAutocompleteCtrl.scope.searchText'));
        datatypes.click();
        datatypes.sendKeys('string');
        browser.sleep(2000);
        

        var datatypes2=element(by.css('.highlight'));
        datatypes2.click();
        browser.sleep(2000);
        
        var save=element.all(by.xpath('//button[contains(., "save")]')).first();
        save.click();

        browser.sleep(3000);

        expect(element.all(by.xpath('/html/body/div[1]/md-content/md-card/md-card-content/div/div/alert/md-toolbar/div/span')).first().getText()).toMatch(/has been created successfully*/);

 
        browser.ignoreSynchronization = false;
        console.log('define validation rule spec finished'); 
        });


       
    }
);