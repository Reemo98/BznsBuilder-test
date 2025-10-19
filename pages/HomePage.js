import { Selector } from "testcafe";

class HomePage{
    constructor(){
        this.SignUpLink = Selector('button.mb-5').withText('Sign Up');
        this.SignInLink = Selector('button[data-automation-test="auto-button-loginOpen"]'); 
    }
}

export default new HomePage();