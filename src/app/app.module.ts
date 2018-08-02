import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiceModule} from './services/service.module';
import { LoginComponent } from './components/login/login.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { EditorComponent } from './components/editor/editor.component';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    ArticleListComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceModule,
    LMarkdownEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
