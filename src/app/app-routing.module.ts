import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomePageComponent},
  {path: '', loadChildren: ()=>import('./lazy.module').then(m => m.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
