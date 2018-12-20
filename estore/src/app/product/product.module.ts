import { RouterModule } from "@angular/router";
import { Productv2Service } from "./productv2.service";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { ProductService } from "./product.service";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([])
  ],
  providers: [{ provide: ProductService, useClass: Productv2Service }],
  exports: [ProductListComponent]
})
export class ProductModule {}
