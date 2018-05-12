import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {ConnectionService} from "./connection.service";
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ImageComponent } from './image/image.component';
import { EmojiRainComponent } from './image/emoji-rain/emoji-rain.component';
import { Autosize } from 'angular2-autosize';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ImageComponent,
    EmojiRainComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
