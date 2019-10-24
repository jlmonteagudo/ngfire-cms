import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, tap } from 'rxjs/operators';
import { Category } from './category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category> {

  constructor(private categoryService: CategoryService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.categoryService.findOne(id).pipe(
      take(1),
      mergeMap(category => {
        if (category) {
          return of(category);
        } else {
          this.router.navigate(['/category']);
          return EMPTY;
        }
      })
    );

  }

}
