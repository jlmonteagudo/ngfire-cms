import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryResolver } from '@ngfire-cms/data-access';
import { CategoryEditComponent } from './category-edit/category-edit.component';

const routes: Routes = [
  { path: '',
    component: CategoryListComponent
  },
  { path: 'new',
    component: CategoryNewComponent
  },
  { path: 'edit/:id',
    component: CategoryEditComponent,
    resolve: {
      category: CategoryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
