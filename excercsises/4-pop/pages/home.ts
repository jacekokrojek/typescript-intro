import { browser, element, by, ElementArrayFinder } from 'protractor';

export class HomePage {

  menuItems: ElementArrayFinder; 

  constructor () {
    this.menuItems = element.all(by.css('ul.nav > li > a'))
  }
  async get() {
    await browser.get('/jak-to-zrobic-w-js');
  };

  async getTitle () {
    return await browser.getTitle();
  };

  async clickMenuAtIdx (idx) {
    await this.menuItems.get(idx).click();
  };

  getMenuTextAtIdx (idx) {
    return this.menuItems.get(idx);
  };
  
};
