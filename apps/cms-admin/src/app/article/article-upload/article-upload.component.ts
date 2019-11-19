import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticleService } from '@ngfire-cms/data-access';
import { AppSnackbarService } from '@ngfire-cms/material-ui';
import ArticleConfig from '../article-config/article-config';

@Component({
  selector: 'ngfire-cms-article-upload',
  templateUrl: './article-upload.component.html',
  styleUrls: ['./article-upload.component.css']
})
export class ArticleUploadComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private appSnackbarService: AppSnackbarService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.article = data.article;
    });
  }

  get filePath() {
    return `${ArticleConfig.collectionName}/${this.article.id}`;
  }

  onFilesUploaded(images: string[]) {

    let newImages = this.article.images || [];
    newImages = newImages.concat(images);

    this.article.images = newImages;

    this.articleService.update(this.article)
      .then(() => this.appSnackbarService.info('Files have been uploaded'))
      .catch(error => this.appSnackbarService.error(`Error uploading files`));

  }

}
