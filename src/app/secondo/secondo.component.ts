import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {

  testo:string = "Iniziale";

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(pippo: MouseEvent, param: Number){
    if(param === 2){
      this.testo = 'Default';
    }
    console.log("Ho cliccato il bottone"+param);
    pippo.stopPropagation();
  }

  inputEvent(ev){
    this.testo = ev.target.value;
  }

}
