import { browser, by, element, ElementFinder, promise  } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get('/');
  }

  // async getTitleText(): Promise<string> {
  //   return element(by.css('app-root .content span')).getText();
  // }
 // check username input box is exist or not
 isUserNameInputBoxPresent(): promise.Promise<boolean> {
  return this.getUserNameInputBox().isPresent();
}

 // get username input box
 getUserNameInputBox(): ElementFinder {
  return element(by.className('Email-Id'));
}

 // get password input box
 getPasswordInputBox(): ElementFinder {
  return element(by.className('password'));
}
// check password input box is exist or not
isPasswordInputBoxPresent(): promise.Promise<boolean> {
  return this.getPasswordInputBox().isPresent();
}

}
