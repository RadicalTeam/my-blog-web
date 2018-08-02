import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import {Article} from '../types/article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private prefixAddress = '/blog';
  constructor(private http: HttpClient) { }

  getBlogByTitle(title: string): Observable<any> {
    const address = `${this.prefixAddress}/${title}`;
    return this.http.get<string>(address);
  }

  addNewBlog(article: Article) {
    return this.http.post(`${this.prefixAddress}/add`, article);
  }
}
