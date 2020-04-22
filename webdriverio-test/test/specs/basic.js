const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })

it('should demonstrate the addValue command', () =>{     // add value
    browser.url('https://webdriver.io')
    let input = $('#search_input_react')
    input.addValue('test')
    browser.pause(4000);
    input.addValue(123)
    browser.pause(4000);

    value = input.getValue()
    assert(value === 'test123') //true
    })


it('should demonstrate  setValue command', function () {    // setvalue
    browser.url('https://webdriver.io');       
     const elem = $('#search_input_react');        
     elem.setValue('test123');       
      browser.pause(2000);    })


it('should demonstrate the click command', () => {    //Кликание
        browser.url('https://webdriver.io');    
        const blogButton = $('[href="/blog/"]')   
         browser.pause(2000);    
         blogButton.click()      
       browser.pause(2000);      
       const guideButton = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')    
         guideButton.click()    
         browser.pause(2000);  
      })
})



