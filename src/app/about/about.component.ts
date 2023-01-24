import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    // using snapshot ....
    this.activatedRoute.snapshot.params["id"];
    this.activatedRoute.snapshot.paramMap.get("id"); // it ail return a map of route parameters

    // using observables...
    /// this is recomended approach to retrive patameres from routes
    this.activatedRoute.paramMap.subscribe(params => {
      let id: any = params.get("id");
    })

    this.activatedRoute.params.subscribe(param => {
      let id = param["id"];
    })
    // qury params ....
    this.activatedRoute.queryParamMap.subscribe(
      (param) => {
        let pagw = param.get("page");
      }
    )

    // retrive static route data...

    this.activatedRoute.data.subscribe(
      (info) => {
        let data = info;
      }
    )

    let stata = this.route.getCurrentNavigation()?.extras.state;
  }



}
