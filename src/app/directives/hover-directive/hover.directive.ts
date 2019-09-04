import { Directive, ElementRef, Renderer2, Input, HostListener, RendererStyleFlags2 } from "@angular/core";

@Directive({
    selector: '[hover-effect]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HoverDirective {
    private defaultColor: string;

    @Input() hoverColor: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
        this.defaultColor = element.nativeElement.style.color;
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.renderer.setStyle(this.element.nativeElement, "background-color", this.defaultColor);
    }

    onMouseEnter() {
        this.renderer.setStyle(this.element.nativeElement, "background-color",
            this.hoverColor, RendererStyleFlags2.Important);
    }
}