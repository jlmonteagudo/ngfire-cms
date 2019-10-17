import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '@ngfire-cms/data-access';

@Component({
  selector: 'ngfire-cms-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  onSave(category: Category) {
    console.info(category);
    this.categoryService.insert(category);
  }


  // onSave(article: Article) {

  //   this.articleService.insert(article)
  //     .then(() => {
  //       this.appSnackbarService.info('Article has been created');
  //       this.router.navigate(['/article']);
  //     })
  //     .catch(error => this.appSnackbarService.warning(`Error creating the article: ${error}`));
  // }

}
