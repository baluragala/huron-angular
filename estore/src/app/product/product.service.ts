import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product-list/product-list.component";
import { Observable, from, of } from "rxjs";
import {
  filter,
  map,
  switchMap,
  pluck,
  concatMap,
  mergeMap,
  flatMap,
  zip,
  merge,
  startWith,
  scan
} from "rxjs/operators";

import { environment } from "src/environments/environment";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${environment.apiUrl}/products`).pipe(
      /** */
      switchMap(products => from(products)),
      /** */
      map(p =>
        this.http
          .get(`${environment.apiUrl}/categories/${p.categoryId}`)
          .pipe(flatMap(c => of({ ...p, category: c })))
      ),
      /** */
      flatMap(r => r),
      startWith([]),
      scan((acc: Array<Product>, value) => acc.concat(value))
    );

    // this.http
    //   .get<Array<Product>>(`${environment.apiUrl}/products`)
    //   .subscribe(products =>
    //     from(products).subscribe(p =>
    //       this.http
    //         .get(`${environment.apiUrl}/categories/${p.categoryId}`)
    //         .subscribe(c => console.log(c))
    //     )
    //   );
  }
}
