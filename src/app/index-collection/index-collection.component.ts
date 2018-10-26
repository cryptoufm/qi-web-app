declare var require: any
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ethers = require('ethers');
var Web3 = require('web3');
import constants from '../../assets/constants.json';
import colRegistry from '../../assets/contracts/collectionRegistry.json';
import collec from '../../assets/contracts/Collection.json';
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
  numberOptions: any;
  collectionArray: any;

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
      web3.eth.accounts.wallet.add(this.privateKey);
    });

    this.collectionArray = this.getCollectionList(this.address);
    this.numberOptions= ["0x71d89ada80401626FeF99EeCEe422D72eb9c010A", "0x7A948c055eBA06f1787eD1bE428eCa17AB537002", "0x546F81b9c199249c876A9A718EC742222118f717"];
    console.log(this.numberOptions);

    // this.retrieve()
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

  }


  // retrieve() {
  //   let promise = new Promise((resolve, reject) => {
  //     let data = this.numberOptions.map(col => {
  //       this.getCollectionInfo(col, this.address);
  //     });
  //     if (data) {
  //       resolve(data);
  //     } else {
  //       reject('Error');
  //     }
  //   });
  //   return promise
  // }




  getProfiles() {
    return new Promise(() => {
      this.numberOptions.map(col => {
        return this.getCollectionInfo(col, this.address);
      });
    })
  }

  async getFinalResult() {
    await this.getProfiles();
  }



  getCollectionInfo(collectionAddr, address){
    var Collection = constants.collection;
    var contract = new web3.eth.Contract(collec, collectionAddr);
    contract.methods.getCollectionInfo().call({from: address}, function(error, result){
        console.log("Get Collection result: ", result)
        this.finalArray.push(result);
        return result;
    });
  }

  getCollectionList (address) {
    var colRegistryAddr = constants.collectionRegistry;
    var colRegistryAbi = colRegistry;
    var contract = new web3.eth.Contract(colRegistryAbi, colRegistryAddr);
    contract.methods.getCollectionsByAddr(address).call({from: address}, function(error, result){
      if(!error){
        this.collections = result;
        console.log('collections: ', this.collections);
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


  goToCollection(collection) {
    this.router.navigate(['../show-collection', collection, this.mnemonic]);
  }




}
