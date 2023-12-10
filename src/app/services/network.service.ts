import { Injectable } from '@angular/core';
import { data } from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor() { }

  obtainData(): any {
    return { ...data }
  }

}
