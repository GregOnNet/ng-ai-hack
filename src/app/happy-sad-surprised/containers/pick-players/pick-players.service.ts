import { Injectable } from '@angular/core';

import { LocalStorage } from '../../../lib/local-strorage/local-storage.service';
import { Observable } from 'rxjs/Observable';

export interface Player {
  name: string;
  score: number;
}

@Injectable()
export class PickPlayers {
  private readonly _playerAccessKey = 'GAME_PLAYERS';

  constructor(private _localStorage: LocalStorage) {}

  storePlayers(players: Player[]): Observable<Player[]> {
    return this._localStorage.set(this._playerAccessKey, players);
  }

  getPlayers(): Observable<Player[]> {
    return this._localStorage.get(this._playerAccessKey);
  }
}
