import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryResolver } from '@ngfire-cms/data-access';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryFilesComponent } from './category-files/category-files.component';
import { CategoryUploadComponent } from './category-upload/category-upload.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'new',
    component: CategoryNewComponent
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent,
    resolve: {
      category: CategoryResolver
    }
  },
  {
    path: 'files/:id',
    component: CategoryFilesComponent,
    resolve: {
      category: CategoryResolver
    }
  },
  {
    path: 'upload/:id',
    component: CategoryUploadComponent,
    resolve: {
      category: CategoryResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
