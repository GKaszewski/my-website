import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo.model';
import { Trivia } from '../models/trivia.model';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable()
export class ApiService {
    private apiRoot = "https://gabrielkaszewski-api.herokuapp.com/";
    
    constructor(private http : HttpClient){}

    getProjects() {
        return this.http.get<any[]>(this.apiRoot.concat('projects/project-item/'));
    }

    getPhotos() {
        return this.http.get<Photo[]>(this.apiRoot.concat('gallery/'));
    }

    getPosts() {
        return this.http.get<any[]>(this.apiRoot.concat('blog/posts/'));
    }

    getPost(slug : string) {
        return this.http.get<any>(this.apiRoot.concat('blog/posts/').concat(slug).concat('/'));
    }

    postPost(data : any) :Observable<any> {
        return this.http.post<Post>(this.apiRoot.concat('blog/posts/'),  JSON.parse(data));
    }

    getPhoto(slug : string) {
        return this.http.get<Photo>(this.apiRoot.concat('gallery/').concat(slug));
    }

    getTrivias() : Observable<Trivia[]> {
        return this.http.get<Trivia[]>(this.apiRoot.concat('trivias/'));
    }

    getTrivia(slug : string) : Observable<Trivia> {
        return this.http.get<Trivia>(this.apiRoot.concat('trivias/').concat(slug).concat('/')); 
    }

    postTrivia(trivia : Trivia) : Observable<Trivia> {
        return this.http.post<Trivia>(this.apiRoot.concat('trivias/'), JSON.parse(JSON.stringify(trivia)));
    }

    postTrivias(trivias : Trivia[]) : Observable<Trivia[]> {
        return this.http.post<Trivia[]>(this.apiRoot.concat('trivias/'), JSON.parse(JSON.stringify(trivias)));
    }
}