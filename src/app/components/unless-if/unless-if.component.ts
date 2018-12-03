import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unless-if',
  templateUrl: './unless-if.component.html',
  styleUrls: ['./unless-if.component.css']
})
export class UnlessIfComponent implements OnInit {
  condition: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
