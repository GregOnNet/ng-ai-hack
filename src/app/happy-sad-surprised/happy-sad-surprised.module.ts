import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LibModule } from '../lib/lib.module';
import { PhotoBoxComponent } from './components/photo-box/photo-box.component';
import { PickPlayersComponent } from './containers/pick-players/pick-players.component';
import { FightComponent } from './containers/fight/fight.component';
import { WebcamModule } from 'ngx-webcam';
import { HappySadSurprisedRoutingModule } from './happy-sad-surprised-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HappySadSurprisedRoutingModule,
    WebcamModule
  ],
  declarations: [PhotoBoxComponent, PickPlayersComponent, FightComponent],
  providers: [LibModule]
})
export class HappySadSurprisedModule { }
