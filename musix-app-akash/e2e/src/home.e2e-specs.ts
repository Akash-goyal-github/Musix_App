import { Home } from '../page-objects/home.po';

describe('workspace-project App', () => {
  let page: Home;

  beforeEach(() => {
    page = new Home();
  });

  it('should get username input box', () => {
   // page.navigateToDashboard();
    expect(page.isUserNameInputBoxPresent())
    .toBeTruthy(`<input type="text" placeholder="Enter Your Email-Id" class="Email-Id" formControlName="username"> should exist in login.component.html`);
  });

});