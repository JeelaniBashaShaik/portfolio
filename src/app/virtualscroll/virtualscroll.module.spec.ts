import { VirtualscrollModule } from './virtualscroll.module';

describe('VirtualscrollModule', () => {
  let virtualscrollModule: VirtualscrollModule;

  beforeEach(() => {
    virtualscrollModule = new VirtualscrollModule();
  });

  it('should create an instance', () => {
    expect(virtualscrollModule).toBeTruthy();
  });
});
