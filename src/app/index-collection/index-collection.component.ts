import { Component, OnInit, OnDestroy } from '@angular/core';
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
  private sub: any;

  wallet: any;
  address: string;
  privateKey: string;
  collections: any;
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

      this.getCollectionList(this.address);
    });

  }

  getCollectionList (wallet) {
    var colRegistryAddr = constants.collectionRegistry;
    var colRegistryAbi = colRegistry;
    // console.log(colRegistryAddr);
    // console.log(colRegistryAbi);
    // console.log(this.address);
    var contract = new web3.eth.Contract(colRegistryAbi.abi, colRegistryAddr);
    contract.methods.getCollectionsByAddr(wallet).call({from: wallet}, function(error, result){
      if(!error){
        console.log('collections: ');
        console.log(result);
        return result;
      }
      else {
        console.log("Error ", error);
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  createCollection() {
    this.router.navigate(['../create-collection', this.mnemonic]);
  }

}
