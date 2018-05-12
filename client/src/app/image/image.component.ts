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

  constructor(private connectionService: ConnectionService, public domSanitizer: DomSanitizer) {
    this.connectionService.currentImage.subscribe(value => {
      this.currentImage = value;
    });
    this.connectionService.currentQuery.subscribe(text => {
      this.text = text;
    })
  }



  ngOnInit() {
    window.addEventListener('keydown', (event) => {
      if (event.keyCode == 32) {
        this.currentMode = (this.currentMode + 1) % 3;
      }
    })
  }

}
