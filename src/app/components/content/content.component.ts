import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private articleId: string;
  contentHTMl = `<h2>this is the html content from contentHTMl</h2> `;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
