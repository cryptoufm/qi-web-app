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

  public params;
  private sub: any;

  mnemonic: string;
  address: string;
  privateKey: string;
  wallet: any;
  colAlias: string;
  colTitle:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // web3.eth.accounts.wallet.add(this.privateKey);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.mnemonic = params['mnemonic'];
      console.log(this.mnemonic);
      this.wallet = ethers.Wallet.fromMnemonic(this.mnemonic);
      this.address = this.wallet.address;
      this.privateKey = this.wallet.privateKey;
      web3.eth.accounts.wallet.add(this.privateKey);
    });
  }

  createCollection(walletAddr, title, alias) {
    var colRegistryAddr = constants;
    var colRegistryAbi = colRegistry;
    console.log(colRegistryAddr.collectionRegistry)
    console.log("walletaddr:",walletAddr)

    var contractMethod = new web3.eth.Contract(colRegistryAbi, colRegistryAddr.collectionRegistry)
      .methods.create(title, alias);

      contractMethod.estimateGas({from: walletAddr})
      .then(function(gasAmount){
          console.log("Gas for transaction: ")
          console.log(gasAmount)
          contractMethod.send({from: walletAddr, gas: gasAmount})
          .then(function(result){
            console.log("Creation succesful:")
            console.log(result)
          })
          .catch(function(error){
            console.log(error)
          });
      })
      .catch(function(error){
          console.log(error)
      });

  }

  create() {
    this.createCollection(this.address, this.colTitle, this.colAlias);
    this.router.navigate(['../index-collection', this.mnemonic]);
  }

}
