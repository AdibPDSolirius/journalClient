import { LibrariesModule } from './libraries.module';

describe('LibrariesModule', () => {
  let librariesModule: LibrariesModule;

  beforeEach(() => {
    librariesModule = new LibrariesModule();
  });

  it('should create an instance', () => {
    expect(librariesModule).toBeTruthy();
  });
});
