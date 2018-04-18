import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs/Subject';
import { GameLogicService } from '../../../lib/game-logic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  public trigger$ = new Subject();

  constructor(private logic: GameLogicService, private router: Router) { }

  ngOnInit() {
  }

  public imageCaptured(image: WebcamImage) {
    this.logic.evaluate(image)
      .then(result => {
        if (result.errorMessage) {
          alert(`Error ${result.errorMessage}`);
        } else {
          alert(`The Winner is Player ${result.winnerIndex + 1}`);
        }
      });
  }

  public triggerImage() {
    this.trigger$.next();
  }

  public goHome() {
    this.router.navigateByUrl('/game');
  }

  public goScoreboard() {
    this.router.navigateByUrl('/game/scoreboard');
  }
}
