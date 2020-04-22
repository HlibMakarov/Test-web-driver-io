const assert = require('assert')

describe('webdriver.io page', () => {

    it('should demonstrate the getLocation function', () => {       
         browser.url('https://webdriver.io');      
           const logo = $('#search_input_react')    
             const location = logo.getLocation();    
             console.log(location);          
            const xLocation = logo.getLocation('x')    
              console.log("xLocation" + xLocation);     });

        it('should demonstrate the getText function', () => {     
          browser.url('https://webdriver.io');      
          const blogButton = $('[href="/blog/"]')    
            console.log("Text for element:" + blogButton.getText());    });
})



