import { FrameworksModule } from './frameworks.module';

describe('FrameworksModule', () => {
  let frameworksModule: FrameworksModule;

  beforeEach(() => {
    frameworksModule = new FrameworksModule();
  });

  it('should create an instance', () => {
    expect(frameworksModule).toBeTruthy();
  });
});
