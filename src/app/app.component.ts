import { Component } from '@angular/core';
import {BackendConnectorService} from "../backend-connector.service";
import {DataProviderService} from "../data-provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mastermind';

  showCreateNewGame: boolean = true;
  newGameId: string = '';

  constructor(private backendConnector: BackendConnectorService, private dataProvider: DataProviderService) {

  }


  startNewGame() {
    this.showCreateNewGame = true;
  }

  hideCreateNewGame($event: any) {
    this.showCreateNewGame = false;
  }

  resumeGame(): void {
    this.backendConnector.getGame(this.newGameId).then(result => {
      this.dataProvider.currentGame = result;
      this.backendConnector.getGameAttempts(this.newGameId).then(attempts => {
        this.dataProvider.attempts = attempts;
        this.showCreateNewGame = false;
        this.newGameId = '';
      });
    })
    .catch(error => {
      alert('Invalid GameID!');
      console.log(error);
    });
    this.backendConnector.getColors().then(result => {
      this.dataProvider.colors = result;
    });
  }
}
