import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';



@NgModule({
  declarations: [ButtonComponent, TableauLightComponent, TableauDarkComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ButtonComponent, TableauLightComponent, TableauDarkComponent]
})
export class LibraryModule { }
