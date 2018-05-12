import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ConnectionService} from "../connection.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  currentImage = '';
  text = '';

  currentMode = 0;
  searchTerms = '';

  constructor(private connectionService: ConnectionService, public domSanitizer: DomSanitizer) {
    this.connectionService.currentQuery.subscribe(text => {
      this.text = text;
    })
  }

  send(){
    this.connectionService.setSearchTerms(this.searchTerms);
    this.connectionService.getImage(this.searchTerms);
    this.connectionService.getEmoji(this.searchTerms);
  }




  ngOnInit() {
    window.addEventListener('keydown', (event) => {
      if (event.keyCode == 32) {
        this.currentMode = (this.currentMode + 1) % 3;
      }
    })
  }

}
