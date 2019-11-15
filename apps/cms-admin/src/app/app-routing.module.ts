import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'article', pathMatch: 'full' },
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
