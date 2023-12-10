import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  img1 = "/assets/instagram-logo.svg";
  img2 = "/assets/facebook-logo.svg";

  redSocial = true; // true = instagram, false = facebook
}
