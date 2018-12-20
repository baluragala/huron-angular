import { Component, ViewEncapsulation } from "@angular/core";
import { ProductService } from "./product/product.service";
import { Productv2Service } from "./product/productv2.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [ProductService]
})
export class AppComponent {
  title = "estore";
}
