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
  templateUrl: 'app/apps/gestion-de-sistemas/gestion-de-sistemas.html',
})

class GestiondeSistemas {

}

const routes: Routes = [{
  path: '',
  component: GestiondeSistemas
}];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  declarations: [GestiondeSistemas]
})
export default class GestiondeSistemasModule {}