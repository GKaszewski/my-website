import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './blog-page/blog-page.component';
import { PostDetailPageComponent } from './post-detail-page/post-detail-page.component';

import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TriviasPageComponent } from './trivias-page/trivias-page.component';
import { CreateTriviaComponent } from './create-trivia/create-trivia.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';

const routes : Routes = [
  {path: "projects", component: ProjectsPageComponent},
  {path: "contact", component: ContactPageComponent},
  {path: "blog", component: BlogPageComponent},
  {path: "blog/editor", component: BlogEditorComponent},
  {path: "blog/posts/:slug", component: PostDetailPageComponent},
  {path: "gallery", component: GalleryPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'trivias', component: TriviasPageComponent},
  {path: 'trivias/add', component: CreateTriviaComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
