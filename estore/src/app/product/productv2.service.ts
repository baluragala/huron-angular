import { Injectable } from "@angular/core";
import { Product } from "./product-list/product-list.component";

@Injectable({
  providedIn: "root"
})
export class Productv2Service {
  constructor() {}

  getProducts(): Promise<Array<Product>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "2produc1", stock: 20 },
          { id: 2, title: "2produc2", stock: 0 },
          { id: 3, title: "2produc3", stock: 20 },
          { id: 4, title: "2produc4", stock: 20 }
        ]);
      }, 1000);
    });
  }
}
