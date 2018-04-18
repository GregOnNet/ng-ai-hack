import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs/Subject';
import { GameLogicService } from '../../../lib/game-logic.service';
import { Router } from '@angular/router';
import { PickPlayers } from '../pick-players/pick-players.service';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  public trigger$ = new Subject();

  public player1$;
  public player2$;

  private players$;

  constructor(
    private logic: GameLogicService,
    private router: Router,
    private playersService: PickPlayers,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.players$ = this.playersService.getPlayers();

    this.player1$ = this.players$.pipe(map(x => x[0].name));
    this.player2$ = this.players$.pipe(map(x => x[1].name));
  }

  public imageCaptured(image: WebcamImage) {
    this.logic.evaluate(image)
      .then(result => {
        if (result.errorMessage) {
          this.snackBar.open(`Error ${result.errorMessage}`);
        } else {
          this.players$.toPromise().then(players => {
            const winner = players[result.winnerIndex].name;

            this.snackBar.open(`The Winner is ${winner}`);
          });
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
