import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from '../components/content/content.component';
import {ArticleListComponent} from '../components/article-list/article-list.component';
import {LoginComponent} from '../components/login/login.component';
import {EditorComponent} from '../components/editor/editor.component';

const routes: Routes = [
  {
    path: '', component: ArticleListComponent
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'editor', component: EditorComponent,
  },
  {
    path: 'article/:id', component: ContentComponent,
  },
  {
    path: '**', redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
