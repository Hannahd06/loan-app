/**
; Title: home.component.ts
; Author: Professor Krasso
; Date: 10/01/2023
; Modified By: Hannah Del Real
; Description: interest-details Component
*/


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
