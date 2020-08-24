import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { IconsModule } from '../icons/icons.module';
import { TextModule } from '../text/text.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    IconsModule,
    TextModule,
    UiModule,
    TemplatesModule
  ]
})
export class CoreModule { }
