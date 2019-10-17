import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryNewComponent } from './category-new/category-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: 'new', component: CategoryNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
