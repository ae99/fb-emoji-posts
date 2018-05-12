import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConnectionService {
  currentImages: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  currentEmoji: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  currentQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  setSearchTerms(query) {
    this.currentQuery.next(query);
  }

  getImage(query) {
    this.http.get(`http://localhost:5000/get_image?query=${encodeURI(query)}`).subscribe(response => {
      this.currentImages.next(response['images']);
    })
  }

  getEmoji(query) {
    this.http.get(`http://localhost:5000/text_to_emoji?keyword=${encodeURI(query)}`).subscribe(response => {
      this.currentEmoji.next(response['emojis']);
    })
  }
}
