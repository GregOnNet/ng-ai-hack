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

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WebcamModule,
    MatInputModule,
    MatButtonModule,

    LibModule,

    HappySadSurprisedRoutingModule
  ],
  declarations: [PhotoBoxComponent, PickPlayersComponent, FightComponent],
  providers: [PickPlayers]
})
export class HappySadSurprisedModule { }
