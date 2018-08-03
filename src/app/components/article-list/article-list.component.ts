import { Component, OnInit } from '@angular/core';
import {Article} from '../../types/article';
import {BlogService} from '../../services/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe((articles: Article[]) => {
      this.articles = articles;
    }, (error) => {
      console.log(error);
    });
  }

  viewArticle(id) {
    this.router.navigateByUrl(`/article/${id}`);
  }
}
