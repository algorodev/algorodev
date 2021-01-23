import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { AppRouting } from 'src/app/app.routing';
import { HeaderComponent } from '@core/header/header.component';
import { NavigatorComponent } from '@core/navigator/navigator.component';
import { FooterComponent } from '@core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
