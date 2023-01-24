import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  keyword = 'name';
  data: any = null;


  constructor() {

    this.data = [
      {
        id: 1,
        name: 'Georgia'
      },
      {
        id: 2,
        name: 'Usa'
      },
      {
        id: 3,
        name: 'England'
      },
      {
        id: 1,
        name: 'Geor'
      },
      {
        id: 2,
        name: 'hyderabd'
      },
      {
        id: 3,
        name: 'Delhi'
      }
    ];
  }

  ngOnInit(): void {

  }

  selectedEnvet(event: any): void {
    console.log("value from drob down is selected ...")
    console.log(event.id)
  }
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    console.log("user enetering value in input .. ...")
  }

  onFocused(e: any) {
    // do something when input is focused
    console.log("value is focused...")
  }
}
