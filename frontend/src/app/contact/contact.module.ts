import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactComponent } from '@contact/contact.component';
import { ContactRouting } from '@contact/contact.routing';
import { ContactService } from '@contact/services/contact.service';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRouting],
  exports: [ContactComponent],
  providers: [ContactService],
})
export class ContactModule {}
