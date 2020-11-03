import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css']
})
export class ExempleComponent implements OnInit {
  @Input('fruit') public fruit: string;
  
  @Output() public SupprimF: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  SupprimeFruit() {
    this.SupprimF.emit(this.fruit);


  }



}
