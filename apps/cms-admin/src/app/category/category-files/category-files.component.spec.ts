import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilesComponent } from './category-files.component';

describe('CategoryFilesComponent', () => {
  let component: CategoryFilesComponent;
  let fixture: ComponentFixture<CategoryFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
