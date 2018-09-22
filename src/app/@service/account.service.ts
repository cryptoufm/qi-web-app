import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/b48aeb09bb684b1eb6a6d81261b6d42c"));
  }

  web3.eth.defaultAccount = web3.eth.accounts[0];
  var ownerContract = web3.eth.contract('Contract ABI');

  var owner = ownerContract.at('PASTE CONTRACT ADDRESS HERE');
  console.log(owner);


  constructor() { }
}
