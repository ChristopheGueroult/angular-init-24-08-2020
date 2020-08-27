import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibraryModule } from '../library/library.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [
    LibraryModule,
    TemplatesModule,
    TextModule,
    TotalPipe
  ]
})
export class SharedModule { }
