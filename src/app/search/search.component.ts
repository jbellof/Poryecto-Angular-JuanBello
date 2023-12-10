import { Component } from '@angular/core';
import { PersonalInformationService } from '../services/personal-information.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private personalInformation: PersonalInformationService) {}

}
