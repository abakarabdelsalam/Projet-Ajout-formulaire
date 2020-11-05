import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fruit: string;
  public fruits: string[] = ['pomme','tomat', 'grenadine'];
  

  SupprimeFruit(fruit:string) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
    
  }

  FonctionRef(reference: any) {
    console.log(reference.type, reference.value);
    
    this.fruits.push(reference.value);


    
  }
}

