const accountId = 144553
let accountEmail = "MOhan@google.com"
var accountPassword = "12345"
accountCity="Pune"
let accountState

//accountId =2 //not allowed 

accountEmail="hc@hc.com"
accountPassword = "321321"
accountCity = "Tirupati"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])