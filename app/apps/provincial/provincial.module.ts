import {
  Component
} from '@angular/core';
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
  templateUrl: '<h1>Provincial</h1>',
})

class Provincial {

}

const routes: Routes = [{
  path: '',
  component: Provincial
}];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  declarations: [Provincial]
})
export default class ProvincialModule {}