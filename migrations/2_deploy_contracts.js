var Collections = artifacts.require("./Collection.sol");
var Migrations = artifacts.require("./Migrations.sol");
var Qi = artifacts.require("./Qi.sol");
var Owner = artifacts.require("./Owner.sol");
var qiRegister = artifacts.require("qiRegistry")

//Colletions
var title = "academic";
var alias = "juanro";

//QI
var _title = "distincion academica";
var _other = "{\"text\":\"json\"}";

//Owner
var name = "Juan Roberto Bagur";

module.exports = function(deployer) {
  deployer.deploy(Collections,title,alias);
  deployer.deploy(Migrations);
  deployer.deploy(Qi,_title,_other);
  deployer.deploy(Owner,name);
  deployer.deploy(qiRegister);
};
