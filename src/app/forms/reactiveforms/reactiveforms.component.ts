import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  formObject!: FormGroup;
  addressForm!: FormGroup;


  constructor() {

    this.createForm();
  }

  createForm() {
    this.formObject = new FormGroup(
      {
        fname: new FormControl(),
        sname: new FormControl(),
        email: new FormControl(),
        passwd: new FormControl(),
        mobile: new FormControl(),
        pincode: new FormControl()

      }

    );

    this.addressForm = new FormGroup({
      city: new FormControl(),
      mondal: new FormControl(),
      district: new FormControl(),
      country: new FormControl(),
      state: new FormControl(),
      address: this.addressForm
    })


    this.formObject.addControl("city", new FormControl());


    //Setting Default value as string
    var firstname = new FormControl({ value: "jlka", disabled: true }, [Validators.required, Validators.minLength(10)]);


  }

  saveData() {
    console.log(this.formObject.get("sname")?.valid)
  }

  ngOnInit(): void {
  }

}
