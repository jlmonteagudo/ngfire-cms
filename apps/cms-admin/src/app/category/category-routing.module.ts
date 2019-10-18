import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'new', component: CategoryNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
