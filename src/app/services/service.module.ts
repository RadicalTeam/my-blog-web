import { NgModule } from '@angular/core';
import {BlogService} from './blog.service';
import {UploadService} from './upload.service';

@NgModule({
  providers: [
    BlogService,
    UploadService,
  ],
})
export class ServiceModule { }
