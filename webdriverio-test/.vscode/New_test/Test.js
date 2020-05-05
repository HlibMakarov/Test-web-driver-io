const assert = require("assert");



xdescribe("Shareline  discount %0 1-19", function() {

    it("Shareline discount 0% points(1))", function() {
        browser.url("http://www.sharelane.com/cgi-bin/main.py");
        $('[href="../test_portal.html"]').click();
        $('[href="../cgi-bin/create_account.py"]').click();
        $('[value="Create new user account"]').click();
        $('[value="Auto Login"]').click();
        $('/html/body/center/table/tbody/tr[5]/td/table/tbody/tr/td[1]/table/tbody/tr[3]/td/a').click();
        $('[src="../images/add_to_cart.gif"]').click();
        $('[href="./shopping_cart.py"]').click();
        const InputField = $('body > center > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=text]')
        InputField.doubleClick();
        InputField.clearValue();
        InputField.addValue('1');
        
        $('[value="Update"]').click();
        const DiscountFunction = $ ('/html/body/center/table/tbody/tr[6]/td/table/tbody/tr[2]/td[5]/p/b')
        assert.strictEqual(DiscountFunction.getText(),'0');
        });
        
        
    })