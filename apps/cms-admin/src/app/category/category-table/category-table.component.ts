import { AfterViewInit, Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CategoryTableDataSource } from './category-table-datasource';
import { Category } from '@ngfire-cms/data-access';

@Component({
  selector: 'ngfire-cms-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() categories: Category[];
  @Output() edit: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() delete: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() files: EventEmitter<Category> = new EventEmitter<Category>();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Category>;
  dataSource: CategoryTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'actions'];

  ngOnInit() {
    this.dataSource = new CategoryTableDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.categories.currentValue) {
      this.dataSource.setData(changes.categories.currentValue);
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onEdit(category: Category) {
    this.edit.emit(category);
  }

  onDelete(category: Category) {
    this.delete.emit(category);
  }

  onFiles(category: Category) {
    this.files.emit(category);
  }

}
