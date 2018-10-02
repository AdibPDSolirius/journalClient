import { FrameworksRoutingModule } from './frameworks-routing.module';

describe('FrameworksRoutingModule', () => {
  let frameworksRoutingModule: FrameworksRoutingModule;

  beforeEach(() => {
    frameworksRoutingModule = new FrameworksRoutingModule();
  });

  it('should create an instance', () => {
    expect(frameworksRoutingModule).toBeTruthy();
  });
});
