import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-details',
  templateUrl: './interest-details.component.html',
  styleUrls: ['./interest-details.component.scss']
})
export class InterestDetailsComponent implements OnInit {

  @Input() interestPaid: number;

  constructor() { }

  ngOnInit(): void {
  }

}
