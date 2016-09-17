import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    MenuServices
} from './core/services/menu.service';
import {LoginService} from './core/services/login/login.service';
import {LoginComponent} from './core/login/login.component';
import {SeguridadComponent} from './core/seguridad/seguridad.component';
import {Http} from '@angular/http';


const routes: Routes = getRoutes();

export const routing = RouterModule.forRoot(routes);

function getRoutes(){
  let http:Http;
  let loginservice = new LoginService(http);
  let session = loginservice.getJsonSession()
  var results :Array<Object> = Array<Object>();
  let validsession : boolean = loginservice.isValidSession();
  
  results.push({ path: '', component:LoginComponent })
  results.push({ path: 'welcome', loadChildren:'app/core/welcome/welcome.module' })
  if(validsession){
      let modules :Array<string> = <Array<string>>session[0]['routes'];
      modules.map(module => results.push({path: module, loadChildren: 'app/apps/'+module+'/' + module + '.module' }))
  }
  
  return results 
}