import { AccessGuard } from "./product/access.guard";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { HeaderComponent } from "./header.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductModule } from "./product/product.module";
import { ProductService } from "./product/product.service";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "products", pathMatch: "full" },
      { path: "products", component: ProductListComponent },
      {
        path: "products/:pid",
        component: ProductDetailComponent,
        canActivate: [AccessGuard]
      },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
