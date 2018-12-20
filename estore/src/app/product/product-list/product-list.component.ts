import { ProductService } from "./../product.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";

export interface Product {
  id: number;
  title: string;
  stock: number;
  categoryId?: number;
  category?: {
    id: number;
    name: string;
  };
}

@Component({
  selector: "hsg-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  selectedProduct = "";
  products:
    | Array<Product>
    | Promise<Array<Product>>
    | Observable<Array<Product>>;
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  handleProductClick(title: string) {
    this.selectedProduct = title;
  }
}
