import {
    NgModule,
    Component,
    ViewContainerRef,
    Compiler,
    ComponentFactory,
    ComponentRef,
    ViewChild
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    RouterModule
} from '@angular/router';
import {
    MenuServices
} from './services/menu.service';
import {
    LoginService
} from './services/login/login.service';

@Component({
    selector: 'sidebar',
    template: `<ul #mymenu class="navigation navigation-main navigation-accordion"></ul>`,
    providers: [MenuServices, LoginService]
})

export class MyRouterLink {
    @ViewChild('mymenu', {
        read: ViewContainerRef
    }) target: ViewContainerRef;
    private cmpRef: ComponentRef < any > ;

    constructor(private dataServices: MenuServices, private compiler: Compiler, private _viewContainerRef: ViewContainerRef, private loginservice: LoginService) {}

    getIdUsuario() {
        let session = this.loginservice.getJsonSession();
        console.log(session[0]['id_usuario'])
        return session[0]['id_usuario'] || "";
    }

    ngAfterViewInit() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        let id_usuario = this.getIdUsuario();
        let queryparameter = `?id_usuario=${id_usuario}`;
        if (id_usuario != "") {
            this.dataServices.getMenuLinks(queryparameter).subscribe(res => {
                localStorage.setItem('menu', JSON.stringify(res))
                let menustring = localStorage.getItem('menu')
                this.compileToComponent(res).then((factory: ComponentFactory < any > ) => {
                    this.cmpRef = this.target.createComponent(factory)
                })
            })
        } else {
            this.compileToComponent("").then((factory: ComponentFactory < any > ) => {
                this.cmpRef = this.target.createComponent(factory)
            })
        }

    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
            this.cmpRef = null;
        }
    }

    private compileToComponent(template1: string): Promise < ComponentFactory < any >> {

        @Component({
            template: template1
        })
        class DynamicComponent {
        }

        @NgModule({
            imports: [BrowserModule, RouterModule],
            declarations: [DynamicComponent]
        })
        class DynamicModule {}

        return this.compiler.compileModuleAndAllComponentsAsync(DynamicModule).then(
            factory => factory.componentFactories.find(x => x.componentType === DynamicComponent)
        )
    }
}