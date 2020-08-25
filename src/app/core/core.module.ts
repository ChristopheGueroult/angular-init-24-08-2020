import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { IconsModule } from '../icons/icons.module';
import { TextModule } from '../text/text.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    IconsModule,
    TextModule,
    UiModule,
    TemplatesModule,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
