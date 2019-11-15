import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewComponent } from './article-new/article-new.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: 'new',
    component: ArticleNewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
