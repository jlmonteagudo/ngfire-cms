import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '@ngfire-cms/data-access';
import { AppSnackbarService } from '@ngfire-cms/material-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'ngfire-cms-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private appSnackbarService: AppSnackbarService,
              private router: Router) { }

  ngOnInit() {
  }

  onSave(category: Category) {
    this.categoryService.insert(category)
      .then(() => {
        this.appSnackbarService.info('Category has been created');
        this.router.navigate(['/']);
      })
      .catch(error => this.appSnackbarService.error(`Error creating the category: ${error}`));
  }

}
