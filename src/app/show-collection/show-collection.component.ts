declare var require: any
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

  public params;
  private sub: any;

  wallet: any;
  address: string;
  privateKey: string;
  collection: string;
  mnemonic: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // web3.eth.accounts.wallet.add(this.privateKey);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.mnemonic = params['walletAddress'];
      this.wallet = ethers.Wallet.fromMnemonic(this.mnemonic);
      this.address = this.wallet.address;
      this.privateKey = this.wallet.privateKey;
      console.log(this.wallet);

      web3.eth.accounts.wallet.add(this.privateKey);

      this.getCollectionInfo(this.collection,this.address);
    });
  }
  getCollectionInfo(collectionAddr, wallet){
    var Collection = require('./contracts/Collection.json');
    var contract = new web3.eth.Contract(Collection.abi, collectionAddr);
    contract.methods.getCollectionInfo().call({from: wallet}, function(error, result){
      if(!error){
        console.log(result)
        return result;
      }
      else{
        console.log(error)
        return error;
      }
    });
  }


}
