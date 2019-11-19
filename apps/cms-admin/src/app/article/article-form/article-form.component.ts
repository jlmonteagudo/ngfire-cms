import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Article } from '@ngfire-cms/data-access';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import slugify from 'slugify';

@Component({
  selector: 'ngfire-cms-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  @Input() article: Article;
  @Output() save: EventEmitter<Article> = new EventEmitter<Article>();

  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.articleForm = this.fb.group({
      id: [this.article && this.article.id, [Validators.required, Validators.maxLength(150)]],
      title: [this.article && this.article.title, [Validators.required, Validators.maxLength(150)]],
    });

    if (this.article) { this.articleForm.controls.id.disable(); }

  }

  onSubmit() {
    const article: Article = this.articleForm.value;
    if (this.article) { article.id = this.article.id; }
    this.save.emit(article);
  }

  setId() {
    let content: string = this.articleForm.controls.id.value;
    if (!content) { content = this.articleForm.controls.title.value; }
    if (!content) { return; }

    this.articleForm.controls.id.setValue(slugify(content.toLowerCase()));
  }

}
