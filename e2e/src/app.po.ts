import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getToolbar(): ElementFinder {
    return element(by.css('.toolbar'));
  }
}
