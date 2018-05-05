import { MailroomMaterialModule } from './mailroom-material.module';

describe('MailroomMaterialModule', () => {
  let mailroomMaterialModule: MailroomMaterialModule;

  beforeEach(() => {
    mailroomMaterialModule = new MailroomMaterialModule();
  });

  it('should create an instance', () => {
    expect(mailroomMaterialModule).toBeTruthy();
  });
});
