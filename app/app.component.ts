import {
    AfterViewInit,
    ElementRef,
    Component
} from '@angular/core';
@Component({
  selector: 'app',
  template: `<main><router-outlet></router-outlet></main>`
})
export class App implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}
    ngAfterViewInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/core/app.js";
        this.elementRef.nativeElement.appendChild(s);
        
    }
}
