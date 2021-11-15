import {Component, OnInit} from '@angular/core';
import {BackendConnectorService} from "../../backend-connector.service";
import {DataProviderService} from "../../data-provider.service";
import Attempt from "../../models/Attempt";
import AttemptDTO from "../../models/AttemptDTO";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  name: string;
  id: string;
  tries: number;
  currentTry: number;
  colors!: string[];

  won: boolean = false;
  lost: boolean = false;

  attempts: Attempt[] = [];
  chosenColors: string[] = [];

  constructor(private backendConnector: BackendConnectorService, private dataProvider: DataProviderService) {
    this.name = dataProvider.currentGame.name;
    this.id = dataProvider.currentGame.id;
    this.tries = dataProvider.currentGame.tries;
    this.currentTry = 0;

    this.setCurrAttempt();
  }

  setCurrAttempt(): void {
    if (!this.dataProvider.attempts || this.dataProvider.attempts.length == 0) {
      this.currentTry = 1;
    } else {
      this.currentTry = this.dataProvider.attempts[this.dataProvider.attempts.length - 1].currentTry + 1;
      this.attempts = this.dataProvider.attempts;
      if (this.attempts[this.attempts.length - 1].correctColorsAndPositions === 4) {
        this.won = true;
      } else if (this.currentTry > this.dataProvider.currentGame.tries) {
        this.lost = true;
      }

    }
  }

  ngOnInit(): void {
    this.backendConnector.getColors().then(result => {
      this.dataProvider.colors = result;
      this.colors = result;
    });
  }

  chosen(index: number, $event: string): void {
    if (index < 0 || index > 3) {
      return;
    }
    this.chosenColors[index] = $event;
  }

  submitAttempt() {
    this.backendConnector.postAttempt(new AttemptDTO(this.chosenColors, this.id)).then(result => {
      this.chosenColors.length = 0;
      this.dataProvider.attempts.push(result);
      this.setCurrAttempt();
    });
  }
}
