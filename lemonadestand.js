"use strict";
function getUserInput(Message){
    var userData;
    userData = window.prompt(Message);
    return userData;
}

function getWeather(){
    var temperature;
    temperature = Math.floor((Math.random() * 50) + 50);
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

function chooseRecipe(){
	var playerChoice;
	var lowerCaseInput
	playerChoice = getUserInput("Please choose a recipe 'Tart' 'Standard' or 'sweet' ");
	lowerCaseInput = playerChoice.toLowerCase()
	if (lowerCaseInput === tart) {
		return 1;
	} else if (lowerCaseInput === standard) {
		return 2;
	} else if (lowerCaseInput === sweet) {
		return 3;
	} else {
		alert("Please enter only 'Tart' 'Standard' or 'Sweet' ");
		chooseRecipe();
	}
}

function choosePrice() {
	var playerChoice;
	var roundedOutput;
	var numberCheck;
	playerChoice = getUserInput("Please enter a price in cents for your lemonade. (min 0 , max 500)");
	numberCheck = isNaN(playerChoice);

	if (numberCheck = true) {
		alert("User input is not a number");
		choosePrice();
	} else if (playerChoice < 0 || playerChoice > 500){
		alert("User input is outside of min-max range");
		choosePrice();
	} else {
		roundedOutput = math.floor(playerChoice)
		return roundedOutput
	}
}

function purchaseInventory(inventory,playerMoney){

}

function Main(){
    var customerArray = [];
    var inventory 
    var numberOfCustomers;
    var playerMoney;
    var price
    var recipe
    var temperature

    inventory = {Lemons:0 , Sugar:0 , Cups:0 , Ice:0}
    numberOfCustomers = 100;
    playerMoney = 2000

    customerArray = populateCustomerArray(numberOfCustomers);


    console.log (customerArray[0]);
    alert("You currently have " + inventory.Lemons + " lemons, " + inventory.Sugar + " cups of sugar, " + inventory.Cups + " paper cups, " + inventory.Ice + " ice cubes.");
}


Main();