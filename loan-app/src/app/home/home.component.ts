/**
; Title: home.component.ts
; Author: Professor Krasso
; Date: 09/27/2023
; Modified By: Hannah Del Real
; Description: Home Component
; Sources: Calculations are based on equation provided Capstone -Loan App guidelines document by Professor Richard Krasso.
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loanForm: FormGroup;

  monthlyPayment: number = 0;
  interestPaid: number = 0;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: ['', Validators.required],
      numOfYears: ['', Validators.required],
      interestRate: ['', Validators.required]
    });
  }

  get form() {
    return this.loanForm.controls;
  };

calculateResults() {
  let loanAmount: number = parseFloat(this.loanForm.value.loanAmount);
  let numOfYears: number = parseFloat(this.loanForm.value.numOfYears);
  let interestRate: number = parseFloat(this.loanForm.value.interestRate);
  let i = ((interestRate / 100) / 12);
  let numOfMonths = (numOfYears * 12)

  this.monthlyPayment = (((loanAmount * i * Math.pow((1 + i), numOfMonths)))/((Math.pow((1 + i), numOfMonths)) - 1));
  this.interestPaid = ((this.monthlyPayment * numOfMonths) - loanAmount);
}

}


