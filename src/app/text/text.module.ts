import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPagesComponent } from './components/text-pages/text-pages.component';
import { TextBandeauxComponent } from './components/text-bandeaux/text-bandeaux.component';



@NgModule({
  declarations: [TextPagesComponent, TextBandeauxComponent],
  imports: [
    CommonModule
  ],
  exports: [TextPagesComponent, TextBandeauxComponent]
})
export class TextModule { }
