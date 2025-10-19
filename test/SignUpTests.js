import { ClientFunction } from "testcafe";
import hp from '../pages/HomePage';
import sup from '../pages/SignUpPage';

const URL = "https://stgapp.bznsbuilder.com";
const getURL = ClientFunction(() => window.location.href); //to get current URL

var randomNumber = Math.floor(Math.random()*1000);
var randomEmail = 'randomTest' + randomNumber + '@test.com';

fixture("SignUp Fixture")
    .page(URL);

test('SignUp Page Test #1 - Positive', async t =>{
    await t
    .maximizeWindow()
    .click(hp.SignUpLink)
    .typeText(sup.Email, randomEmail) 
    .typeText(sup.Password,'P@ssword445')
    .takeScreenshot()
    .click(sup.RegisterButton)
    .expect(getURL()).contains('create-company')
    .takeScreenshot();
});

test('SignUp Page Test #2 - Negative (Email validation)', async t =>{
    await t
    .maximizeWindow()
    .click(hp.SignUpLink)
    .typeText(sup.Email,'test.com')
    .typeText(sup.Password,'P@ssword002')
    .takeScreenshot()
    .click(sup.RegisterButton)
    .expect(sup.ErrorCheck().innerText)
        .contains('Invalid email format', 'The email error message is incorrect')
    .takeScreenshot();
});

test('SignUp Page Test #3 - Negative (Password validation)', async t =>{
    await t
    .maximizeWindow()
    .click(hp.SignUpLink)
    .typeText(sup.Email,'test@test.com')
    .typeText(sup.Password,'test')
    .takeScreenshot()
    .click(sup.RegisterButton)
    .expect(sup.ErrorCheck().innerText)
        .contains('Minimum length is 8', 'The password error message is incorrect')
    .takeScreenshot();
});