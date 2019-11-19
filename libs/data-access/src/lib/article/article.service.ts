import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly COLLECTION_NAME = '/articles';

  constructor(private db: AngularFirestore) { }

  findAll(): Observable<Article[]> {
    return this.db.collection<Article>(this.COLLECTION_NAME).valueChanges();
  }

  findOne(id: string): Observable<Article> {
    return this.db.doc<Article>(`${this.COLLECTION_NAME}/${id}`).valueChanges();
  }

  insert(article: Article): Promise<void> {
    return this.db.doc<Article>(`${this.COLLECTION_NAME}/${article.id}`).set(article);
  }

  update(updatedArticle: Partial<Article>): Promise<void> {
    return this.db.doc<Article>(`${this.COLLECTION_NAME}/${updatedArticle.id}`).update(updatedArticle);
  }

  delete(id: string): Promise<void> {
    return this.db.doc<Article>(`${this.COLLECTION_NAME}/${id}`).delete();
  }

  deleteImage(article: Partial<Article>, imageURL: string): Promise<void> {

    const images: string[] = article.images.filter((image: string) => image !== imageURL);

    article.images = images;

    if (imageURL === article.featuredImageURL) { article.featuredImageURL = null; }

    if (!article.featuredImageURL && article.images.length > 0) {
      article.featuredImageURL = article.images[0];
    }

    return this.update(article);

  }

}
