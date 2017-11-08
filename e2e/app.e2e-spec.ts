import { NgPdfFormEditorPage } from './app.po';

describe('ng-pdf-form-editor App', function() {
  let page: NgPdfFormEditorPage;

  beforeEach(() => {
    page = new NgPdfFormEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
