import { browser, by, element, ElementFinder, promise } from 'protractor';

export class Home {
  // navigate to login page
  navigateToDashboard() {
    return browser.get('/home');
  }
 
  // check username input box is exist or not
  isUserNameInputBoxPresent(): promise.Promise<boolean> {
    return this.getUserNameInputBox().isPresent();
  }

   // get username input box
   getUserNameInputBox(): ElementFinder {
    return element(by.className('Email-Id'));
  }

}