
    //1.Зайти на сайт https://webdriver.io
    // const assert = require("assert");
    // it('should have the right title', () => {
    //     browser.url('https://webdriver.io')
    //     const title = browser.getTitle()
    //     console.log(title)
    //     assert.strictEqual("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js",title)
    // })
//  //2.Кликнуть на кнопку сверху странички "API" (использовать локатор "li a[href="/docs/api.html"]")
//     xit('should demonstrate the click command', () => {    
//         browser.url('https://webdriver.io');    
//         const blogButton = $('[href="/docs/api.html"]')   
//          browser.pause(2000);    
//          blogButton.click()      
//        browser.pause(2000);      
//     })
//  //3. Напечатать в "Terminal" Visual Studio Code текущий адрес в страке браузера( console.log(...))
//     xit('should demonstrate the getText function', () => {     
//         browser.url('https://webdriver.io');      
//         console.log(browser.getUrl());  
//       });
// //4.Распечатать заглавие странички( использовать локатор ".postHeaderTitle")

    // it('should have the right title', () => {
    //     browser.url('https://webdriver.io/docs/api.html')
    //     const title = $(".postHeaderTitle")
    //     console.log(title.getText())
    // })
   
// //5. Распечатать атрибут href элемента (использовать локатор "//*[text()="JSONWire protocol"]")
// it('should demonstrate the getAttribute command', () => {
//     browser.url('https://webdriver.io/docs/api.html');
//     let HrefText = $('//*[text()="JSONWire protocol"]');
//     let HrefAttr = HrefText.getAttribute('href');
//     console.log('[Href: ' + HrefAttr);
// })


// //6. Напечатать текст "test is " в строке поиска (использовать локатор "'#search_input_react'")

// xit('should demonstrate the addValue command', () => {
//     browser.url('https://webdriver.io')
//     let input = $('#search_input_react')
//     input.addValue('test is ')
//     browser.pause(0000);
// })
    
// //7. Добавить к существующему тексту в строке поиска тест "DONE!" (использовать локатор "'#search_input_react'")


// xit('should demonstrate the addValue command', () => {
//     browser.url('https://webdriver.io')
//     let input = $('#search_input_react')
//     input.addValue('test is ')
//     browser.pause(0000);
//     input.addValue('"DONE!"')
//     browser.pause(0000);
    
// })

// //8. Сделать паузу в тесте на 5 секунд.

// xit('should demonstrate the addValue command', () => {
//     browser.url('https://webdriver.io')
//     let input = $('#search_input_react')
//     input.addValue('test is ')
//     input.addValue('"DONE!"')
//     browser.pause(5000);
// })

//++++++Урок Lesson #10 Trainee Level 1(API). Methods isDisplayed(), isDisplayedInViewPort(), isClickable().
// //      https://youtu.be/oQCtsSHRhzM

// it('should detect if an element is clickable ', () => {
//     browser.url('https://webdriver.io')
//     const blogButton = $('[href="/blog/"]') 
//     let clickable = blogButton.isClickable();
//     console.log("IS CLICKABLE?: " + clickable);  //outputs: true! or false
// })

// it('should detect if an element is displayed', () => {
//     browser.url('https://webdriver.io')
//     const blogButton = $('[href="/blog/"]') 
//     isDisplayed = blogButton.isDisplayed();
//     console.log("IS DISPLAYED?: " +isDisplayed); //outputs: true
// });

// it('should detect if an element is visible', () => {
//     browser.url('https://webdriver.io');
//     let isBlogDisplayedInViewport = $('[href="/blog/"]').isDisplayedInViewport();
//     console.log("isBlogDisplayedInViewport:" + isBlogDisplayedInViewport); //outputs: true

//     let isGitHubDisplaedInViewport = $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport();
//     console.log("isGitHubDisplayedInViewport:" + isGitHubDisplaedInViewport); //outputs: false
// })

//++++++Lesson #11. webdriver.io Trainee Level 1(API). Methods is Enabled(), is Focused(), scrolIntoView()
//      https://youtu.be/js8MIP_Y7r0

// it('should detect if an element is enabled', () => {
//     browser.url('https://webdriver.io');
//     const blogButton = $('[href="/blog/"]')
//     let isEnabled = blogButton.isEnabled();
//     console.log("isEnabled:" + isEnabled); // output: true

