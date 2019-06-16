import { PersonalRoutingModule } from './personal-routing.module';

describe('PersonalRoutingModule', () => {
  let personalRoutingModule: PersonalRoutingModule;

  beforeEach(() => {
    personalRoutingModule = new PersonalRoutingModule();
  });

  it('should create an instance', () => {
    expect(personalRoutingModule).toBeTruthy();
  });
});
