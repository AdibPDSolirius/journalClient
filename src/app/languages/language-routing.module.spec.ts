import { LanguageRoutingModule } from './language-routing.module';

describe('LanguageRoutingModule', () => {
  let languageRoutingModule: LanguageRoutingModule;

  beforeEach(() => {
    languageRoutingModule = new LanguageRoutingModule();
  });

  it('should create an instance', () => {
    expect(languageRoutingModule).toBeTruthy();
  });
});
