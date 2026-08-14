import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-card',
  host: {
    class: 'flex flex-col gap-2 rounded-xl bg-nav p-4 text-white shadow-md/30',
  },
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title = '';
}
