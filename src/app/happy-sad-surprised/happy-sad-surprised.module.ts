import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { PhotoBoxComponent } from './components/photo-box/photo-box.component';
import { PickPlayersComponent } from './containers/pick-players/pick-players.component';
import { FightComponent } from './containers/fight/fight.component';
import { WebcamModule } from 'ngx-webcam';
import { PickPlayers } from './containers/pick-players/pick-players.service';
import { HappySadSurprisedRoutingModule } from './happy-sad-surprised-routing.module';
import { LibModule } from '../lib/lib.module';
import { GameLogicService } from '../lib/game-logic.service';
import { ScoreboardComponent } from './containers/scoreboard/scoreboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WebcamModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,

    LibModule,

    HappySadSurprisedRoutingModule
  ],
  declarations: [PhotoBoxComponent, PickPlayersComponent, FightComponent, ScoreboardComponent],
  providers: [PickPlayers, GameLogicService]
})
export class HappySadSurprisedModule { }
