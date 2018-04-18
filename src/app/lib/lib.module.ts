import { NgModule } from '@angular/core';

import { LocalStorage } from './local-strorage/local-storage.service';
import { GameLogicService } from './game-logic.service';
import { CognitiveServicesModule } from '../cognitive-services/cognitive-services.module';

@NgModule({
  imports: [
    CognitiveServicesModule
  ],
  providers: [LocalStorage, GameLogicService]
})
export class LibModule { }
