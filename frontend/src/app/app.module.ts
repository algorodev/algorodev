import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { AppRouting } from 'src/app/app.routing';
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
