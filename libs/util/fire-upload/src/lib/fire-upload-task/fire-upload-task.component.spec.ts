import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireUploadTaskComponent } from './fire-upload-task.component';

describe('FireUploadTaskComponent', () => {
  let component: FireUploadTaskComponent;
  let fixture: ComponentFixture<FireUploadTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireUploadTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireUploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
