import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { PickPlayers, Player } from './pick-players.service';

@Component({
  selector: 'app-pick-players',
  templateUrl: './pick-players.component.html',
  styleUrls: ['./pick-players.component.css']
})
export class PickPlayersComponent {
  playersForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _pickPlayers: PickPlayers,
    private _router: Router
  ) {
    this._setupPlayersForm();
  }

  savePlayersAndStartGame() {
    const playersInForm = this.playersForm.value;
    const players: Player[] = Object.keys(this.playersForm.value).map(key => ({
      name: playersInForm[key] as string,
      score: 0
    }));

    this._pickPlayers
      .storePlayers(players)
      .pipe(first())
      .subscribe(() => this._router.navigate(['/game', 'fight']));
  }
  private _setupPlayersForm() {
    this.playersForm = this._fb.group({
      firstPlayer: ['', [Validators.required, Validators.minLength(2)]],
      secondPlayer: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
}
