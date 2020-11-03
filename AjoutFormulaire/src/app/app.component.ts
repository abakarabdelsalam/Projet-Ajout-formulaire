import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fruit: string;
  public fruits: string[] = [];
  

  SupprimeFruit(fruit:string) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
    
  }
}

