import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '@ngfire-cms/data-access';
import { AppSnackbarService } from '@ngfire-cms/material-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'ngfire-cms-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  constructor(private articleService: ArticleService,
    private appSnackbarService: AppSnackbarService,
    private router: Router) { }

  ngOnInit() {
  }

  onSave(article: Article) {
    this.articleService.insert(article)
      .then(() => {
        this.appSnackbarService.info('Article has been created');
        this.router.navigate(['/']);
      })
      .catch(error => this.appSnackbarService.error(`Error creating the article: ${error}`));
  }

}