// });

// it('clic button', () => {
//     browser.url('https://webdriver.io');
//     const input = $('#search_input_react')
//     console.log("search.isFocused() before click:" + input.isFocused()); // output: false
//     browser.pause(2000)
//     input.click();
//     console.log("search.isFocused() afte click:" + input.isFocused()); // output: true
//     browser.pause(2000);
// })
// it('should move to element', () => {
//     browser.url('https://webdriver.io');
//     const gitHubLink = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
//     browser.pause(4000);
//     gitHubLink.scrollIntoView();
//     browser.pause(4000);
// })

//+++++++++Lesson #12. webdriver.io Trainee Level 1(API). Methods saveScreenshot(), newWindow(), switchWindow()
//      https://youtu.be/m8gl_-jx6lM

// it('should save a screenshot of the browser view', function() {
//     browser.url('https://webdriver.io');
//     const elem = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
//     elem.saveScreenshot('saveScreenshot.png')
// });
// it('should switch to another window', () => {
//     //open url
//     browser.url('https://google.com');
//     //create new window
//     browser.newWindow('https://webdriver.io')
//     browser.pause(2000);

//     //switch back via url match
//     browser.switchWindow('google.com')
//     browser.pause(2000);

//     //switch back via title match
//     browser.switchWindow('Next-gen browser automation test framework for Node.js')
//     browser.pause(2000);

// })

//          Lesson #13. webdriver.io Trainee Level 1(API). Methods getHTML(), waitUntil()
//          https://youtu.be/Y6Ksa5OMcrU

// it('should wait until', () => {
//     browser.url('https://webdriver.io');
//     browser.waitUntil(() => {
//         return $('[href="/blog/"]').isDisplayed();
//     }, 5000, 'blog is not displayed');
// });

// it('should get html for certain elements', () => {
//     browser.url('https://webdriver.io/docs/api.html');
//     var outerHTML = $('.siteNavGroupActive').getHTML();
//     console.log("outerHTML: " + outerHTML);
    
//     var innerHTML = $('.siteNavGroupActive').getHTML(false);
//     console.log("innerHTML: " + innerHTML);
// })

// //              Lesson #14. webdriver.io Trainee Level 1(API). Home task.
// //              https://youtu.be/oY4-xMfsvUQ
// //1. Перейти на страничку https://webdriver.io/docs/api.html
// it('should get html for certain elements', () => {
//     browser.url('https://webdriver.io/docs/api.html'); 
//     let HrefText = $('//*[text()="JSONWire protocol"]');
//     let HrefAttr = HrefText.getAttribute('href');
// //2. Открыть ссылку //*[text()="JSONWire protocol"] в новой Табе(используем getAttribute() и newWindow()) браузера    
//     browser.newWindow(HrefAttr)  
// //3. Переключиться на открытую табу 
//     browser.switchWindow(HrefAttr)  
// //4. Проверить, что элемент 'strong a[href="/SeleniumHQ/selenium/wiki"]' видимый пользователю (isDisplayed). Результат вывести через consle.log()
//     const SeleniumHQ = $('strong a[href="/SeleniumHQ/selenium/wiki"]') 
//     isDisplayed = SeleniumHQ.isDisplayed();      
//     console.log("IS DISPLAYEDSelenium?: " +isDisplayed); //outputs: true    

// //5. Переключаемся назад на Табу 'https://webdriver.io/docs/api.html'
//     browser.switchWindow('https://webdriver.io/docs/api.html')    
//      browser.pause(2000);
   
// //6. Используя метод waitUntil ждем пока текст, который содержиться в элементе ".postHeaderTitle" (используем метод getText())равен "API Docs"
//     browser.waitUntil(
//     () => $(".postHeaderTitle").getText() === "API Docs",
//     {
//     timeout: 5000,
//     timeoutMsg: 'expected text to be different after 5s'
//     });
// //7. Делаем скриншот элемента ".postHeaderTitle"
//         const elem = $(".postHeaderTitle");
//         elem.saveScreenshot('saveScreenshot.png')


// //8. Печатаем результат выполнения команды isDisplayed() в консоль для локатора'href="https://twitter.com/webdriverio"'


