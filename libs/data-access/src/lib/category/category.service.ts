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
    return this.db.doc<Category>(`${this.COLLECTION_NAME}/${category.id}`).set(category);
  }

  update(updatedCategory: Partial<Category>): Promise<void> {
    return this.db.doc<Category>(`${this.COLLECTION_NAME}/${updatedCategory.id}`).update(updatedCategory);
  }

  delete(id: string): Promise<void> {
    return this.db.doc<Category>(`${this.COLLECTION_NAME}/${id}`).delete();
  }

  deleteImage(category: Partial<Category>, imageURL: string): Promise<void> {

    const images: string[] = category.images.filter((image: string) => image !== imageURL);

    category.images = images;

    if (imageURL === category.featuredImageURL) { category.featuredImageURL = null; }

    if (!category.featuredImageURL && category.images.length > 0) {
      category.featuredImageURL = category.images[0];
    }

    return this.update(category);

  }

}
