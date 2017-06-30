import { EAppPage } from './app.po';

describe('e-app App', () => {
  let page: EAppPage;

  beforeEach(() => {
    page = new EAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
