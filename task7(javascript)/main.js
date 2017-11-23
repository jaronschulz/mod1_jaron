// Part 1
console.log('Starting javascript...');


// Part 2
var name = "Jaron";

console.log(name);

// Part 3
var myAge = 32;

console.log(myAge);

var averageAge = 30;

var ageDiff = myAge - averageAge;

if (averageAge > myAge) {
	console.log("I'm younger than the average.");
} else if (averageAge < myAge) {
	console.log("I'm older than the average.");
} else {
	console.log('I am equal to the average.');
};

// Part 4
var classMaids = ["Maria", "Jaron", "Shaket", "Patrick", "Simon", "Shmulik", "Fabricio", "Konrad", "Micha", "Ruben", "Jewe", "Vania", "Pratima", "Boerni" ];

console.log(classMaids);

classMaids.sort() ;

console.log(classMaids[0]);
console.log(classMaids [classMaids.length -1]);

for (var i = 0; i <classMaids.length; i++) {
	console.log( classMaids[i] );
};

// Part 5