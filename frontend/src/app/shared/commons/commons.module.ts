import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '@shared/commons/home/home.component';
import { PageNotFoundComponent } from '@shared/commons/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [HomeComponent, PageNotFoundComponent],
})
export class CommonsModule {}
