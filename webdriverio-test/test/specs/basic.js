
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

//     xit('should have the right title', () => {
//         browser.url('https://webdriver.io/docs/api.html')
//         const title = $(".postHeaderTitle")
//         console.log(title.getText())
//     })
   
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

//      Урок Lesson #10 Trainee Level 1(API). Methods isDisplayed(), isDisplayedInViewPort(), isClickable().
// //      https://youtu.be/oQCtsSHRhzM

// it('should detect if an element is clickable ', () => {
//     browser.url('https://webdriver.io')
//     const blogButton = $('[href="/blog/"]') 
//     let clickable = blogButton.isClickable();
//     console.log("IS CLICKABLE?: " + clickable);  //outputs: true or false
// })

// it('should detect if an element is displayed', () => {
//     browser.url('https://webdriver.io')
//     const blogButton = $('[href="/blog/"]') 
//     isDisplayed = blogButton.isDisplayed();
//     console.log("IS DISPLAYED?: " +isDisplayed); //outputs: false
// });

// it('should detect if an element is visible', () => {
//     browser.url('https://webdriver.io');
//     let isBlogDisplayedInViewport = $('[href="/blog/"]').isDisplayedInViewport();
//     console.log("isBlogDisplayedInViewport:" + isBlogDisplayedInViewport); //outputs: true

//     let isGitHubDisplaedInViewport = $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport();
//     console.log("isGitHubDisplayedInViewport:" + isGitHubDisplaedInViewport); //outputs: false
// })