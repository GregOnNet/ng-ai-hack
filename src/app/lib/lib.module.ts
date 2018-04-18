import { NgModule } from '@angular/core';

import { LocalStorage } from './local-strorage/local-storage.service';

@NgModule({
  providers: [LocalStorage]
})
export class LibModule { }