//     const linktwitter = $('[href="https://twitter.com/webdriverio"]') 
//     isDisplayed3 = linktwitter.isDisplayed();
//     console.log("IS DISPLAYED linktwitter ?: " + isDisplayed3); //outputs: False
 
// // 9. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'


//     let isBlogDisplayedInViewport = $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
//     console.log("istwitterDisplayedInViewport:" + isBlogDisplayedInViewport); //outputs: false
    
//  // 10. Скролим к элементу 'href="https://twitter.com/webdriverio"'
//     const twitterLink = $('#footer [href="https://twitter.com/webdriverio"]');
//     twitterLink.scrollIntoView();

// // 11. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
  
//     const twittercom = $('[href="https://twitter.com/webdriverio"]') 
//     isDisplayed = twittercom.isDisplayed();
//     console.log("IS DISPLAYED twitter.com@222/ ?: " +isDisplayed); //outputs: true

// //12. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'

//     let istwitterafterscrollDisplayedInViewport = $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
//     console.log("istwitterafterscrollDisplayedInViewport:" + istwitterafterscrollDisplayedInViewport); //outputs: true
    
// //13. Печатаем результат выполнения команды isFocused для локатора href="/blog/"

//     const input = $('[href="/blog/"]')
//     console.log("blog.isFocused() before click:" + input.isFocused()); // output: false
   

// //14. Кликаем по локатору href="/blog/"

//     input.click();
    
   
// //15. Выводим результат выполнения команды isFocused для локатора href="/blog/"

//     console.log("search.isFocused() afte click:" + input.isFocused()); // output: true

// })

//          Lesson #15 webdriver.io Trainee Level 2(locators). Part 1
//          https://youtu.be/uW04gEMY3JY

// id locator id="search_input_react"
// using in -> 
// #search_input_react
// using in id locator id="algolia-autocomplete-listbox-0"
// using in -> 
// #algolia-autocomplete-listbox-0

// css locator
// <span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;"><div class="aa-dataset-1"></div></span>
// [class="aa-dropdown-menu"]
// xpath locator
 


//          Lesson #17. webdriver.io Trainee Level 2(locators). Home work.
//          https://youtu.be/EYMG_5vP3g4

//1. Inroduction Xpath //h3[text()="Introduction"]  
// css locator div.navGroup:nth-child(1) > h3:nth-child(1)
//2. API docs Xpath //a[text()="API Docs"]
// css selector .navListItemActive > a
//3. Protocols Xpath //*[text()="Protocols"]
//css locator div.navGroup:nth-child(2) > h3
//4. Webdriver Protocol Xpath //a[text()="Webdriver Protocol"] 
//css locator li a[href="/docs/api/webdriver.html"]
//5. Appium Xpath //a[text()="Appium"]
// css locator [href="/docs/api/appium.html"]
//6. JSON Wire Protocol Xpath //a[text()="JSON Wire Protocol"] 
//css locator [href="/docs/api/jsonwp.html"]
//7. Mobile JSON Wire Protocol Xpath //a[text()="Mobile JSON Wire Protocol"] 
//css locator [href="/docs/api/mjsonwp.html"]
//8. Chromium Xpath //a[text()="Chromium"] 
//css locator [href="/docs/api/chromium.html"]
//9. Sauce Labs Xpath //a[text()="Sauce Labs"]  
//css locator [href="/docs/api/saucelabs.html"]
//10. Selenium Standalone Xpath //a[text()="Selenium Standalone"]
//css locator [href="/docs/api/selenium.html"]
//11. Testrunner Xpath //h3[text()="Testrunner"]
// css locator div.navGroup:nth-child(3) > h3
//12. Expect Xpath //a[text()="Expect"]
//css locator [href="/docs/api/expect.html"]
//13. browser Xpath //h3[text()="browser"]
// css div.navGroup:nth-child(4) > h3
//14. Appium locator [href="http://appium.io"]
//15. v4 webdriverio locator [href="versions.html"]
//16. Contribute locator li a[href="#contribute"]
//17. First block after Example //*[text()="Each command documentation usually comes with an example that demonstrates its usage in WebdriverIO's testrunner (in sync mode)."]
//18. Docs locator Xpass //h5[text()="Docs"]
// css selector .sitemap > div:nth-child(2) > h5
//19. Getting Started xpass locator //a[text()="Getting Started"]
// css locator section div a[href="/docs/gettingstarted.html"]
//20. API Reference xpass locator //a[text()="API Reference"]
//css footer section div a[href="/docs/api.html"]
//21. Contribute xpass locator //section//div//a[contains(text(),'Contribute') and @href="/docs/contribute.html" ]
// css section div a[href="/docs/contribute.html"]
//22. Help xpass locator //section//div//a[text()="Help" and @href="/help.html"]
//css section div a[href="/help.html"]
//23. Community xpass locator //h5[text()="Community"]
//css .sitemap > div:nth-child(3) > h5
//24. Stack Overflow xpass locator //a[text()="Stack Overflow"]
// css a[href="https://stackoverflow.com/questions/tagged/webdriver-io"]
//25. Support Chat xpass locator //a[text()="Support Chat"]
//css [href="https://gitter.im/webdriverio/webdriverio"]
//26. Slack xpass locator //a[text()="Slack"]
//css [href="https://seleniumhq.slack.com/join/shared_invite/enQtODAwOTUzOTM5OTEwLTZjZjgzN2ExOTBmZGE0NjkwYzA2Nzc0MjczMGYwYjdiNGQ5YjI0ZjdjYjFhMjVlMjFkZWJmNDYyMmU1OTYyM2Y"]
//27. Twitter xpass locator //a[text()="Twitter"]
//css [href="https://twitter.com/webdriverio"]
//28. More xpass locator //h5[text()="More"]
//css .sitemap > div:nth-child(4) > h5
//29. Blog xpass locator //section//div//a[text()="Blog"]
//css section div a[href="/blog"]
//30. GitHub xpass locator //section//div//a[text()="GitHub"]
//css section div a[href="https://github.com/webdriverio/webdriverio"]
//31. OpenJS css locator [src="/img/open-jsf-logo.svg"]

