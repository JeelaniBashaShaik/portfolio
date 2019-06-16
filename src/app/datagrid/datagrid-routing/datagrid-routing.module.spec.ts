import { DatagridRoutingModule } from './datagrid-routing.module';

describe('DatagridRoutingModule', () => {
  let datagridRoutingModule: DatagridRoutingModule;

  beforeEach(() => {
    datagridRoutingModule = new DatagridRoutingModule();
  });

  it('should create an instance', () => {
    expect(datagridRoutingModule).toBeTruthy();
  });
});
