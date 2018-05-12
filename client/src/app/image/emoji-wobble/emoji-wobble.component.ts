import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji-wobble',
  templateUrl: './emoji-wobble.component.html',
  styleUrls: ['./emoji-wobble.component.scss']
})
export class EmojiWobbleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let entry = document.getElementById("entry");
    function wobble(x, y, loop) {
      setTimeout(function () {
        let div = document.createElement('div');
        div.setAttribute("id", "wobble");
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        div.innerHTML = "🥕";
        entry.appendChild(div);
        setTimeout(function () {
          div.remove()
        }, 1000);
      }, loop * 50);
    }
    let n_to_create = 50000;
    for (let i = 0; i < n_to_create; i++) {
      var x = Math.random() * entry.offsetWidth;
      var y = Math.random() * entry.offsetHeight;
      wobble(x, y, i);
    }

  }

}
