import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryFilesComponent } from './category-files/category-files.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryUploadComponent } from './category-upload/category-upload.component';
import { CategoryTableComponent } from './category-table/category-table.component';

import { MaterialUiModule } from '@ngfire-cms/material-ui';
import { UtilFireUploadModule } from '@ngfire-cms/util/fire-upload';

@NgModule({
  declarations: [CategoryFormComponent, CategoryNewComponent, CategoryEditComponent, CategoryFilesComponent, CategoryListComponent, CategoryUploadComponent, CategoryTableComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    UtilFireUploadModule
  ]
})
export class CategoryModule { }
