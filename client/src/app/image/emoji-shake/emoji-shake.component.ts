import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji-shake',
  templateUrl: './emoji-shake.component.html',
  styleUrls: ['./emoji-shake.component.scss']
})
export class EmojiShakeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let entry = document.getElementById("entry");

    function shake(x, y, loop) {
      setTimeout(function () {
        let div = document.createElement('div');
        div.setAttribute("id", "shake");
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        let heart = Math.random();
        if (heart < 1 / 6) {
          div.innerHTML = "❤️";
        } else if (heart < 2 / 6) {
          div.innerHTML = "💛";
        } else if (heart < 3 / 6) {
          div.innerHTML = "💚";
        } else if (heart < 4 / 6) {
          div.innerHTML = "💙";
        } else if (heart < 5 / 6) {
          div.innerHTML = "🧡";
        } else if (heart < 1) {
          div.innerHTML = "💜";
        }
        entry.appendChild(div);
        setTimeout(function () {
          div.remove()
        }, 1000);
      }, loop * 200);
    }
    let n_to_create = 50000;
    for (let i = 0; i < n_to_create; i++) {
      var x = Math.random() * entry.offsetWidth;
      var y = Math.random() * entry.offsetHeight;
      shake(x, y, i);
    }

  }

}
