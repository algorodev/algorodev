import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '@shared/layout/footer/footer.component';
import { HeaderComponent } from '@shared/layout/header/header.component';
import { NavigatorComponent } from '@shared/layout/navigator/navigator.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavigatorComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, NavigatorComponent],
})
export class LayoutModule {}
