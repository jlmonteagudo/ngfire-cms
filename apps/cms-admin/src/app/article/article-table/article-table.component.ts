import { AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ArticleTableDataSource } from './article-table-datasource';
import { Article } from '@ngfire-cms/data-access';

@Component({
  selector: 'ngfire-cms-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})
export class ArticleTableComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() articles: Article[];
  @Output() edit: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() delete: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() files: EventEmitter<Article> = new EventEmitter<Article>();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Article>;
  dataSource: ArticleTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'actions'];

  ngOnInit() {
    this.dataSource = new ArticleTableDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.articles.currentValue) {
      this.dataSource.setData(changes.articles.currentValue);
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onEdit(article: Article) {
    this.edit.emit(article);
  }

  onDelete(article: Article) {
    this.delete.emit(article);
  }

  onFiles(article: Article) {
    this.files.emit(article);
  }

}
