import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Article, ArticleService } from '@ngfire-cms/data-access';
import { FormControl } from '@angular/forms';
import { startWith, map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AppConfirmationDialogComponent, AppSnackbarService } from '@ngfire-cms/material-ui';


@Component({
  selector: 'ngfire-cms-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  filteredArticles$: Observable<Article[]>;
  filter: FormControl = new FormControl('');

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private appSnackbarService: AppSnackbarService) {

    this.setupTableFiltering();
  }

  ngOnInit() {
  }

  private setupTableFiltering() {

    this.filteredArticles$ = combineLatest([
      this.articleService.findAll(),
      this.filter.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([articles, filterString]) => articles.filter(article => article.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)),
      shareReplay()
    );

  }

  onEdit(article: Article) {
    this.router.navigate(['edit', article.id], {relativeTo: this.route});
  }

  onDelete(article: Article) {

    const dialogRef = this.dialog.open(AppConfirmationDialogComponent, {
      data: 'Do you confirm the deletion of the article?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.deleteArticle(article); }
    });

  }

  deleteArticle(article: Article) {
    this.articleService.delete(article.id)
      .then(() => this.appSnackbarService.info('Article has been deleted'))
      .catch((error) => this.appSnackbarService.info('Error deleting the article'));

  }

  onFiles(article: Article) {
    this.router.navigate(['files', article.id], {relativeTo: this.route});
  }

}
