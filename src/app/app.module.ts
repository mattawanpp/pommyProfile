import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainMenuModule } from './main-menu/main-menu.module';
import { ProductBannerModule } from './product-banner/product-banner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MainMenuModule,
    ProductBannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
