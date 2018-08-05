import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

@Pipe({
  name: 'highLightTransform'
})
export class HighLightTransformPipe implements PipeTransform {
  options = {
    renderer: new marked.Renderer(),
    pedantic: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  };

  transform(html: any, args?: any): any {
    return marked(html, this.options)
      .replace(/<code class=\"language-/g, '<code class=\"hljs language-');
  }

}
