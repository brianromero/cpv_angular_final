import {
    Component
} from '@angular/core';
import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule,
    Router
} from '@angular/router';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    LoginInterface
} from './login.interface'
import {
    LoginService
} from './../services/login/login.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/core/layout/layout.component.html',
})
class Login {

    private login = new LoginInterface();
    private validLogin = this.loginservice.isValidSession();
    private errorLogin = false;

    constructor(private loginservice: LoginService, private router: Router) {
        if (this.validLogin) {
            this.router.navigate(['welcome'])
        }
    }

    doLogin() {
        let url = `?username=${this.login.username}&clave=${this.login.clave}`
        this.loginservice.doLogin(url).subscribe(res => {
            if (Object.keys(res).length === 0) {
                this.errorLogin = true;
            } else {
                document.location.reload();
                localStorage.setItem('usuario', JSON.stringify(res));
            }
        })
    }
}

const routes: Routes = [{
    path: '',
    component: Login
}];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
    declarations: [Login]
})
export default class LoginModule {}