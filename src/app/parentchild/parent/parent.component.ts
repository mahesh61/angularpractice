import { Component, OnInit } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message: string = "";
  childmessage: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  sendData(message: string) {
    this.message = message;
  }

  receiceDtatfromChild(data: string) {
    this.childmessage = data;
  }

}
