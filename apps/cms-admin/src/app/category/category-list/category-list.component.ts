import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Category, CategoryService } from '@ngfire-cms/data-access';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'ngfire-cms-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  filteredCategories$: Observable<Category[]>;
  filter: FormControl = new FormControl('');

  constructor(private categoryService: CategoryService) {
    this.setupTableFiltering();
  }

  ngOnInit() {
  }

  private setupTableFiltering() {

    this.filteredCategories$ = combineLatest([
      this.categoryService.findAll(),
      this.filter.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([categories, filterString]) => categories.filter(category => category.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );

  }

}
