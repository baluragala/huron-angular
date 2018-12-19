import { HeaderComponent } from "./header.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductModule } from "./product/product.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
