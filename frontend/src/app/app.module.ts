import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactModule } from '@contact/contact.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from 'src/app/app.component';
import { AppRouting } from 'src/app/app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRouting,
    ContactModule,
    CoreModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
