import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFailedModalComponent } from './login-failed-modal.component';

describe('LoginFailedModalComponent', () => {
  let component: LoginFailedModalComponent;
  let fixture: ComponentFixture<LoginFailedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFailedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFailedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
