import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Article} from '../../types/article';
import {BRIEF_MAX_LENGTH} from '../../constant/article';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  article: Article = new Article();
  mode = 'editor';
  content = '';

  constructor(private blogService: BlogService, ) {
  }

  ngOnInit() {
  }

  save() {
    const previewDOM = document.body.querySelector('#preview');
    const editorDom = document.body.querySelector('#editor');
    this.article.brief = previewDOM.innerText.substring(0, BRIEF_MAX_LENGTH);
    this.article.mdSource = editorDom.innerText;

    this.blogService.addNewBlog(this.article).subscribe((res) => {
      console.log('succeed');
    });
  }

  changeMode() {
    this.mode = this.mode === 'editor' ? 'preview' : 'editor';
  }

  getContent() {
    this.content = document.getElementById('editor').innerText;
  }

  publishBlog() {
    const previewDOM = document.body.querySelector('#preview');
    const editorDom = document.body.querySelector('#editor');
    this.article.brief = previewDOM.innerText.substring(0, BRIEF_MAX_LENGTH);
    this.article.mdSource = editorDom.innerText;
    this.blogService.publishBlog(this.article).subscribe((res) => {
      console.log('succeed');
    });
  }
}
