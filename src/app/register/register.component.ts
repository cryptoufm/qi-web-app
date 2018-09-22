import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ethers = require('ethers');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  seed: string;
  wallet: object;
  address: string;
  mnemonic: string;
  privateKey: string;

  constructor(private route: ActivatedRoute, private router: Router) {

    let wallet = ethers.Wallet.createRandom();
    this.address = wallet.address;
    this.mnemonic = wallet.mnemonic;
    this.privateKey = wallet.privateKey;

  }

  register() {
    console.log(this.wallet);
    this.router.navigate(['../index-collection'], this.wallet);
  }

  ngOnInit() {
  }

}
