import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
var ethers = require('ethers');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  wallet: any;
  address: string;
  mnemonic: string;
  privateKey: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.wallet = ethers.Wallet.createRandom();
    this.address = this.wallet.address;
    this.mnemonic = this.wallet.mnemonic;
    this.privateKey = this.wallet.privateKey;
    console.log('Created wallet: ', this.wallet);
  }

  register() {
    console.log('Sending as param: ', this.wallet);
    this.router.navigate(['../index-collection', this.mnemonic]);
  }

}
