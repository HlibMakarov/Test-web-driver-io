const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })

it('should demonstrate the addValue command', () =>{
    browser.url('https://webdriver.io')
    let input = $('#search_input_react')
    input.addValue('test')
    browser.pause(4000);
    input.addValue(123)
    browser.pause(2000);

    value = input.getValue()
    assert(value === 'test123') //true
    })

it('should demonstrate the setValue command', function () {
    browser.url('https://webdriver.io');
    const elem = $('search_input_react');
    elem.setValue('test123');
    browser.pause(2000);
})
})