import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '@ngfire-cms/data-access';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AppSnackbarService, AppConfirmationDialogComponent } from '@ngfire-cms/material-ui';

@Component({
  selector: 'ngfire-cms-article-files',
  templateUrl: './article-files.component.html',
  styleUrls: ['./article-files.component.css']
})
export class ArticleFilesComponent implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private appSnackbarService: AppSnackbarService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.article = data.article;
    });
  }

  onDelete(imageURL: string) {

    const dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
      data: 'Do you confirm the deletion of this image?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteImage(this.article, imageURL);
      }
    });

  }

  onFeatureImage(imageURL: string) {
    this.article.featuredImageURL = imageURL;
    this.articleService.update(this.article)
      .then(() => this.appSnackbarService.info('Featured image has been updated'));
  }

  deleteImage(article: Article, imageURL: string) {
    this.articleService.deleteImage(article, imageURL)
      .then(() => this.appSnackbarService.info('Image has been deleted'));
  }

}
