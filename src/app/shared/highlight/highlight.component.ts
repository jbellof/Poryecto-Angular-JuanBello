import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent {
  @Input('src')
  image: string = "/assets/plus.png"

  @Input()
  title: string = "Nueva"
}
