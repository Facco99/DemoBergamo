import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  powers:string[] = ['superforza','supervelocita','volare'];

  heroForm:FormGroup

  constructor(private fb:FormBuilder) { 
    this.heroForm=fb.group({
      name: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      power: ['',Validators.required],
      street: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  ngOnInit(): void {
  }

}
