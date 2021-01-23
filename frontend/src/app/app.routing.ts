import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '@core/home/home.component';
import {PageNotFoundComponent} from '@core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {data: {title: ''}, path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
  {data: {title: ''}, path: '404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {
}
