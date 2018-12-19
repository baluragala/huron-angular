import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";

@NgModule({
  declarations: [ProductListComponent, ProductListItemComponent],
  imports: [CommonModule],
  exports: [ProductListComponent]
})
export class ProductModule {}
