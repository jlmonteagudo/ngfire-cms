import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { Article } from './article';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {

  constructor(private articleService: ArticleService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.articleService.findOne(id).pipe(
      take(1),
      mergeMap(article => {
        if (article) {
          return of(article);
        } else {
          this.router.navigate(['/article']);
          return EMPTY;
        }
      })
    );

  }

}
