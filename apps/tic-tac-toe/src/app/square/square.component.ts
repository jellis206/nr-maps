import { Component, Input } from '@angular/core';

@Component({
  selector: 'nr-maps-square',
  template: ` <button>{{ value }}</button> `,
  styles: [],
})
export class SquareComponent {
  @Input() value: string | 'X' | 'O' | '' = '';
}

