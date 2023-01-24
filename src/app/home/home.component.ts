import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AutheServideService } from '../authe-servide.service';

@Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

      constructor(private _route: Router, private authServise: AutheServideService) { }
      activeContact: string = ""
      activeProcucts: string = ""
      activeAbout: string = '';
      activeClass: string = "";

      // observables...

      countSubs!: Subscription;


      handleClick(pathString: string) {

            if (pathString == "products") {
                  this.activeProcucts = "active";
                  this.activeAbout = "";
                  this.activeContact = "";
            }
            else if (pathString == "About") {
                  this.activeProcucts = "";
                  this.activeAbout = "active";
                  this.activeContact = "";
            }
            else if (pathString == "contact") {
                  this.activeProcucts = "";
                  this.activeAbout = "";
                  this.activeContact = "active";
            }
            console.log(this.activeProcucts);
            this._route.navigate([pathString]);
            // this._route.navigate(['/products','786']);
            this._route.navigate(["/about"],
                  { queryParams: { page: 2, color: "red" }, queryParamsHandling: "preserve" })
      }

      ngOnInit(): void {

            //        let Obsevable= new Observable<any>((suns)=>{
            //       let count =0;
            //       setInterval(()=>{
            //            suns.next(count++);
            //       },1000);
            // })

            //    this.countSubs= Obsevable.subscribe((data)=>{
            //       console.log(data);
            //})
      }





      logIn() {
            this.authServise.onLogedIn();
      }
      logOut() {
            this.authServise.onLogedOut();
      }

      ngOnDestory() {
            this.countSubs.unsubscribe();
      }

}
