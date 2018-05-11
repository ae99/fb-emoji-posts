import { Component } from '@angular/core';
import {ConnectionService} from "./connection.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerms = '';
  currentImage = '';

  constructor(private connectionService: ConnectionService){
    this.connectionService.currentImage.subscribe(value => {
      this.currentImage = value;
    })
  }
  send(){
    this.connectionService.getImage(this.searchTerms);
  }
}
