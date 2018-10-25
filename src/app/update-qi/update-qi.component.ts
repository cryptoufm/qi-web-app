declare var require: any
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ethers = require('ethers');
var Web3 = require('web3');
import constants from '../../assets/constants.json';
import qiRegistry from '../../assets/contracts/qiRegistry.json';
let web3 = new Web3(new Web3.providers.HttpProvider(constants.network));

@Component({
  selector: 'app-update-qi',
  templateUrl: './update-qi.component.html',
  styleUrls: ['./update-qi.component.css']
})

export class UpdateQiComponent implements OnInit {

  public params;
  private sub: any;

  wallet: any;
  address: string;
  privateKey: string;
  qi: string;
  collection: string;
  receivingAddr: string;
  mnemonic: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.mnemonic = params['walletAddress'];
      this.wallet = ethers.Wallet.fromMnemonic(this.mnemonic);
      this.address = this.wallet.address;
      this.privateKey = this.wallet.privateKey;
      console.log(this.wallet);

      web3.eth.accounts.wallet.add(this.privateKey);
    });
  }

  issueQi(issuedQi, receiverAddr, collection, wallet){
    var registryAddr = constants;
    var qiRegistry = qiRegistry;
    var contract = new web3.eth.Contract(qiRegistry, registryAddr.qiRegistry);
    var transactionobj = contract.methods.issueQi(issuedQi, receiverAddr, collection);
    transactionobj.estimateGas()
    .then(function(gasAmount){
      console.log(gasAmount)
      transactionobj.send({from: wallet, gas: gasAmount})
      .then(function(receipt){
        console.log(receipt)
      })
      .catch(function(error){
        console.log(error)
      });
    })
    .catch(function(error){
      console.log(error)
    });
  }

  issue() {
    this.issueQi(this.qi, this.receivingAddr, this.collection, this.address);
  }

}
