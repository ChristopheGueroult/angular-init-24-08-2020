import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibraryModule } from '../library/library.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LibraryModule,
    TemplatesModule,
    TextModule
  ]
})
export class SharedModule { }
