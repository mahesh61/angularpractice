import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  DefaultData: any;

  // teplate ref variables
  @ViewChild("pincode") pincodecontrol!: NgModel;


  constructor() {
    this.DefaultData = {
      name: "ywuiywierw",
      sname: "riweriw",
      email: "ujkajsijkj@gmail.com",
      password: "74k9797jkjqwek",
      pincode: "72384734",
      mobile: "8783428"
    }
  }

  ngOnInit(): void {
  }

  setDefault() {

  }
  save(formObj: NgForm) {

    console.log(this.pincodecontrol.value)
    console.log(formObj.controls["emalId"].touched);

  }

}
