import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title = '';
}
