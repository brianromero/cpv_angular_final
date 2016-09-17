import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


@Component({
    templateUrl: 'app/core/welcome/welcome.html'
})
class Welcome {
  drop(algo){
    console.log(algo)
  }
 }

const routes: Routes = [{ path: '', component: Welcome}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [Welcome]
})
export default class WelcomeModule { }
