import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUploadComponent } from './article-upload.component';

describe('ArticleUploadComponent', () => {
  let component: ArticleUploadComponent;
  let fixture: ComponentFixture<ArticleUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
