import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from '@ngfire-cms/data-access';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import slugify from 'slugify';

@Component({
  selector: 'ngfire-cms-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input() category: Category;
  @Output() save: EventEmitter<Category> = new EventEmitter<Category>();

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.categoryForm = this.fb.group({
      id: [this.category && this.category.id, [Validators.required, Validators.maxLength(150)]],
      title: [this.category && this.category.title, [Validators.required, Validators.maxLength(150)]],
    });

    if (this.category) { this.categoryForm.controls.id.disable(); }

  }

  onSubmit() {
    const category: Category = this.categoryForm.value;
    if (this.category) { category.id = this.category.id; }
    this.save.emit(category);
  }

  setId() {
    let content: string = this.categoryForm.controls.id.value;
    if (!content) { content = this.categoryForm.controls.title.value; }
    if (!content) { return; }

    this.categoryForm.controls.id.setValue(slugify(content.toLowerCase()));
  }

}
