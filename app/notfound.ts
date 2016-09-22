import {Component} from '@angular/core';
import {
  NgModule
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';

@Component({
  template: '<h1>NOT FOUND 404</h1>'
})
export class NotFound {
  
}
const routes: Routes = [{
  path: '',
  component: NotFound
}];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  declarations: [NotFound]
})
export default class NotFoundModule {}