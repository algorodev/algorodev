import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommonsModule } from '@shared/commons/commons.module';
import { LayoutModule } from '@shared/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CommonsModule, LayoutModule],
  exports: [CommonsModule, LayoutModule],
})
export class SharedModule {}
