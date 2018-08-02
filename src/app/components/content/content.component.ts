import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private articleId: string;
  contentHTMl = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogService.getBlogByTitle(this.articleId).subscribe((res) => {
      if (res !== null) {
        this.contentHTMl = res.content;
      }
    });
  }

}
