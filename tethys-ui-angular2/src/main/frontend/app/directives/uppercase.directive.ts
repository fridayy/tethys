/**
 * Created by bnjm on 3/17/17.
 */
import {Directive, ElementRef, Renderer} from "@angular/core";

@Directive({
  selector: 'change-text'
})
export class UpperCaseDirective {
  constructor(renderer: Renderer, element:ElementRef) {
    renderer.setText(element.nativeElement, "Hello Universe!")
  }
}
