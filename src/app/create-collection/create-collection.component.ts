declare var require: any
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ethers = require('ethers');
var Web3 = require('web3');
import constants from '../../assets/constants.json';
import colRegistry from '../../assets/contracts/collectionRegistry.json';
let web3 = new Web3(new Web3.providers.HttpProvider(constants.network));

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {

  address: string = '0x3976C4b30F13b0270e20279dFc12400126FB7299';
  privateKey: string = '0x30CCF126CB71CEF1417D6DEA0C45A98A59B07E4E04B9161B5F9C37730C14EA64';
  colAlias: string;
  colTitle:string;

  constructor() {

    web3.eth.accounts.wallet.add(this.privateKey);

  }

  createCollection(walletAddr, title, alias) {
    var colRegistryAddr = constants.collectionRegistry;
    var colRegistryAbi = colRegistry;
    console.log(colRegistryAbi);
    console.log(colRegistryAddr);

    var contract = new web3.eth.Contract(colRegistryAbi.abi, colRegistryAddr);
    contract.methods.createCollection(title, alias).estimateGas( function(error, gasAmount){
      console.log(gasAmount);
      contract.methods.createCollection(title, alias).send({from: walletAddr, gas: gasAmount}, function(error, result){
        if(!error){
          console.log(result);
          return result;
        }
        else {
          console.log("Error ", error)
        }
      });
    }
    )

  }

  create() {
    this.createCollection(this.address, this.colTitle, this.colAlias);
  }

  ngOnInit() {

  }

}
