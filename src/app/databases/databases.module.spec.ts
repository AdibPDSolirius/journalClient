import { DatabasesModule } from './databases.module';

describe('DatabasesModule', () => {
  let databaseModule: DatabasesModule;

  beforeEach(() => {
    databaseModule = new DatabasesModule();
  });

  it('should create an instance', () => {
    expect(databaseModule).toBeTruthy();
  });
});