// #(6) Lesson #18. webdriver.io Trainee Level 3(Mocha framework)


// xit('Sign in into web', () => {
//         browser.url('http://www.sharelane.com/cgi-bin/main.py')
//         const links = $('[href="./register.py"]')  
//         links.click()
//         const zipCode = $('[name="zip_code"]')
//         zipCode.addValue('54000')
//         const buttonContinue = $ ('[value="Continue"]')
//         buttonContinue.click()
//         const FirstName = $ ('[name="first_name"]')
//         FirstName.addValue('Oleg')
//         const LastName = $ ('[name="last_name"]')
//         LastName.addValue('Pochkin')
//         const Email = $ ('[name="email"]')
//         Email.addValue('xalladjj@mail.ru')
//         const Password = $ ('[name="password1"]')
//         Password.addValue('Password123456')
//         const ConfirmPassword = $ ('[name="password2"]')
//         ConfirmPassword.addValue('Password123456')
//         const Register = $ ('[value="Register"]')
//         Register.click()
// })

// xit('Sign in into web Zipcode 1', () => {
//     browser.url('http://www.sharelane.com/cgi-bin/main.py')
//     const links = $('[href="./register.py"]')  
//     links.click()
//     const zipCode = $('[name="zip_code"]')
//     zipCode.addValue('1')
//     const buttonContinue = $ ('[value="Continue"]')
//     buttonContinue.click()
//     browser.pause(1000)
//     const ErrorZipCodeScreen = $ ('[class="form_all_underline"]')
//     ErrorZipCodeScreen.saveScreenshot('error_Zipcode_1.png')
//     const ErrorZipCode = $ ("[class='error_message']")
//     console.log('Error Zipcode:' + ErrorZipCode.getText())

// })
// xit('Sign in into web Zipcode 1234', () => {
//     browser.url('http://www.sharelane.com/cgi-bin/main.py')
//     const links = $('[href="./register.py"]')  
//     links.click()
//     const zipCode = $('[name="zip_code"]')
//     zipCode.addValue('1234')
//     const buttonContinue = $ ('[value="Continue"]')
//     buttonContinue.click()
//     const FirstName = $ ('[name="first_name"]')
//     FirstName.addValue('Маша')
//     const LastName = $ ('[name="last_name"]')
//     LastName.addValue('Пупкина')
//     const Email = $ ('[name="email"]')
//     Email.addValue('Тест@mail.ru')
//     const Password = $ ('[name="password1"]')
//     Password.addValue('Password1234567891011121314115')
//     const ConfirmPassword = $ ('[name="password2"]')
//     ConfirmPassword.addValue('Password1234567891011121314115')
//     const Register = $ ('[value="Register"]')
//     Register.click()
// })



