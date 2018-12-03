import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private _context: NgIfContext = new NgIfContext();
  private _hasView: boolean = false;

  constructor(private _template: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

  @Input() set appIf(condition: boolean) {
    this._context.$implicit = this._context.appIf = condition;
    if (condition && !this._hasView) {
      this._viewContainer.createEmbeddedView(this._template, this._context);
      this._hasView = true;
    } else if ( !condition && this._hasView ) {
      this._viewContainer.clear();
      this._hasView = false;
    }
  }

}

export class NgIfContext {
  public $implicit: any = null;
  public appIf: any = null;
}
