import { browser, element, by, ElementArrayFinder } from 'protractor';
import { WaitUtils } from '../utils/waitUtils';
import { User } from '../utils/users/user';

export class SignIn {

  async get () {
    await browser.get(`/jak-to-zrobic-w-js/signin.html`);
  }

  async as(user: User){
		await element(by.id('usernamesignin')).sendKeys(user.login);
		await element(by.id('passwordsignin')).sendKeys(user.pass);
		await element(by.id('admin')).click();
    await WaitUtils.waitLoaderInvisible();
	};
  
};
