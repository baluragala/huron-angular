import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "hsg-product-list-item",
  templateUrl: "./product-list-item.component.html",
  styleUrls: ["./product-list-item.component.css"]
})
export class ProductListItemComponent implements OnInit {
  @Input()
  product = { id: 1, title: "iphone", stock: 20 };

  @Input()
  extras;

  @Output()
  productClicked: EventEmitter<string> = new EventEmitter();

  classes;
  styles;

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.classes = {
      item: true,
      stock: this.product.stock > 0,
      nostock: this.product.stock == 0
    };

    this.styles = {
      "background-color": "green",
      color: "white",
      fontWeight: "bold"
    };
  }

  handleClick() {
    this.productClicked.emit(this.product.title);
  }

  sell() {
    this.service.addProduct(this.product);
  }
}
