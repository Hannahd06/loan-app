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
  loanAmount: number;
  numOfYears: number;
  interestRate: number;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: ['',[ Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
      numOfYears: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      interestRate: ['', [ Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]]
    });
  }

  get form() {
    return this.loanForm.controls;
  };

  calculateResults() {
    // Create a variable that hold the loan amount entered by user.
    let loanAmount = parseFloat(this.loanForm.value.loanAmount);

    // Create a variable that holds the loan term in years entered by the user.
    let numOfYears = parseFloat(this.loanForm.value.numOfYears);

    // Create a variable that holds the interest rate entered by the user.
    let interestRate = parseFloat(this.loanForm.value.interestRate);

    // create a variable with the value of the interest rate per month as a decimal.
    let i = ((interestRate / 100) / 12);

    // Create a variable the loan term in months.
    let numOfMonths = (numOfYears * 12);

    // Calculate the monthly payment based on values entered by the user.
    this.monthlyPayment = (((loanAmount * i * Math.pow((1 + i), numOfMonths)))/((Math.pow((1 + i), numOfMonths)) - 1));

    // Calculate the total interest paid that will have to be paid based on values entered by the user user.
    this.interestPaid = ((this.monthlyPayment * numOfMonths) - loanAmount);
  }

  // Clear form and reset interest paid and monthly payment values back to 0
  clearForm() {
    this.loanForm.reset();
    this.interestPaid = 0;
    this.monthlyPayment = 0;

  }
}


