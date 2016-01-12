"use strict";
function getUserInput(Message){
    var userData;
    userData = window.prompt(Message);
    return userData;
}

function getWeather(){
    var temperature;
    temperature = Math.floor((Math.random() * 100) + 50);
    return temperature;
}
function calcLikelyhoodOfMakingSale(temperatureModifier,priceModifier){
    var customerBuyThreshold;
    customerBuyThreshold = 10;
    customerBuyThreshold = (customerBuyThreshold * temperatureModifier * priceModifier);
}
function calcTemperatureModifier(temperature){
	if (temperature > 90){
		return .25;
	} else if (temperature > 80){
		return .5;
	} else if (temperature > 70){
		return .75;
	} else if (temperature > 60){
		return 1;
	} else {
		return 1.25;
	}
}
function calcPriceModifier(price){
	if (price < 20){
		return .2;
	} else if (price < 30){
		return .25;
	} else if (price < 50){
		return .5;
	} else if (price < 75){
		return .75;
	} else if (price < 100){
		return 1;
	} else if (price < 200){
		return 1.25;
	} else if (price < 300){
		return 1.75;
	} else {
		return 2.5;
	}
}

function customer(){
    this.lemonadePreference = Math.floor((Math.random() * 3) + 1);
    this.weatherPreference = Math.floor((Math.random() * 5) + 1);
    this.buyThreshhold = 10;
};

function populateCustomerArray(numberOfCustomers){
    var customerArray = [];

    for (var i = 0; i < numberOfCustomers; i++){
        customerArray.push(new customer());
    }
    return customerArray;
}

function Main(){
    var customerArray = [];
    var inventory = [0,0,0,0];
    var numberOfCustomers;
    var playerMoney;

    numberOfCustomers = 100;


    customerArray = populateCustomerArray(numberOfCustomers);
    console.log (customerArray[0]);
}


Main();