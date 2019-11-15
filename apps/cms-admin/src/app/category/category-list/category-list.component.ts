import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Category, CategoryService } from '@ngfire-cms/data-access';
import { FormControl } from '@angular/forms';
import { startWith, map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AppConfirmationDialogComponent, AppSnackbarService } from '@ngfire-cms/material-ui';

@Component({
  selector: 'ngfire-cms-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  filteredCategories$: Observable<Category[]>;
  filter: FormControl = new FormControl('');

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private appSnackbarService: AppSnackbarService) {

    this.setupTableFiltering();
  }

  ngOnInit() {
  }

  private setupTableFiltering() {

    this.filteredCategories$ = combineLatest([
      this.categoryService.findAll(),
      this.filter.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([categories, filterString]) => categories.filter(category => category.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)),
      shareReplay()
    );

  }

  onEdit(category: Category) {
    this.router.navigate(['edit', category.id], {relativeTo: this.route});
  }

  onDelete(category: Category) {

    const dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
      data: 'Do you confirm the deletion of the category?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.deleteCategory(category); }
    });

  }

  deleteCategory(category: Category) {
    this.categoryService.delete(category.id)
      .then(() => this.appSnackbarService.info('Category has been deleted'))
      .catch((error) => this.appSnackbarService.info('Error deleting the category'));

  }

  onFiles(category: Category) {
    this.router.navigate(['files', category.id], {relativeTo: this.route});
  }

}
