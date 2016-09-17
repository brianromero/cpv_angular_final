import {
  Component
} from '@angular/core';
import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  SegmentacionService
} from './segmentacion.service';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';

import {
  ZonaInterface
} from './zona.interface';
import {
  ProvinciaInterface
} from './provincia.interface';
import {
  DistritoInterface
} from './distrito.interface';
import {
  DepartamentoInterface
} from './departamento.interface';

import {
  RegistroInterface
} from './registro.interface';


@Component({
  templateUrl: 'app/apps/segmentacion/segmentacion.html',
  providers: [SegmentacionService]
})

class Segmentacion {
  private ccdd :any;
  private ccpp :any;
  private ccdi :any;
  private tabledata:boolean = false;
  private registros:RegistroInterface;
  private departamentos:DepartamentoInterface;
  private provincias:ProvinciaInterface;
  private distritos:DistritoInterface;
  private zonas:ZonaInterface;

  constructor(private segmentacionservice: SegmentacionService) {
    this.cargarDepa()
    this.cargarTabla("0","0","0","0","0")
    this.registros = this.model
  }

  model = new RegistroInterface();

  cargarDepa() {
    this.segmentacionservice.getDepartamentos().subscribe(res => {
      this.departamentos = <DepartamentoInterface>res;
    })
  }

  cargarProvincias(ccdd: string, ccpp: string = "0") {
    this.ccdd = ccdd;
    if(this.ccdd!=0){
      this.segmentacionservice.getProvincias(ccdd, ccpp).subscribe(res => {
        this.provincias = < ProvinciaInterface > res;
      })
      this.cargarTabla("1",ccdd,"0","0","0")
    }else{
      this.cargarTabla("0","0","0","0","0")
    }
  }

  cargarDistritos(ccpp: string) {
    this.ccpp=ccpp;
    if(this.ccpp!=0){
      this.segmentacionservice.getDistritos(this.ccdd, ccpp,"0").subscribe(res => {
        this.distritos = < DistritoInterface > res;
      })
      this.cargarTabla("2",this.ccdd,ccpp,"0","0")
    }else{
      this.cargarTabla("1",this.ccdd,"0","0","0")
    }
  }

  cargarZonas(ccdi: string) {
    this.ccdi = ccdi;
    let ubigeo = this.ccdd + this.ccpp + ccdi;
    if(this.ccdi!=0){
      this.segmentacionservice.getZonas(ubigeo).subscribe(res => {
        this.zonas = < ZonaInterface > res;
      })
      this.cargarTabla("3",this.ccdd,this.ccpp,this.ccdi,"0")
    }else{
      this.cargarTabla("2",this.ccdd,this.ccpp,"0","0")
    }
  }

  cargarAeu(zona: string) {
    if(zona!="0"){
      this.cargarTabla("4",this.ccdd,this.ccpp,this.ccdi,zona)
    }else{
      this.cargarTabla("3",this.ccdd,this.ccpp,this.ccdi,"0")
    }
  }

  cargarTabla(tipo: string, ccdd: string, ccpp: string, ccdi: string, zona: string){
    this.segmentacionservice.getTabla(tipo, ccdd, ccpp, ccdi, zona).subscribe(res => {
      this.tabledata = true;
      this.registros= < RegistroInterface > res;
    })
  }

  getRegistro(url: string) {
        this.segmentacionservice.getRegistro(url).subscribe((data) => {
            this.model = < RegistroInterface > data
        })
    }

}

const routes: Routes = [{
  path: '',
  component: Segmentacion
}];

@NgModule({
  imports: [RouterModule.forChild(routes), BrowserModule, FormsModule],
  declarations: [Segmentacion]
})
export default class SegmentacionModule {}