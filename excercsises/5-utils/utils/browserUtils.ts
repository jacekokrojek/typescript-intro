import { browser, ElementFinder } from 'protractor';

export class BrowserUtils {

    public static async sendKey(targetElement: ElementFinder, text: string) {
        await targetElement.clear();
        await targetElement.sendKeys(text);
    }

    public static scrollToElement = function(el){
        var windowHeight;
        browser.driver.manage().window().getSize()
            .then(function (windowSize) {
                windowHeight = windowSize.height;
                return el.getWebElement().getLocation();
            })
            .then(function (location) {
                return browser.executeScript('window.scrollTo(0, ' + (location.y - Math.floor(windowHeight / 2)) +');');
            });
            return browser.sleep(3000);
      };
}

