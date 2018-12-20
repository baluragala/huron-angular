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

  async getProducts(): Promise<Array<Product>> {
    // return this.http.get<Array<Product>>(`${environment.apiUrl}/products`).pipe(
    //   /** */
    //   switchMap(products => from(products)),
    //   /** */
    //   map(p =>
    //     this.http
    //       .get(`${environment.apiUrl}/categories/${p.categoryId}`)
    //       .pipe(flatMap(c => of({ ...p, category: c })))
    //   ),
    //   /** */
    //   mergeMap(r => r),
    //   startWith([]),
    //   scan((acc: Array<Product>, value) => acc.concat(value))
    // );

    const products: Array<Product> = await this.http
      .get<Array<Product>>(`${environment.apiUrl}/products`)
      .toPromise();
    for (let p of products) {
      const category: { id: number; name: string } = await this.http
        .get<{ id: number; name: string }>(
          `${environment.apiUrl}/categories/${p.categoryId}`
        )
        .toPromise();
      p.category = category;
    }

    return Promise.resolve(products);

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
