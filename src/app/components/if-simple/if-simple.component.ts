import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-if-simple',
  templateUrl: './if-simple.component.html',
  styleUrls: ['./if-simple.component.css']
})
export class IfSimpleComponent implements OnInit {
  condition: boolean = false;
  $user = null;

  constructor() {
    setTimeout(() => {
      this.$user = from([{name: 'Linus', pass: '0000'}]);
    }, 2000);
  }

  nextUser() {
    this.$user = from([{name: 'Hristo', pass: '1234'}]);
  }

  ngOnInit() {
  }

}
