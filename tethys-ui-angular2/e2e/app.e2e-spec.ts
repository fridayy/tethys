import { TethysUiAngular2Page } from './app.po';

describe('tethys-ui-angular2 App', function() {
  let page: TethysUiAngular2Page;

  beforeEach(() => {
    page = new TethysUiAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
