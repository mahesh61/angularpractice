import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutheServideService {

  isLogedIn:boolean=false;
  constructor() { }

  onLogedIn(){
    this.isLogedIn=true;
  }
  onLogedOut(){
    this.isLogedIn=false;
  }
}
