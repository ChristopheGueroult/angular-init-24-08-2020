import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ButtonComponent]
})
export class LibraryModule { }
