import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'root', component: AppComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', loadChildren: './happy-sad-surprised/happy-sad-surprised.module#HappySadSurprisedModule' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
