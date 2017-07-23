import { FinalProjectAngularPage } from './app.po';

describe('final-project-angular App', () => {
  let page: FinalProjectAngularPage;

  beforeEach(() => {
    page = new FinalProjectAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
