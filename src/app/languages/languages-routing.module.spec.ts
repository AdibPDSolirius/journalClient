import { LanguagesRoutingModule } from './languages-routing.module';

describe('LanguagesRoutingModule', () => {
  let languageRoutingModule: LanguagesRoutingModule;

  beforeEach(() => {
    languageRoutingModule = new LanguagesRoutingModule();
  });

  it('should create an instance', () => {
    expect(languageRoutingModule).toBeTruthy();
  });
});
