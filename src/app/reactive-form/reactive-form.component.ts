import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  get nameControl(): FormControl{
    return this.heroForm.get('name') as FormControl;
  }
  
  get powerControl(): FormControl{
    return this.heroForm.get('power') as FormControl;
  }
  powers:string[] = ['superforza','supervelocita','volare'];

  heroList:{name:string, power:string}[]=[];

  heroForm:FormGroup

  constructor(private fb:FormBuilder) { 
    this.heroForm=this.fb.group({
      name: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      power: ['',Validators.required],
      address : this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ['', Validators.compose([Validators.minLength(5),Validators.maxLength(5)])]
      })
    });
  }

  ngOnInit(): void {
  }

  setDefault(){
    // this.heroForm.setValue({
    //   name:'Goku'
    // });
    this.heroForm.patchValue({
      name:'Goku'
    });
  }

  clearHero(){
    this.heroForm.reset({
      name:'Gohan'
    });
  }

  addHero(){
    this.heroList.push({
      name: this.nameControl.value,
      power: this.powerControl.value,
    });
    this.clearHero();

  }

}
