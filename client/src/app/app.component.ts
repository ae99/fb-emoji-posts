import { Component } from '@angular/core';
import {ConnectionService} from "./connection.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  searchTerms = '';
  constructor(private connectionService: ConnectionService){}

  send(){
    this.connectionService.setSearchTerms(this.searchTerms);
    this.connectionService.getImage(this.searchTerms);
    this.connectionService.getEmoji(this.searchTerms);
  }
}
