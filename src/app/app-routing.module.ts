import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CiclovitaComponent } from './ciclovita/ciclovita.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: 'primo', component: PrimoComponent, data: {title:"Primo"} },
    { path: 'secondo',      component: SecondoComponent, data: {title:"Primo Diverso"} },
    { path: 'ciclo-vita',      component: CiclovitaComponent },
    { path:'', redirectTo: '/primo', pathMatch:'full'},
    { path: '**', component: PagenotfoundComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoBergamoRoutingModule { }
