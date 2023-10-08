const accountId = 144553
let accountEmail = "Suhail@google.com"
var accountPassword = "12345"
accountCity = "Up"
let accountState;

// accountId = 2 // not allowed


accountEmail = "Sc@Sc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])