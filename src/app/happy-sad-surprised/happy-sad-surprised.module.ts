import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoBoxComponent } from './components/photo-box/photo-box.component';
import { HappySadSurprisedRoutingModule } from './happy-sad-surprised-routing.module';
import { PickPlayersComponent } from './containers/pick-players/pick-players.component';

@NgModule({
  imports: [
    CommonModule,
    HappySadSurprisedRoutingModule
  ],
  declarations: [PhotoBoxComponent, PickPlayersComponent]
})
export class HappySadSurprisedModule { }
