import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '@ngfire-cms/data-access';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AppSnackbarService, AppConfirmationDialogComponent } from '@ngfire-cms/material-ui';

@Component({
  selector: 'ngfire-cms-category-files',
  templateUrl: './category-files.component.html',
  styleUrls: ['./category-files.component.css']
})
export class CategoryFilesComponent implements OnInit {

  category: Category;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private appSnackbarService: AppSnackbarService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.category = data.category;
    });
  }

  onDelete(imageURL: string) {

    const dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
      data: 'Do you confirm the deletion of this image?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteImage(this.category, imageURL);
      }
    });

  }

  onFeatureImage(imageURL: string) {
    this.category.featuredImageURL = imageURL;
    this.categoryService.update(this.category)
      .then(() => this.appSnackbarService.info('Featured image has been updated'));
  }

  deleteImage(category: Category, imageURL: string) {
    this.categoryService.deleteImage(category, imageURL)
      .then(() => this.appSnackbarService.info('Image has been deleted'));
  }

}
