import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
var ethers = require('ethers');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  wallet: any;
  address: string;
  mnemonic: string;
  privateKey: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  login(){
    this.wallet = ethers.Wallet.fromMnemonic(this.mnemonic);
    console.log('Wallet retrieved: ', this.wallet);
    this.address = this.wallet.address;
    this.privateKey = this.wallet.privateKey;
    console.log('Sending as param: ', this.privateKey);
    this.router.navigate(['../index-collection', this.mnemonic]);
  }

}

