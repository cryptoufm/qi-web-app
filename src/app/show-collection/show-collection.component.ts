import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ethers = require('ethers');
var Web3 = require('web3');
import constants from '../../assets/constants.json';
import colRegistry from '../../assets/contracts/collectionRegistry.json';
let web3 = new Web3(new Web3.providers.HttpProvider(constants.network));

@Component({
  selector: 'app-show-collection',
  templateUrl: './show-collection.component.html',
  styleUrls: ['./show-collection.component.css']
})
export class ShowCollectionComponent implements OnInit {

  wallet: object;
  address: string = '0x3976C4b30F13b0270e20279dFc12400126FB7299';
  privateKey: string = '0x30CCF126CB71CEF1417D6DEA0C45A98A59B07E4E04B9161B5F9C37730C14EA64';
  qis: any;


  constructor() {
    web3.eth.accounts.wallet.add(this.privateKey);
  }

  ngOnInit() {
  }

}
