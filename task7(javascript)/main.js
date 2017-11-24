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

console.log('WHILE-VERSION:')

var studentAges = [27,32,21,40,30,29,30,33,30,28,31,32,28,21];

var i = 0;

while (i < studentAges.length) {
	console.log(studentAges[i]);
	i++;
};


console.log('IF-VERSION:')


for (var i = 0; i < studentAges.length; i++) {
	if (studentAges[i] % 2 == 0) {
			console.log( studentAges[i] );
		} else {}
};

//  Part 6


var exampleArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

console.log('MIN')
minNumber(exampleArray);
console.log('MAX')
maxNumber(exampleArray);
console.log('INDEX')
printIndex(exampleArray, 0);
console.log('REPEAT'),
printDuplicates(exampleArray);


function minNumber(arr) {
  console.log(Math.min.apply(null, arr));
};

function maxNumber(arr) {
  console.log(Math.max.apply(null, arr));
};

function printIndex(arr, index) {
	console.log(arr[index])
};


function printDuplicates(arr) {
	var duplicates = [];
	arr.forEach(function(element, index) {
		if (arr.indexOf(element, index + 1) > -1) {
			if (duplicates.indexOf(element) == -1) {
				duplicates.push(element);
			}
		}
	})
	
	console.log(duplicates);

};

//  Part 7

var myColors = ["Red", "Green", "White", "Black"];


function joinArray(arr, delimiter) {
	var txt = 'Simple Array Content: ';
	console.log( txt.bold() + '  ' + arr.join());
	console.log(arr.join(delimiter))
}

joinArray(myColors, ' // ');

joinArray(myColors, ',- ');

joinArray(myColors, '  ############ ');

// Part 8

// function reverseNumber(number) {
// 	if (Number.isInteger(number) == true ) {

// 		return []

// 	} else {
// 		return ["Input is not a number"]
// 	}
// }

// console.log(reverseNumber)


// Part 10

function longestWord (str){
	var arr = str.split(" ");
	arr.sort(function (a,b) { return b.length-a.length;
	})
	console.log(arr[0]);

}

longestWord('Web Development Tutorial')




