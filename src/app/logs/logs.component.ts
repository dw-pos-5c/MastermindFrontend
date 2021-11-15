import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MasterMindService} from "../../master-mind.service";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  log: string[] = [];

  constructor(private masterMindService: MasterMindService) {
    masterMindService.subscribe().subscribe(x => {
      this.log.push(x);
      console.log(x);
    });
  }

  ngOnInit(): void {
  }

}
