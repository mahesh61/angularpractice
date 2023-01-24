import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent: any;

  @Output() ItemEvent = new EventEmitter<string>();

  send(childData: any) {
    console.log(childData.value);
    this.ItemEvent.emit(childData.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
