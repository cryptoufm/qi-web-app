declare var require: any
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ethers = require('ethers');
var Web3 = require('web3');
import constants from '../../assets/constants.json';
import qiRegistry from '../../assets/contracts/qiRegistry.json';
let web3 = new Web3(new Web3.providers.HttpProvider(constants.network));

@Component({
  selector: 'app-create-qi',
  templateUrl: './create-qi.component.html',
  styleUrls: ['./create-qi.component.css']
})
export class CreateQiComponent implements OnInit {

  public params;
  private sub: any;

  mnemonic: string;
  address: string;
  privateKey: string;
  wallet: any;
  colAlias: string;
  colTitle:string;
  title = "Hackathon 2018";
  info = "Primer hackathon de blockchain en centroamerica";
  collectionAddr = "0x45c53921DFbbF2de0561ab26EF89bf511d76AE8b"


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

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


  createQi(wallet, collectionAddr, title, info){
    var qiRegistryAddr = constants;
    var qiRegistryAbi = qiRegistry;
    var contract = new web3.eth.Contract(qiRegistryAbi, qiRegistryAddr.qiRegistry);
    var transactionobj = contract.methods.createQi(collectionAddr, title, info);
    transactionobj.estimateGas()
    .then(function(gasAmount){
      console.log(gasAmount)
      transactionobj.send({from: wallet, gas: gasAmount})
      .then(function(receipt){
        console.log(receipt)
        console.log(receipt.events.CreatedQi)
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
    this.createQi(this.address, this.collectionAddr, this.title, this.info);
  }

}
