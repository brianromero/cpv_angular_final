import {Component} from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
    selector : 'header',
    templateUrl: 'app/core/header/header.component.html',
    providers: [LoginService]
})
export class HeaderComponent {
    private hola= [1,2,3,4,5,6,33,3,4,5,5]
    constructor(private loginservice : LoginService){
        
    }

    logout(){
        this.loginservice.logout();
        this.loginservice.logout('menu');
        document.location.reload()
    }
}