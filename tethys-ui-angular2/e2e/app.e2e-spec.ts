import { TethysUiAngular2Page } from './app.po';

describe('tethys-ui-angular2 App', function() {
  let page: TethysUiAngular2Page;

  beforeEach(() => {
    page = new TethysUiAngular2Page();
  });

  it('navigation is present', () => {
    page.navigateTo();
    expect(page.getNavigation().isDisplayed()).toEqual(true);
  });

  it('navigating to todo page by clicking shows correct page', () => {
    page.getTodosPageLink().click();
    expect(page.getTodoPageTitle()).toBe("Todos")
  });
});
