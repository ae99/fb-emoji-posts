import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji-tumble',
  templateUrl: './emoji-tumble.component.html',
  styleUrls: ['./emoji-tumble.component.scss']
})
export class EmojiTumbleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let entry = document.getElementById("entry");
    let delay = 300;

    function doSetTimeout(y, loop) {
      setTimeout(function () {
        let div = document.createElement('div');
        div.setAttribute("id", "leaf");
        let divdiv = document.createElement('div');
        divdiv.setAttribute("id", "tumble");
        div.appendChild(divdiv)
        div.style.top = `${y}px`;
        divdiv.innerHTML = "😀";
        entry.appendChild(div);
        setTimeout(function () {
          div.remove()
        }, 5000);
      }, loop * delay);
    }
    let n_to_create = 50000;
    for (let i = 0; i < n_to_create; i++) {
      var y = Math.random() * entry.offsetWidth;
      console.log(y);
      doSetTimeout(y, i);
    }

  }

}
