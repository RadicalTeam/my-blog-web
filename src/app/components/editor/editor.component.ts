import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Article} from '../../types/article';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  article: Article = new Article();
  mode = 'editor';
  height = window.screen.availHeight - 20 + 'px';
  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit() {
  }

  save() {
    const nodeDOM = document.body.getElementsByClassName('preview-panel');
    const parentNode: HTMLElement = nodeDOM[0].parentElement;
    this.article.content = parentNode.innerHTML;
    this.blogService.addNewBlog(this.article).subscribe((res) => {
      console.log('succeed');
    });
  }

  changeMode() {
    this.mode = this.mode === 'editor' ? 'preview' : 'editor';
  }

}
