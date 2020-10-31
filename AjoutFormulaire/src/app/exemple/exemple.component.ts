import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css']
})
export class ExempleComponent implements OnInit {
  @Input('fruit') public fruit: string;
  constructor() { }

  ngOnInit(): void {
  }

}
