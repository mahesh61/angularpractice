import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {





  //  @ViewChild('contactForm',) contactForm: NgForm;

  contactObj: contact;
  constructor() {
    this.contactObj = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      mobile: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }

    };
    // this.contactForm=_contactForm
    // this.contactForm.setValue(this.contactForm);
  }

  ngOnInit(): void {

  }

  receive(data: string) {
    console.log("recieved fro chid in  parent " + data);
  }
  getFornData(contactInfo: any) {
    console.log(contactInfo.value);
  }
  reset(contactInfo: any) {
    contactInfo.reset();
  }

}


export interface contact {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  }
}





