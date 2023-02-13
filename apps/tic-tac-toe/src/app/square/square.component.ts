import { Component, Input } from '@angular/core';

@Component({
  selector: 'nr-maps-square',
  template: ` <button>{{ value }}</button> `,
  styles: ['button { border: 1px gray solid; height: 200px; width: 200px}'],
})
export class SquareComponent {
  @Input() value: string | 'X' | 'O' | '' = '';
}

