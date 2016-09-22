import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  Layout
} from './layout.component';
import { RouterModule } from '@angular/router';
import {CoreModule} from './../core.module';
import {
  routing
} from './../../routing';

@NgModule({
  imports: [RouterModule,CommonModule,CoreModule,routing],
  declarations: [Layout],
})
export class LayoutModule {}