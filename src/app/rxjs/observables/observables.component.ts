import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomObserver } from '../services/ObserverCustom';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    var observale1 = new Observable<number>(


      (observer) => {
        for (let i = 1; i < 20; i++) {
          observer.next(i);
        }
        observer.complete();
      }
    );
    // tpe 1 to create a observer..
    let observer1 = {
      next: (data: number) => console.log("fomr... " + data),
      complete: () => console.log("completed"),
      error: (msg: string) => { console.log(msg) }
    };

    observale1.subscribe(observer1);

    // type 2 

    observale1.subscribe(

      {
        next: (data: number) => console.warn("asdjla" + data),
        error: (msg: string) => console.warn("jas" + msg),
        complete: () => console.warn("completed....")

      }
    );

    // type 3...
    observale1.subscribe(
      (data) => console.log(data),
      (msg) => console.log(msg),
      () => console.log("jdakl complete")

    );
    // type 3...
    observale1.subscribe(new CustomObserver());
  }



}
