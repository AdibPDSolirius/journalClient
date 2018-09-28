import { ResourceRoutingModule } from './resource-routing.module';

describe('ResourceRoutingModule', () => {
  let resourceRoutingModule: ResourceRoutingModule;

  beforeEach(() => {
    resourceRoutingModule = new ResourceRoutingModule();
  });

  it('should create an instance', () => {
    expect(resourceRoutingModule).toBeTruthy();
  });
});
