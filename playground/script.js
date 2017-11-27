console.log('hi')

// Garage 4 Spots
// Park my cars

// Cars have wheels

// Attributes:
// Color
// Model
// Brand
// Fueltank

//Functionalities:
// - drive
// - honk

function Car(brand,model,color,fuel){

	this.color = color;
	this.model = model;
	this.brand = brand;
	this.fueltank = fuel;

	this.drive = function () {
		console.log("I'm driving")
	}
	this.honk = function () {
		alert("honk!");
	}
}

var audiTT = new Car('Audi', 'TT', 'red', 60);
console.log(audiTT);

var mercedesSLK = new Car('Mercedes', 'SLK', 'gray', 50);
console.log(mercedesSLK);

var mitsubishiWagon = new Car('Mitsubishi', 'Wagon', 'blue', 35);
var fordFocus = new Car('Ford', 'Focus', 'black', 41);
var hondaCivic = new Car('Honda', 'Civic', 'green', 21);


// audiTT.drive();
// audiTT.honk();


// attributes:
// - spots (limited to four)
// functionalities:
// - park car
// - get a car out

function Garage (spots) {
	
	this.spots = [];
	this.maximumspots = spots;

	this.parkCar = function(car){
		if(this.spots.length < this.maximumspots) {
		this.spots.push(car);
		} else {
			console.error('no space, cant park the ' + car.model)
		}
	}

	this.getCar = function(){

	}
	this.showCars = function(){
		console.table(this.spots)

		}

}

var jaronsGarage = new Garage(4);
console.log(jaronsGarage);

jaronsGarage.parkCar(audiTT);
jaronsGarage.showCars();
jaronsGarage.parkCar(mercedesSLK);
jaronsGarage.showCars();
jaronsGarage.parkCar(mitsubishiWagon);
jaronsGarage.parkCar(fordFocus);
jaronsGarage.showCars();
jaronsGarage.parkCar(hondaCivic);
jaronsGarage.showCars();










// JSON

var jaron = {
	firstname : "Jaron",
	lastname :  'Schulz',
	birthday : {
		year : 1985,
		month : 03,
		day : 27,
	},
	fullname : function(){
		return this.firstname + " " + this.lastname
	}
}
console.log(jaron.fullname() );
jaron.firstname = "Jay";
console.log(jaron.fullname());


// API 

var luke = {
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.co/api/planets/1/", 
    "films": [
        "https://swapi.co/api/films/2/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/", 
        "https://swapi.co/api/films/7/"
    ], 
    "species": [
        "https://swapi.co/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.co/api/vehicles/14/", 
        "https://swapi.co/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.co/api/starships/12/", 
        "https://swapi.co/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.co/api/people/1/"
}

console.log(luke.films);

var homeplanet = {};
$.getJSON("https://swapi.co/api/planets/1/",function(data, textStatus,jqXHR){
	console.log('got a server responds');
	console.log(data);
	homeplanet = data;

	$('#planetname').text(data.name)
})


