import { Component, OnInit } from '@angular/core';
import {ConnectionService} from "../../connection.service";

@Component({
  selector: 'app-emoji-rain',
  templateUrl: './emoji-rain.component.html',
  styleUrls: ['./emoji-rain.component.scss']
})
export class EmojiRainComponent implements OnInit {
  emojis = [];
  constructor(private connectionService: ConnectionService) {
    this.connectionService.currentEmoji.subscribe(emojis => {
      this.emojis = emojis;
    })
  }

  pickRandomEmoji(){
    if (this.emojis.length != 0) {
      return this.emojis[Math.floor(Math.random()*this.emojis.length)]
    }
    return ''
  }


  ngOnInit() {
    let post = document.getElementById("post");
    let delay = 180;
    let doSetTimeout = (x, loop) => {
      setTimeout(() => {
        let div = document.createElement('div');
        div.setAttribute("class", "smile");
        div.style.left = `${x}px`;
        div.style.top = '-50px';
        div.style.fontSize = Math.random()*2 + 1.5 + 'rem';
        div.style.transform = 'rotate(' + Math.random()*540 + 'deg)';
        div.style.position = 'absolute';
        div.classList.add('nostylelink');
        div.classList.add('noselect');
        div.innerHTML = this.pickRandomEmoji();
        post.appendChild(div);
        setTimeout(function () {
          div.remove()
        }, 5000);
      }, loop * delay);
    };
    let n_to_create = 10000;
    for (let i = 0; i < n_to_create; i++) {
      var x = Math.random() * post.offsetWidth;
      doSetTimeout(x, i);
    }

  }

}
