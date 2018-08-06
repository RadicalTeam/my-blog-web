import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Article} from '../../types/article';
import {BRIEF_MAX_LENGTH} from '../../constant/article';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @ViewChild('editor') editor: ElementRef;
  @ViewChild('preview') preview: ElementRef;
  article: Article = new Article();
  mode = 'editor';
  content = '';

  constructor(private blogService: BlogService, ) {
  }

  ngOnInit() {
  }

  save() {
    this.article.brief = this.preview.nativeElement.innerText.substring(0, BRIEF_MAX_LENGTH);
    this.article.mdSource = this.editor.nativeElement.innerText;

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
    this.article.brief = this.preview.nativeElement.innerText.substring(0, BRIEF_MAX_LENGTH);
    this.article.mdSource = this.editor.nativeElement.innerText;
    this.blogService.publishBlog(this.article).subscribe((res) => {
      console.log('succeed');
    });
  }
}
