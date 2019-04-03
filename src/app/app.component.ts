import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public value: number = 0;


  name: number = 0;

  nameChange(newUserName) {
    newUserName = parseInt(newUserName);

    this.name = newUserName;
  }

  valueChange(){
    this.value = this.name;
  }

  title = 'change-detaction';
}
