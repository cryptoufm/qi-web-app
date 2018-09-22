declare var require: any
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ethers = require('ethers');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  seedPhrase: string = "bicycle picnic flight way parade husband guide leader ghost party gauge lounge";
  wallet: object;
  address: string;
  mnemonic: string;
  privateKey: string;

  constructor(private route: ActivatedRoute, private router: Router) {

    let wallet = ethers.Wallet.fromMnemonic(this.seedPhrase);
    this.address = wallet.address;
    this.privateKey = wallet.privateKey;

  }

  login(){
    // alert(this.privateKey);
    this.router.navigate(['../index-collection']);
  }

  ngOnInit() {
  }

}
