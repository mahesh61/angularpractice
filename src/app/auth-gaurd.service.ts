import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutheServideService } from './authe-servide.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

isloged:boolean=false

  constructor( private route:Router,private authServise:AutheServideService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean  | Observable<boolean> | Promise<boolean> {
   
    this.isloged= this.authServise.isLogedIn;
    if(this.isloged){
      return true;
    }
    else{
      return this.route.navigate(['/']);
    }
  };
   

}
