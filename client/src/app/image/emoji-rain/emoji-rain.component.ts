import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji-rain',
  templateUrl: './emoji-rain.component.html',
  styleUrls: ['./emoji-rain.component.scss']
})
export class EmojiRainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let post = document.getElementById("post");
    let delay = 200;
    function doSetTimeout(x, loop) {
      setTimeout(function () {
        let div = document.createElement('div');
        div.setAttribute("class", "smile");
        div.style.left = `${x}px`;
        div.style.top = '-20px';
        div.style.fontSize = Math.random()*2 + 1 + 'rem';
        div.style.transform = 'rotate(' + Math.random()*180 + 'deg)';

        div.style.position = 'absolute';
        div.innerHTML = "🥕️";
        div.classList.add('nostylelink');
        div.classList.add('noselect');
        post.appendChild(div);
        setTimeout(function () {
          div.remove()
        }, 5000);
      }, loop * delay);
    }
    let n_to_create = 10000;
    for (let i = 0; i < n_to_create; i++) {
      var x = Math.random() * post.offsetWidth;
      doSetTimeout(x, i);
    }

  }

}
