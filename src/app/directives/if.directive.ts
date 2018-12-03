import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private _hasView: boolean = false;

  constructor(private _template: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

  @Input() set appIf(condition: boolean) {
    if (condition && !this._hasView) {
      this._viewContainer.createEmbeddedView(this._template);
      this._hasView = true;
    } else if ( !condition && this._hasView ) {
      this._viewContainer.clear();
      this._hasView = false;
    }
  }

}
