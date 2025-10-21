import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsModule } from './modules/products/products.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StartUpComponent } from './components/start-up/start-up.component';
import { OurServicesModule } from './modules/our-services/our-services.module';
import { PromotionModule } from './modules/promotion/promotion.module';
import { TimeDirective } from './directives/time/time.directive';
import { CopyrightDirective } from './directives/copyright/copyright.directive';
import { ShopsModule } from './modules/shops/shops.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    StartUpComponent,
    TimeDirective,
    CopyrightDirective,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    OurServicesModule,
    PromotionModule,
    ShopsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
