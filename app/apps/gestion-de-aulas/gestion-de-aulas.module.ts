import {
  AfterViewInit,
  ElementRef,
  Component
} from '@angular/core';
import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  Routes,
  RouterModule
} from '@angular/router';

@Component({
  templateUrl: 'app/apps/gestion-de-aulas/gestion-de-aulas.html'
})
class GestiondeAulas implements AfterViewInit {
  private data: Object = {}
  constructor(private elementRef: ElementRef) {
    this.llenar()
  }
  ngAfterViewInit() {
    let tabla = $('#tabla');
    tabla.DataTable();
  }
  llenar() {
    this.data = [{
      'dep': 'Lima'
    }, {
      'dep': 'Lima'
    }, {
      'dep': 'Lima'
    }, {
      'dep': 'Lima'
    }, {
      'dep': 'Lima'
    }, {
      'dep': 'Lima'
    }, {
      'dep': 'Lima'
    }, {
      'dep': 'Lima'
    }]
  }
}


const routes: Routes = [{
  path: '',
  component: GestiondeAulas
}];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [GestiondeAulas]
})
export default class GestiondeAulasModule {

}