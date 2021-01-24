import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  auto_grow(element): void {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }
}
