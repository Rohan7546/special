import { Component } from '@angular/core';

@Component({
  selector: 'app-valentine',
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.scss'],
})
export class ValentineComponent {
  countYes = 0;
  countNo = 0;
  noWidth = 300;
  height = 200;
  yesWidth = 200;
  heartPositionX = 0;
  heartPositionY = 0;
  valentineQues = [
    'NO',
    'Please Dum Aloo',
    'me rone lagunga ....',
    'Aisa karegi mere sath',
    'please meri pookie',
    'Soch le kaha se milega itna handsome launda',
    ,
  ];

  constructor() {}

  saidYes() {
    this.countNo = 6;
    this.countYes = 1;
    let timesRun = 0;
    let interval = setInterval(() => {
      const x = document.createElement('span');
      const y = document.getElementsByClassName('container-valentine')[0];
      x.innerHTML = '❤️';
      this.heartPositionX = this.getRandomArbitraryX();
      x.style.position = 'absolute';
      x.style.bottom = this.getRandomArbitraryY() + 'px';
      x.style.top = this.getRandomArbitraryY() + 'px';
      x.style.left = this.getRandomArbitraryX() + 'px';
      x.style.right = this.getRandomArbitraryX() + 'px';
      x.style.zIndex = '9999';
      timesRun += 1;
      if (timesRun === 600) {
        clearInterval(interval);
      }
      y.appendChild(x);
    }, 40);
  }
  saidNo() {
    this.countNo += 1;
    this.yesWidth += 50;
    if (this.countNo === 6) {
      this.noWidth = 0;
    }
    const noWidth = document.getElementsByClassName(
      'valentine-no'
    )[0] as HTMLElement;
    const yesWidth = document.getElementsByClassName(
      'valentine-yes'
    )[0] as HTMLElement;
    noWidth.style.width = this.noWidth / this.countNo + 'px';
    yesWidth.style.width = this.yesWidth + 'px';
  }

  getRandomArbitraryX() {
    return Math.random() * (390 - 0) + 0;
  }
  getRandomArbitraryY() {
    return Math.random() * (840 - 0) + 0;
  }
}
