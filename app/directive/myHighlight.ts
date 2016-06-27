/**
 * Created by nanzhao on 6/26/16.
 */
import {Directive, Input, ElementRef, HostListener}  from '@angular/core';

@Directive({
  selector: '[myHighlight]',
  //templateUrl: 'app/user/user.detail.html',
})
export class MyHighlightDirective {
  private _defaultColor = 'red';
  private el:HTMLElement;

  @Input('myHighlight') highLightColor:string;

  constructor(element:ElementRef) {
    this.el = element.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color:string) {
    this.el.style.backgroundColor = color;
  }
}
