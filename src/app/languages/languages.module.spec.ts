import { LanguagesModule } from './languages.module';

describe('LanguagesModule', () => {
  let languageModule: LanguagesModule;

  beforeEach(() => {
    languageModule = new LanguagesModule();
  });

  it('should create an instance', () => {
    expect(languageModule).toBeTruthy();
  });
});
