import { browser, element, by } from 'protractor';

export class TethysUiAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getNavigation() {
    return element(by.css('.mat-tab-links'));
  }

  getTodosPageLink() {
    return element(by.linkText("Todos"));
  }

  getTodoPageTitle() {
    return element(by.css('h2')).getText();
  }

}
