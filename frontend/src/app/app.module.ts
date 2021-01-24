import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';
import { AppRouting } from 'src/app/app.routing';
import { ContactComponent } from '@contact/contact.component';
import { FooterComponent } from '@core/footer/footer.component';
import { HeaderComponent } from '@core/header/header.component';
import { HomeComponent } from '@core/home/home.component';
import { NavigatorComponent } from '@core/navigator/navigator.component';
import { PageNotFoundComponent } from '@core/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavigatorComponent,
    PageNotFoundComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRouting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
