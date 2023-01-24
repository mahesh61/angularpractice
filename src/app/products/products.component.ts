import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _route:Router) { }
    headerListItem :any="headerListItem ";
    
   activeContact:string="active"
   activeProcucts:string=""
   activeAbout:string='';
   activeClass:string="";
  handleClick(pathString:string){
    
   this._route.navigateByUrl('/6'); 
  }

  ngOnInit(): void {
  }

}
