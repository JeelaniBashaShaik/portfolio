import { JRoutingModule } from './j-routing.module';

describe('JRoutingModule', () => {
  let jRoutingModule: JRoutingModule;

  beforeEach(() => {
    jRoutingModule = new JRoutingModule();
  });

  it('should create an instance', () => {
    expect(jRoutingModule).toBeTruthy();
  });
});
