import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent {

  // De esta manera podemos obtener el valor de la url como parametro dinamico
  constructor(private router: ActivatedRoute) {
    console.log("router", this.router.snapshot.params)
  }

}
