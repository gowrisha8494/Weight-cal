import { Angular2cliPage } from './app.po';

describe('angular2cli App', () => {
  let page: Angular2cliPage;

  beforeEach(() => {
    page = new Angular2cliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
