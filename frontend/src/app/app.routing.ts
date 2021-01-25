import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@shared/commons/home/home.component';
import { PageNotFoundComponent } from '@shared/commons/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    data: { title: 'Full-Stack Developer' },
    path: 'home',
    component: HomeComponent,
  },
  {
    data: { title: 'Contact' },
    path: 'contact',
    loadChildren: () =>
      import('@contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
  {
    data: { title: 'Page not found' },
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
