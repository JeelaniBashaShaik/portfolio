import { JModule } from './j.module';

describe('JModule', () => {
  let jModule: JModule;

  beforeEach(() => {
    jModule = new JModule();
  });

  it('should create an instance', () => {
    expect(jModule).toBeTruthy();
  });
});
