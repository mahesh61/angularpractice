import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 productId:any;

  constructor(private _ActivatedRoute:ActivatedRoute) { 

    // this.productId=_ActivatedRoute.
  }

 

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params=>{
     this.productId=params.get('id');
     console.log("from daeai ls " +this.productId);
     console.log(this._ActivatedRoute.url);
    })
  }


}
