import { MstartupPage } from './app.po';

describe('mstartup App', () => {
  let page: MstartupPage;

  beforeEach(() => {
    page = new MstartupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
