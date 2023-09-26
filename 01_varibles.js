const accountId = 143432;
let accountEmail = "prabhatranjanparida@gmail.com";
var accountPassword = " 12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2;

accountEmail = "hdssk@gmal.com";
accountPassword = " 32323";
accountCity = " Bengaluru";

console.log(accountId);

/* Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);