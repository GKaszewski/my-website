import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ProjectsPageComponent } from './projects-page/projects-page.component'
import { ContactPageComponent } from './contact-page/contact-page.component'

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "projects", component: ProjectsPageComponent},
  {path: "contact", component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
