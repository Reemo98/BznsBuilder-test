import { Selector, t } from "testcafe";

class SignUpPage{
    constructor(){
        this.Email = Selector('input[placeholder="Email"]');
        this.Password = Selector('input[placeholder="Password"]');
        this.RegisterButton = Selector('button[data-automation-test="auto-button-register"]');
        this.ErrorCheck = Selector('span.error.ng-star-inserted');
    }
}

export default new SignUpPage();