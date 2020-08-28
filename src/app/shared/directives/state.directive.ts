import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') hostClassName: string;
  constructor() {
  }

  ngOnChanges() {
    this.hostClassName = this.formatClass(this.appState);
  }

  private formatClass(state: string): string {
    return `state-${state.replace(/ /g, '').toLowerCase()}`;
  }

}

// appState vaut CANCELED => state-canceled
// appState vaut OPTION => state-option
// appState vaut CONFIRMED => state-confirmed
// Binder la propriété class du host element th avec state-canceled, ou state-option ou state-confirmed
