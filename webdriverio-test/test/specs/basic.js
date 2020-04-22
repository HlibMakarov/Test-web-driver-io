
    //1.Зайти на сайт https://webdriver.io
    xit('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })
 //2.Кликнуть на кнопку сверху странички "API" (использовать локатор "li a[href="/docs/api.html"]")
    xit('should demonstrate the click command', () => {    
        browser.url('https://webdriver.io');    
        const blogButton = $('[href="/docs/api.html"]')   
         browser.pause(2000);    
         blogButton.click()      
       browser.pause(2000);      
    })
 //3. Напечатать в "Terminal" Visual Studio Code текущий адрес в страке браузера( console.log(...))
    xit('should demonstrate the getText function', () => {     
        browser.url('https://webdriver.io');      
        console.log(browser.getUrl());  
      });
//4.Распечатать заглавие странички( использовать локатор ".postHeaderTitle")

    xit('should have the right title', () => {
        browser.url('https://webdriver.io/docs/api.html')
        const title = $(".postHeaderTitle")
        console.log(title.getText())
    })
   
//5. Распечатать атрибут href элемента (использовать локатор "//*[text()="JSONWire protocol"]")

//6. Напечатать текст "test is " в строке поиска (использовать локатор "'#search_input_react'")

xit('should demonstrate the addValue command', () => {
    browser.url('https://webdriver.io')
    let input = $('#search_input_react')
    input.addValue('test is ')
    browser.pause(0000);
})
    
//7. Добавить к существующему тексту в строке поиска тест "DONE!" (использовать локатор "'#search_input_react'")

xit('should demonstrate the addValue command', () => {
    browser.url('https://webdriver.io')
    let input = $('#search_input_react')
    input.addValue('test is ')
    browser.pause(0000);
    input.addValue('"DONE!"')
    browser.pause(0000);
    
})

//8. Сделать паузу в тесте на 5 секунд.

xit('should demonstrate the addValue command', () => {
    browser.url('https://webdriver.io')
    let input = $('#search_input_react')
    input.addValue('test is ')
    input.addValue('"DONE!"')
    browser.pause(5000);
})


