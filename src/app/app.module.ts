import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CiclovitaComponent } from './ciclovita/ciclovita.component';
import { DemoBergamoRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent,
    CiclovitaComponent,
    MenuComponent,
    HighlightDirective,
    UnlessDirective,
    ExponentialStrengthPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoBergamoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
