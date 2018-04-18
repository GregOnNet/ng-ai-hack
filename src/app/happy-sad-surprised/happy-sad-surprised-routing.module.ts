import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickPlayersComponent  } from './containers/pick-players/pick-players.component';

const routes: Routes = [
  { path: '', component: PickPlayersComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HappySadSurprisedRoutingModule { }
