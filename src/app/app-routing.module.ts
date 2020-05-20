import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ProjectsPageComponent } from './projects-page/projects-page.component'
import { ContactPageComponent } from './contact-page/contact-page.component'
import { BlogPageComponent } from './blog-page/blog-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { PostDetailPageComponent } from './post-detail-page/post-detail-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomePageComponent},
  {path: "projects", component: ProjectsPageComponent},
  {path: "contact", component: ContactPageComponent},
  {path: "blog", component: BlogPageComponent},
  {path: "blog/posts/:slug", component: PostDetailPageComponent},
  {path: "gallery", component: GalleryPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
