import { A2projectPage } from './app.po';

describe('a2project App', function() {
  let page: A2projectPage;

  beforeEach(() => {
    page = new A2projectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
