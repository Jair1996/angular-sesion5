import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CounterCardComponent } from './counter-card/counter-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CounterCardComponent
  ],
  exports: [
    NavbarComponent,
    CounterCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
