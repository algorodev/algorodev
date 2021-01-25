import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CrudService} from '@core/services/crud.service';
import {TitleService} from '@core/services/title.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CrudService,
    TitleService
  ]
})
export class CoreModule { }
