import {
    Component,
    AfterViewInit
} from '@angular/core';
import {
    MenuServices
} from '../services/menu.service';


@Component({
    templateUrl: 'src/core/sidebar/sidebar.component.html',
    providers: [MenuServices]
})

export class SidebarComponent {
    private sidebar: any;
    private menustring: string = '';
    constructor(private menuservices: MenuServices) {

      

    }
}