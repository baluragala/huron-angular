import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "hsg-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  selectedProduct = "";
  products = [
    { id: 1, title: "produc1", stock: 20 },
    { id: 2, title: "produc2", stock: 0 },
    { id: 3, title: "produc3", stock: 20 },
    { id: 4, title: "produc4", stock: 20 }
  ];
  constructor() {}

  ngOnInit() {}

  handleProductClick(title: string) {
    this.selectedProduct = title;
  }
}
