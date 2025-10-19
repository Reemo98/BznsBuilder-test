import { Selector, t } from "testcafe";

class SignInPage{
    constructor(){
        this.Email = Selector('input[placeholder="Email"]');
        this.Password = Selector('input[placeholder="Password"]');
        this.LoginButton = Selector('button[data-automation-test="auto-button-login"]');
        this.ErrorCheck = Selector('div.snackbar-content-container');
        this.EmailCheck = Selector('span.error.ng-star-inserted');
    }
}

export default new SignInPage();