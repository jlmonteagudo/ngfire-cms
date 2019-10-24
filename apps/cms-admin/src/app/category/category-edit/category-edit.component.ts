import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSnackbarService } from '@ngfire-cms/material-ui';
import { Category, CategoryService } from '@ngfire-cms/data-access';

@Component({
  selector: 'ngfire-cms-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category: Category;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router,
              private appSnackbarService: AppSnackbarService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.category = data.category;
    });
  }

  onSave(updatedCategory: Category) {

    this.categoryService.update(updatedCategory).then(
      () => {
        this.appSnackbarService.info('Category has been updated');
        this.router.navigate(['/category']);
      })
      .catch(error => this.appSnackbarService.error(`Error updating the category`));

  }

}
