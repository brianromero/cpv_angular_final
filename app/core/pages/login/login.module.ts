import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './../../core.module';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { LoginComponent } from './login.component';
import { routing }       from './../../../routing';


const routes: Routes = [{
  path: '',
  component: LoginComponent
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    LoginComponent
  ]
})
export default class LoginModule {}
