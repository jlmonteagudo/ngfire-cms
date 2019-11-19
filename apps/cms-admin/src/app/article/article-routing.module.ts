import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleFilesComponent } from './article-files/article-files.component';
import { ArticleUploadComponent } from './article-upload/article-upload.component';
import { ArticleResolver } from '@ngfire-cms/data-access';


const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: 'new',
    component: ArticleNewComponent
  },
  {
    path: 'edit/:id',
    component: ArticleEditComponent,
    resolve: {
      article: ArticleResolver
    }
  },
  {
    path: 'files/:id',
    component: ArticleFilesComponent,
    resolve: {
      article: ArticleResolver
    }
  },
  {
    path: 'upload/:id',
    component: ArticleUploadComponent,
    resolve: {
      article: ArticleResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
