import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  componentToSho: number = 2;
  
  title='Titolo';

  clickAppComponent(value: string){
    console.log("Cliccato da secondo component"+value)
  }

  showComponent(){
    if(this.componentToSho === 3)
      this.componentToSho=1;
    else
      this.componentToSho++;
  }
}
