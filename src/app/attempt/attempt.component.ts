import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  @Input() availableColors!: string[];
  @Input() selectedColor!: string;
  @Output() colorChosen = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
