import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import Game from "./models/Game";
import GameDTO from "./models/GameDTO";
import AttemptDTO from "./models/AttemptDTO";
import Attempt from "./models/Attempt";

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor(private http: HttpClient) { }

  backendUrl = 'http://localhost:5000/api';

  getGame(gameId: string): Promise<Game> {
    return this.http.get<Game>(`${this.backendUrl}/Games/${gameId}`).toPromise();
  }

  getGameAttempts(gameId: string): Promise<Attempt[]> {
    return this.http.get<Attempt[]>(`${this.backendUrl}/Games/attempts/${gameId}`).toPromise();
  }

  postNewGame(game: GameDTO): Promise<Game> {
    return this.http.post<Game>(`${this.backendUrl}/Games/new`, game).toPromise();
  }

  postAttempt(attempt: AttemptDTO): Promise<Attempt> {
    return this.http.post<Attempt>(`${this.backendUrl}/Games/attempt`, attempt).toPromise();
  }

  getColors(): Promise<string[]> {
    return this.http.get<string[]>(`${this.backendUrl}/Colors`).toPromise();
  }
}
