import { DatabasesRoutingModule } from './databases-routing.module';

describe('DatabasesRoutingModule', () => {
  let databaseRoutingModule: DatabasesRoutingModule;

  beforeEach(() => {
    databaseRoutingModule = new DatabasesRoutingModule();
  });

  it('should create an instance', () => {
    expect(databaseRoutingModule).toBeTruthy();
  });
});
