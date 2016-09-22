import {
    Component
} from '@angular/core';
import {
    LoginService
} from './../services/login/login.service';
import {
    Router
} from '@angular/router';
import {
    LoginInterface
} from './login.interface'

@Component({
    selector: 'my-app',
    templateUrl: 'app/core/login/login.component.html',
    providers: [LoginService]
})
export class LoginComponent {
    private login = new LoginInterface();
    private validLogin = this.loginservice.isValidSession();
    private errorLogin = false;

    constructor(private loginservice: LoginService, private router: Router) {
        console.log(this.validLogin)
        if (this.validLogin) {
            
            this.router.navigate(['welcome'])
        }
    }

    doLogin() {
        let url = `?username=${this.login.username}&clave=${this.login.clave}`
        this.loginservice.doLogin(url).subscribe(res => {
            if(Object.keys(res).length === 0){
                this.errorLogin = true;
            }else{
                document.location.reload();
                localStorage.setItem('usuario',JSON.stringify(res));
            }
        })


    }
}