import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval } from 'rxjs';


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable1 = interval(1000);

    // observable1.subscribe(
    //   (data) => console.log(data)
    // )

    // observable1.pipe(filter((data => data % 2 == 0)))
    //   .subscribe(
    //     (data) => console.warn(data)
    //   )
    this.saveItemsIntoLocalStorage();
  }

  saveItemsIntoLocalStorage() {
    localStorage.setItem("name", "ahesksk")
    localStorage.setItem("password", "maheshz2!@765")
  }

}
