import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendConnectorService} from "../../backend-connector.service";
import {DataProviderService} from "../../data-provider.service";
import GameDTO from "../../models/GameDTO";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  @Output() hideComponent = new EventEmitter();

  constructor(private backendConnector: BackendConnectorService, private dataProvider: DataProviderService) { }

  newGameForm = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    tries: new FormControl('',[
      Validators.min(6),
      Validators.max(12),
      Validators.required,
    ])
  })

  ngOnInit(): void {
  }

  newGame() {
    this.backendConnector.postNewGame(new GameDTO(this.newGameForm.value.name, this.newGameForm.value.tries)).then(result => {
      this.dataProvider.currentGame = result;
      this.dataProvider.attempts.length = 0;
      this.hideComponent.emit();
    });
  }
}
