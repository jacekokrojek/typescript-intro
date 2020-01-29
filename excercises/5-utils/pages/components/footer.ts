import { element, by } from 'protractor';

export  enum SocialLink {
  GooglPlus = 0
}

export class Footer {

  async getText(){
		return await element(by.css('footer')).getText();
  };
  
  async clickSocialLine(link: SocialLink){
    await element.all(by.css('.social a')).get(link).click();
  }
  
};
