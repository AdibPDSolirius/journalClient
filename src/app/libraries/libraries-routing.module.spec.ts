import { LibrariesRoutingModule } from './libraries-routing.module';

describe('LibrariesRoutingModule', () => {
  let librariesRoutingModule: LibrariesRoutingModule;

  beforeEach(() => {
    librariesRoutingModule = new LibrariesRoutingModule();
  });

  it('should create an instance', () => {
    expect(librariesRoutingModule).toBeTruthy();
  });
});
