import { Injectable } from '@angular/core';
import Game from "./models/Game";
import Attempt from "./models/Attempt";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  currentGame!: Game;
  colors!: string[];
  attempts: Attempt[] = [];

  constructor() { }
}
