import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFilesComponent } from './article-files.component';

describe('ArticleFilesComponent', () => {
  let component: ArticleFilesComponent;
  let fixture: ComponentFixture<ArticleFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
