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
import { AddProductComponent } from "./add-product/add-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddProductReactiveComponent } from "./add-product-reactive/add-product-reactive.component";
import { ReactiveOrderFormComponent } from './reactive-order-form/reactive-order-form.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailComponent,
    AddProductComponent,
    AddProductReactiveComponent,
    ReactiveOrderFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  providers: [{ provide: ProductService, useClass: Productv2Service }],
  exports: [ProductListComponent]
})
export class ProductModule {}