// Start auto-test shop ShareLine

const assert = require("assert");
 
describe("Shareline test login page", function() {
    it("Shareline test Rus_name+ENG_lastname", function() {
        browser.url("http://www.sharelane.com/cgi-bin/main.py");
        $('[href="./register.py"]').click();
        $('[name="zip_code"]').addValue(49000);
        $('[value="Continue"]').click();
        $ ('[name="first_name"]').addValue('Маша');
        $ ('[name="last_name"]').addValue('Violetin');
        $ ('[name="email"]').addValue('xalla2djj@mail.ru');
        $ ('[name="password1"]').addValue('Password123456');
        $ ('[name="password2"]').addValue('Password123456');
        $ ('[value="Register"]').click();

        const ErrorMesage = $ ('/html/body/center/table/tbody/tr[4]/td/span')
        console.log('Rus_name+ENG_lastname:' + ErrorMesage.getText())
        
        assert.strictEqual(ErrorMesage.getText(),'Oops, error on page. Some of your fields have invalid data or email was previously used');
        
    });
    it("Shareline test Rus_lastname+ENG_name", function() {
        browser.url("http://www.sharelane.com/cgi-bin/main.py");
        $('[href="./register.py"]').click();
        $('[name="zip_code"]').addValue(49000);
        $('[value="Continue"]').click();
        $ ('[name="first_name"]').addValue('Andrey');
        $ ('[name="last_name"]').addValue('Козловский');
        $ ('[name="email"]').addValue('xalla2djj@mail.ru');
        $ ('[name="password1"]').addValue('Password123456');
        $ ('[name="password2"]').addValue('Password123456');
        $ ('[value="Register"]').click();

        browser.pause(0000);

        const ErrorMesage = $ ('/html/body/center/table/tbody/tr[4]/td/span')
        console.log('Error Rus_lastname+ENG_name:' + ErrorMesage.getText())
        
        assert.strictEqual(ErrorMesage.getText(),'Oops, error on page. Some of your fields have invalid data or email was previously used');
        
    });
    it("Shareline test Rus_lastname+RUS_name", function() {
        browser.url("http://www.sharelane.com/cgi-bin/main.py");
        $('[href="./register.py"]').click();
        $('[name="zip_code"]').addValue(49000);
        $('[value="Continue"]').click();
        $ ('[name="first_name"]').addValue('Андрей');
        $ ('[name="last_name"]').addValue('Козорвский');
        $ ('[name="email"]').addValue('xalla2djj@mail.ru');
        $ ('[name="password1"]').addValue('Password123456');
        $ ('[name="password2"]').addValue('Password123456');
        $ ('[value="Register"]').click();

        browser.pause(000);
        
        const AccountIsCreated = $ ('/html/body/center/table/tbody/tr[4]/td/span')
        console.log('Error Rus_lastname+Rus_name:' + AccountIsCreated.getText())
        
        assert.strictEqual(AccountIsCreated.getText(),'Account is created!');
        
    });
    it("Shareline test Eng_lastname+Eng_name", function() {
        browser.url("http://www.sharelane.com/cgi-bin/main.py");
        $('[href="./register.py"]').click();
        $('[name="zip_code"]').addValue(49000);
        $('[value="Continue"]').click();
        $ ('[name="first_name"]').addValue('Hlib');
        $ ('[name="last_name"]').addValue('Makarov');
        $ ('[name="email"]').addValue('xalla2djj@mail.ru');
        $ ('[name="password1"]').addValue('Password123456');
        $ ('[name="password2"]').addValue('Password123456');
        $ ('[value="Register"]').click();

        browser.pause(000);
        
        const AccountIsCreated = $ ('/html/body/center/table/tbody/tr[4]/td/span')
        console.log('Error Eng_lastname+Eng_name:' + AccountIsCreated.getText())
        
        assert.strictEqual(AccountIsCreated.getText(),'Account is created!');
        
    });

});