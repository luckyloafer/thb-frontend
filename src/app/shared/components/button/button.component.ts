import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type = 'p';
  @Input() size?:'s'|'m'|'l'|'xl';
  @Input() variant:'p'|'s'|'t' = 'p'; 
}
