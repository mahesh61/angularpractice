import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { retry } from 'rxjs';
import { User } from '../../../services/models/User';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input() parentData: string = "";
  @Output() childata: EventEmitter<string> = new EventEmitter<string>();
  @Input() uerData!: User;
  tittle1!: string;
  constructor() {
    console.warn("Constructor is Invoked.......")
  }


  ngOnChanges() {
    console.warn("ngOnChnages is Invoked.......")
  }

  ngOnInit(): void {
    console.warn("ngOnInit is Invoked.......")
    this.tittle1 = "mahesjkjkj"
  }
  // ngDoCheck() {
  //   console.warn("ngDocheck is Invoked.......")
  // }
  ngAfterContentInit() {
    console.warn("ngAfterContentInit is Invoked.......")
  }
  ngAfterContentChecked() {
    console.warn("ngAfterContentChecked is Invoked.......")

  }

  ngAfterViewInit() {
    console.warn("ngAfterViewInit is Invoked.......")
  }
  raiseEvent() {
    return this.childata.emit("data from child");
  }

}
