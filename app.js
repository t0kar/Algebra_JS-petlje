//Zadatak-1
var firstName = "Đontra";
var lastName = "Volta";

console.log(firstName, lastName);

//Zadatak-2
//var x = z === 2 ? y : 5;

var x = z;
var y = 0;
var z = 2;

if (x === 2 && z === 2) {
    console.log(y);
} else {
    console.log(5);
}

//Zadatak-3
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Broj", i, "je paran.");
    } else {
        console.log("Broj", i, "je neparan.");
    }
}