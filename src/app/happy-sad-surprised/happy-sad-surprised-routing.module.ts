import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickPlayersComponent  } from './containers/pick-players/pick-players.component';
import { FightComponent } from './containers/fight/fight.component';
import { ScoreboardComponent } from './containers/scoreboard/scoreboard.component';

const routes: Routes = [
  { path: '', component: PickPlayersComponent, pathMatch: 'full'},
  { path: 'fight', component: FightComponent, pathMatch: 'full'},
  { path: 'scoreboard', component: ScoreboardComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HappySadSurprisedRoutingModule { }
