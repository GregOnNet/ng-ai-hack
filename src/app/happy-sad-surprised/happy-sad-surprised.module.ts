import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoBoxComponent } from './components/photo-box/photo-box.component';
import { HappySadSurprisedRoutingModule } from './happy-sad-surprised-routing.module';
import { PickPlayersComponent } from './containers/pick-players/pick-players.component';
import { FightComponent } from './containers/fight/fight.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  imports: [
    CommonModule,
    HappySadSurprisedRoutingModule,
    WebcamModule
  ],
  declarations: [PhotoBoxComponent, PickPlayersComponent, FightComponent]
})
export class HappySadSurprisedModule { }
