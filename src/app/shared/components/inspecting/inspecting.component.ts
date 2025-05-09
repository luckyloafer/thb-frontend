import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inspecting',
  imports: [],
  templateUrl: './inspecting.component.html',
  styleUrl: './inspecting.component.scss'
})
export class InspectingComponent {
@Input() size:number = 20 ;
}
