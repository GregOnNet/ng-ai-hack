import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  public trigger$ = new Subject();

  constructor() { }

  ngOnInit() {
  }

  public imageCaptured(image: WebcamImage) {
    console.log('new image', image);
  }

  public triggerImage() {
    this.trigger$.next();
  }
}
