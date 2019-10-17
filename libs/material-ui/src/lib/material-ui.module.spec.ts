import { async, TestBed } from '@angular/core/testing';
import { MaterialUiModule } from './material-ui.module';

describe('MaterialUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MaterialUiModule).toBeDefined();
  });
});
