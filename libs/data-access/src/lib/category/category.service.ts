import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly COLLECTION_NAME = '/categories';

  constructor(private db: AngularFirestore) { }

  findAll(): Observable<Category[]> {
    return this.db.collection<Category>(this.COLLECTION_NAME).valueChanges();
  }

  findOne(id: string): Observable<Category> {
    return this.db.doc<Category>(`${this.COLLECTION_NAME}/${id}`).valueChanges();
  }

  insert(category: Category): Promise<void> {
    // return this.db.collection<Category>(this.COLLECTION_NAME).add(category);
    return this.db.doc<Category>(`${this.COLLECTION_NAME}/${category.id}`).set(category);
  }

  update(updatedCategory: Partial<Category>): Promise<void> {
    return this.db.doc<Category>(`${this.COLLECTION_NAME}/${updatedCategory.id}`).update(updatedCategory);
  }

}
