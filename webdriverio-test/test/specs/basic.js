const assert = require('assert')

describe('webdriver.io page', () => {
    
    xit('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })

    xit('should demonstrate the click command', () => {    
        browser.url('https://webdriver.io');    
        const blogButton = $('[href="/docs/api.html"]')   
         browser.pause(2000);    
         blogButton.click()      
       browser.pause(2000);      
    })
    
    xit('should demonstrate the getText function', () => {     
        browser.url('https://webdriver.io');      
        console.log(browser.getUrl());  
      });

      




})



