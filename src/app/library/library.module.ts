import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';



@NgModule({
  declarations: [ButtonComponent, TableauLightComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ButtonComponent, TableauLightComponent]
})
export class LibraryModule { }
