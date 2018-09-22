declare var require: any
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ethers = require('ethers');
var Web3 = require('web3');
import constants from '../../assets/constants.json';
import colRegistry from '../../assets/contracts/collectionRegistry.json';
let web3 = new Web3(new Web3.providers.HttpProvider(constants.network));



@Component({
  selector: 'app-index-collection',
  templateUrl: './index-collection.component.html',
  styleUrls: ['./index-collection.component.css']
})
export class IndexCollectionComponent implements OnInit {

  public params;

  wallet: object;
  address: string = '0x3976C4b30F13b0270e20279dFc12400126FB7299';
  privateKey: string = '0x30CCF126CB71CEF1417D6DEA0C45A98A59B07E4E04B9161B5F9C37730C14EA64';
  collections: object;

  constructor(private route: ActivatedRoute, private router: Router) {

    web3.eth.accounts.wallet.add(this.privateKey);

  }

  getCollectionList (wallet) {
    var colRegistryAddr = constants.collectionRegistry;
    var colRegistryAbi = colRegistry;
    console.log(colRegistryAddr);
    console.log(colRegistryAbi);
    console.log(this.address);
    var contract = new web3.eth.Contract(colRegistryAbi.abi, colRegistryAddr);
    contract.methods.getCollectionsByAddr(wallet).call({from: wallet}, function(error, result){
      if(!error){
        console.log(result);
        return result;
      }
      else {
        console.log("Error ", error);
      }
    })
  }



  ngOnInit() {
    let objeto = parseInt(this.route.snapshot.paramMap.get('wallet'));
    this.params = objeto;
    console.log(this.params);

    // this.collections = this.getCollectionList(this.wallet);
    console.log(this.getCollectionList(this.address));

  }

  createCollection() {
    this.router.navigate(['../create-collection']);
  }

}
