import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSnackbarService } from '@ngfire-cms/material-ui';
import { Article, ArticleService } from '@ngfire-cms/data-access';

@Component({
  selector: 'ngfire-cms-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private router: Router,
              private appSnackbarService: AppSnackbarService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.article = data.article;
    });
  }

  onSave(updatedArticle: Article) {

    this.articleService.update(updatedArticle).then(
      () => {
        this.appSnackbarService.info('Article has been updated');
        this.router.navigate(['/article']);
      })
      .catch(error => this.appSnackbarService.error(`Error updating the article`));

  }

}
