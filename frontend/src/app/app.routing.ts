import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@core/home/home.component';
import { PageNotFoundComponent } from '@core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    data: { title: 'Full-Stack Developer' },
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  {
    data: { title: 'Page not found' },
    path: '404',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
