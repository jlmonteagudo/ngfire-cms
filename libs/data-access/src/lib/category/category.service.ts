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

  insert(category: Category): Promise<DocumentReference> {
    return this.db.collection<Category>(this.COLLECTION_NAME).add(category);
  }

  findAll(): Observable<Category[]> {
    return this.db.collection<Category>(this.COLLECTION_NAME).valueChanges();
  }

}
