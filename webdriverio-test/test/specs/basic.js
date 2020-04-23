
//     //1.Зайти на сайт https://webdriver.io
//     xit('should have the right title', () => {
//         browser.url('https://webdriver.io')
//         const title = browser.getTitle()
//         assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
//     })
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

// it('should detect the focus of an element', () => {
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

//              Lesson #14. webdriver.io Trainee Level 1(API). Home task.
//              https://youtu.be/oY4-xMfsvUQ
//1. Перейти на страничку https://webdriver.io/docs/api.html
it('should get html for certain elements', () => {
    browser.url('https://webdriver.io/docs/api.html'); 
    let HrefText = $('//*[text()="JSONWire protocol"]');
    let HrefAttr = HrefText.getAttribute('href');
//2. Открыть ссылку //*[text()="JSONWire protocol"] в новой Табе(используем getAttribute() и newWindow()) браузера    
    browser.newWindow(HrefAttr)  
//3. Переключиться на открытую табу 
    browser.switchWindow(HrefAttr)  
//4. Проверить, что элемент 'strong a[href="/SeleniumHQ/selenium/wiki"]' видимый пользователю (isDisplayed). Результат вывести через consle.log()
    const SeleniumHQ = $('strong a[href="/SeleniumHQ/selenium/wiki"]') 
    isDisplayed = SeleniumHQ.isDisplayed();      
    console.log("IS DISPLAYEDSelenium?: " +isDisplayed); //outputs: true    

//5. Переключаемся назад на Табу 'https://webdriver.io/docs/api.html'
    browser.switchWindow('https://webdriver.io/docs/api.html')    
     browser.pause(2000);
   
//6. Используя метод waitUntil ждем пока текст, который содержиться в элементе ".postHeaderTitle" (используем метод getText())равен "API Docs"
    browser.waitUntil(
    () => $(".postHeaderTitle").getText() === "API Docs",
    {
    timeout: 5000,
    timeoutMsg: 'expected text to be different after 5s'
    });
//7. Делаем скриншот элемента ".postHeaderTitle"
        const elem = $(".postHeaderTitle");
        elem.saveScreenshot('saveScreenshot.png')


//8. Печатаем результат выполнения команды isDisplayed() в консоль для локатора'href="https://twitter.com/webdriverio"'


    const linktwitter = $('[href="https://twitter.com/webdriverio"]') 
    isDisplayed3 = linktwitter.isDisplayed();
    console.log("IS DISPLAYED linktwitter ?: " + isDisplayed3); //outputs: False
 
// 9. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'


    let isBlogDisplayedInViewport = $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
    console.log("istwitterDisplayedInViewport:" + isBlogDisplayedInViewport); //outputs: false
    
 // 10. Скролим к элементу 'href="https://twitter.com/webdriverio"'
    const twitterLink = $('#footer [href="https://twitter.com/webdriverio"]');
    twitterLink.scrollIntoView();

// 11. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
  
    const twittercom = $('[href="https://twitter.com/webdriverio"]') 
    isDisplayed = twittercom.isDisplayed();
    console.log("IS DISPLAYED twitter.com@222/ ?: " +isDisplayed); //outputs: true

//12. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'

    let istwitterafterscrollDisplayedInViewport = $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
    console.log("istwitterafterscrollDisplayedInViewport:" + istwitterafterscrollDisplayedInViewport); //outputs: true
    
//13. Печатаем результат выполнения команды isFocused для локатора href="/blog/"

    const input = $('[href="/blog/"]')
    console.log("blog.isFocused() before click:" + input.isFocused()); // output: false
   

//14. Кликаем по локатору href="/blog/"

    input.click();
    
   
//15. Выводим результат выполнения команды isFocused для локатора href="/blog/"

    console.log("search.isFocused() afte click:" + input.isFocused()); // output: true

})