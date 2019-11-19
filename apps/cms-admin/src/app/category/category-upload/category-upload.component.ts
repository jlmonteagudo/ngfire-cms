import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, CategoryService } from '@ngfire-cms/data-access';
import { AppSnackbarService } from '@ngfire-cms/material-ui';
import CategoryConfig from '../category-config/category-config';

@Component({
  selector: 'ngfire-cms-category-upload',
  templateUrl: './category-upload.component.html',
  styleUrls: ['./category-upload.component.css']
})
export class CategoryUploadComponent implements OnInit {

  category: Category;

  constructor(private route: ActivatedRoute,
              private categoryService: CategoryService,
              private appSnackbarService: AppSnackbarService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.category = data.category;
    });
  }

  get filePath() {
    return `${CategoryConfig.collectionName}/${this.category.id}`;
  }

  onFilesUploaded(images: string[]) {

    let newImages = this.category.images || [];
    newImages = newImages.concat(images);

    this.category.images = newImages;

    this.categoryService.update(this.category)
      .then(() => this.appSnackbarService.info('Files have been uploaded'))
      .catch(error => this.appSnackbarService.error(`Error uploading files`));

  }

}
