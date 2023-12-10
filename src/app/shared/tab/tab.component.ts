import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  @Input()
  id: number = 0;

  @Input()
  title: string = `tab ${this.id}`;
  
  @Input()
  icon: string = "bi-app";

  @Input()
  active: boolean = false;
}
