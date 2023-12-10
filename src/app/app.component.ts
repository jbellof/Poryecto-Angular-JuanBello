import { Component } from '@angular/core';
import menu from "../assets/menu"
import footer from "../assets/footer"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenidos a mi perfil';
  menu = menu;
  footer = footer;

  ngOnInit() {
    console.log("Hola desde mi componente, esto solo se vera un vez");
  }

  ngAfterViewInit() {
    console.log("Hola desde mi componente, esto solo se vera un vez después de que se inicializo mi vista");
  }

  ngAfterViewChecked() {
    console.log("Hola desde mi componente, esto solo se vera un vez después de que hay cambios en mi vista");
  }
  
  ngOnDestroy() {
    console.log("Se verá hasta que mi componente se vaya o se destruya");
  }
}
