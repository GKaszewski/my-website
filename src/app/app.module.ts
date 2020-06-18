import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectComponent } from './project/project.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { ApiService } from './services/ApiService.service';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { PhotoDetailPageComponent } from './photo-detail-page/photo-detail-page.component';
import { PostDetailPageComponent } from './post-detail-page/post-detail-page.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { BlogListElementComponent } from './blog-list-element/blog-list-element.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader.service'
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MarkdownModule } from 'ngx-markdown';
import { AuthService } from './services/auth.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    ProjectComponent,
    ProjectModalComponent,
    FooterComponent,
    BlogPageComponent,
    GalleryPageComponent,
    PhotoDetailPageComponent,
    PostDetailPageComponent,
    ImageDialogComponent,
    BlogListElementComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MarkdownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    ApiService,
    LoaderService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
