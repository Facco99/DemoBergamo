import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title='Titolo';

  clickAppComponent(value: string){
    console.log("Cliccato da secondo component"+value)
  }
}
