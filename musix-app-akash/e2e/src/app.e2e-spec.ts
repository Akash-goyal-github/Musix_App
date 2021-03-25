import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should get username input box', async () => {
    await page.navigateTo();
    expect(page.isUserNameInputBoxPresent())
    .toBeTruthy(`<input type="text" placeholder="Enter Your Email-Id" class="Email-Id" formControlName="username"> should exist in home.component.html`);
    // expect(await page.getTitleText()).toEqual('musix-App app is running!');
  });


  
  it('should get password input box', async () => {
    await page.navigateTo();
    expect(page.isUserNameInputBoxPresent())
    .toBeTruthy(`<input type="password" placeholder="Enter Password" class="password" formControlName="password"> should exist in home.component.html`);
    // expect(await page.getTitleText()).toEqual('musix-App app is running!');
  });


  

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
 