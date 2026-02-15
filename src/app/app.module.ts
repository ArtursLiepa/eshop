import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';

/*Components and custom modules*/
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
import { ConfigDirective } from './directives/config/config.directive';
import { LoginModule } from './modules/login/login.module';
import { GardenthingsModule } from './modules/gardenthings/gardenthings.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    StartUpComponent,
    TimeDirective,
    CopyrightDirective,
    ConfigDirective,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ProductsModule,
    GardenthingsModule,
    PromotionModule,
    ShopsModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
