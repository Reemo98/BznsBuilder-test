import { ClientFunction } from "testcafe";
import hp from '../pages/HomePage';
import sip from '../pages/SignInPage';

const URL = "https://stgapp.bznsbuilder.com";
const getURL = ClientFunction(() => window.location.href); //to get current URL

fixture("SignIn Fixture")
    .page(URL);

test('SignIn Page Test #1 - Positive', async t =>{
    await t
    .maximizeWindow()
    .click(hp.SignInLink)
    .typeText(sip.Email, 'test445@test.com') 
    .typeText(sip.Password,'P@ssword445')
    .takeScreenshot()
    .click(sip.LoginButton)
    .expect(getURL()).contains('create-company')
    .takeScreenshot();
});

test('SignIn Page Test #2 - Negative (Email validation)', async t =>{
    await t
    .maximizeWindow()
    .click(hp.SignInLink)
    .typeText(sip.Email,'test.com')
    .typeText(sip.Password,'P@ssword445')
    .takeScreenshot()
    .click(sip.LoginButton)
    .expect(sip.EmailCheck().innerText)
        .contains('Invalid email format', 'The email error message is incorrect')
    .takeScreenshot();
}); 

test('SignIn Page Test #3 - Negative (Invalid Password)', async t =>{
    await t
    .maximizeWindow()
    .click(hp.SignInLink)
    .typeText(sip.Email,'test445@test.com')
    .typeText(sip.Password,'P@ssword009')
    .takeScreenshot()
    .click(sip.LoginButton)
    .expect(sip.ErrorCheck().innerText)
    .contains('Wrong email or password', 'The error message is incorrect')
    .takeScreenshot();
});