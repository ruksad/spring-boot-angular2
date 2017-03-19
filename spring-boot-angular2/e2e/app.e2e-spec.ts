import { SpringBootAngular2Page } from './app.po';

describe('spring-boot-angular2 App', function() {
  let page: SpringBootAngular2Page;

  beforeEach(() => {
    page = new SpringBootAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
