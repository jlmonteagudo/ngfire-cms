import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleFilesComponent } from './article-files/article-files.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ArticleUploadComponent } from './article-upload/article-upload.component';
import { ArticleTableComponent } from './article-table/article-table.component';
import { MaterialUiModule } from '@ngfire-cms/material-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilFireUploadModule } from '@ngfire-cms/util/fire-upload';

@NgModule({
  declarations: [ArticleEditComponent, ArticleFilesComponent, ArticleFormComponent, ArticleListComponent, ArticleNewComponent, ArticleUploadComponent, ArticleTableComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    UtilFireUploadModule
  ]
})
export class ArticleModule { }
