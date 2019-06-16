import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';

describe('VirtualScrollRoutingModule', () => {
  let virtualScrollRoutingModule: VirtualScrollRoutingModule;

  beforeEach(() => {
    virtualScrollRoutingModule = new VirtualScrollRoutingModule();
  });

  it('should create an instance', () => {
    expect(virtualScrollRoutingModule).toBeTruthy();
  });
});
