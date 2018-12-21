import { Component } from "@angular/core";
import { ProductService } from "./product/product.service";

@Component({
  selector: "hur-header",
  template: `
    <header>
      <h1>E-Store</h1>
      {{ product | json }}
    </header>
  `
})
export class HeaderComponent {
  product;
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.productSubject
      .asObservable()
      .subscribe(d => (this.product = d));
  }
}
