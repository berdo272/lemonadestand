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

function calcLikelyhoodOfMakingSale(temperature,price,config){
    var customerBuyThreshold;
    customerBuyThreshold = (config.defualtCustomerBuyThreshold * temperature.modifier * price.modifier);
    return customerBuyThreshold

}

function calcTemperatureModifier(temperature){
    var randomTemperature
    randomTemperature = getWeather
    if (randomTemperature > 90){
        temperature.rangeValue = 5;
        temperature.modifier = 0.25;
    } else if (randomTemperature > 80){
        temperature.rangeValue = 4;
        temperature.modifier = 0.50;
    } else if (randomTemperature > 70){
        temperature.rangeValue = 3;
        temperature.modifier = 0.75;
    } else if (randomTemperature > 60){
        temperature.rangeValue = 2;
        temperature.modifier = 1.25;
    } else {
        temperature.rangeValue = 1;
        temperature.modifier = 1.5;
    }
    return temperature
}

function calcPriceModifier(price){
    if (price.actualValue < 20){
        price.modifier = 0.2;
    } else if (price.actualValue < 30){
        price.modifier = 0.25;
    } else if (price.actualValue < 50){
        price.modifier = 0.5;
    } else if (price.actualValue < 75){
        price.modifier = 0.75;
    } else if (price.actualValue < 100){
        price.modifier = 1;
    } else if (price.actualValue < 200){
        price.modifier = 1.25;
    } else if (price.actualValue < 300){
        price.modifier = 1.75;
    } else {
        price.modifier = 2.5;
    }
    return price
}

function customer(){
    this.lemonadePreference = Math.floor((Math.random() * 3) + 1);
    this.weatherPreference = Math.floor((Math.random() * 5) + 1);
}

function populateCustomerArray(numberOfCustomers){
    var customerArray = [];

    for (var i = 0; i < numberOfCustomers; i++){
        customerArray.push(new customer());
    }
    return customerArray;
}

function chooseRecipe(){
    var playerChoice;
    var lowerCaseInput;
    playerChoice = getUserInput("Please choose a recipe 'Tart' 'Standard' or 'sweet' ");
    lowerCaseInput = playerChoice.toLowerCase();
    if (lowerCaseInput === "tart") {
        return 1;
    } else if (lowerCaseInput === "standard") {
        return 2;
    } else if (lowerCaseInput === "sweet") {
        return 3;
    } else {
        alert("Please enter only 'Tart' 'Standard' or 'Sweet' ");
        chooseRecipe();
    }
}

function choosePrice(price) {
    var playerChoice;
    var actualPrice;
    playerChoice = getUserInput("Please enter a price in cents for your lemonade. (min 0 , max 500)");
    actualPrice = validNumberCheck(playerChoice,0,500);
    
    price.actualValue = actualPrice;

    return price;
}

function displayInventory(inventory){
    var moneyConvertedToWholeDollar;
    var output;
    output = (inventory.money / 100);
    moneyConvertedToWholeDollar = output.toFixed(2);

        alert("You currently have " + inventory.lemons + " lemons, " + inventory.sugar + " cups of sugar, " + inventory.cups + " paper cups, " + inventory.ice + " ice cubes. You currently have $" + moneyConvertedToWholeDollar);
        console.log("You currently have " + inventory.lemons + " lemons, " + inventory.sugar + " cups of sugar, " + inventory.cups + " paper cups, " + inventory.ice + " ice cubes. You currently have $" + moneyConvertedToWholeDollar);
}

function validNumberCheck(Input,Min,Max){
    var numberCheck;
    var number
    var roundedOutput
    number = Number(Input)

    numberCheck = isNaN(number);
    if (numberCheck === true) {
        alert(Input + " is not a number");
        Input = getUserInput("Please enter a valid number");
        validNumberCheck (Input,Min,Max);
    } else if (number < Min || number > Max){
        alert("User input is outside of min-max range");
        Input = getUserInput("Please enter a valid number");
        validNumberCheck(Input,Min,Max);
    } else {
        roundedOutput = Math.floor(number);
        return roundedOutput;
    }
}
function getGoodPrice(i,config,specifiedBuyAmmount){
    var goodPrice;
    var goodBasePrice;
    var internalThreshold1;
    var internalThreshold2;

    if (i === 0){
        internalThreshold1 = config.lemonWholesaleThreshold1;
        internalThreshold2 = config.lemonWholesaleThreshold2;
        goodBasePrice = config.lemonBasePrice;
    } else if (i === 1){
        internalThreshold1 = config.sugarWholesaleThreshold1;
        internalThreshold2 = config.sugarWholesaleThreshold2;
        goodBasePrice = config.sugarBasePrice;
    } else if (i === 2){
        internalThreshold1 = config.cupWholesaleThreshold1;
        internalThreshold2 = config.cupWholesaleThreshold2;
        goodBasePrice = config.cupBasePrice;
    } else {
        internalThreshold1 = config.iceWholesaleThreshold1;
        internalThreshold2 = config.iceWholesaleThreshold2;
        goodBasePrice = config.iceBasePrice;
    }

    if (specifiedBuyAmmount <= internalThreshold1){
        goodPrice = goodBasePrice;
        return goodPrice;
    } else if (specifiedBuyAmmount <= internalThreshold2){
        goodPrice = goodBasePrice * 0.8;
        return goodPrice;
    } else {
        goodPrice = goodBasePrice * 0.6;
        return goodPrice;
    }
}
function checkIfEnoughMoney(inventory,goodPrice,purchaseAmmount){
    var totalCost;
    totalCost = goodPrice * purchaseAmmount;
    if (totalCost <= inventory.money) {
        return true;
    } else {
        alert("Cost of desired purchase is more than you currently have. Please specify a new new buy ammount.")
        return false;
    }
}
function getFinalPrice(goodPrice,buyAmmount){
    var finalPrice;
    finalPrice = goodPrice * buyAmmount;
    return finalPrice;
}
function getPurchaseString(i,config){
    var userInput;
    if (i === 0) {
        alert("The base price of lemons is " + config.lemonBasePrice + " cents. there is a 20% discount if you buy more than " + config.lemonWholesaleThreshold1 + " and a 40% discount if you buy more than " + config.lemonWholesaleThreshold2 + ".");
        userInput = getUserInput("Please enter amount of lemons to buy. (Minimum " + config.minBuyAmmount + " , Maximum " + config.maxBuyAmmount + ".)");
        return userInput;
    } else if (i === 1){
        alert("The base price of sugar is " + config.sugarBasePrice + " cents. there is a 20% discount if you buy more than " + config.sugarWholesaleThreshold1 + " and a 40% discount if you buy more than " + config.sugarWholesaleThreshold2 + ".");
        userInput = getUserInput("Please enter amount of sugar to buy. (Minimum " + config.minBuyAmmount + " , Maximum " + config.maxBuyAmmount + ".)");
        return userInput;
    } else if (i === 2){
        alert("The base price of cups is " + config.cupBasePrice + " cents. there is a 20% discount if you buy more than " + config.cupWholesaleThreshold1 + " and a 40% discount if you buy more than " + config.cupWholesaleThreshold2 + ".");
        userInput = getUserInput("Please enter amount of cups to buy. (Minimum " + config.minBuyAmmount + " , Maximum " + config.maxBuyAmmount + ".)");
        return userInput;
    }else {
        alert("The base price of ice is " + config.iceBasePrice + " cents. there is a 20% discount if you buy more than " + config.iceWholesaleThreshold1 + " and a 40% discount if you buy more than " + config.iceWholesaleThreshold2 + ".");
        userInput = getUserInput("Please enter amount of ice to buy. (Minimum " + config.minBuyAmmount + " , Maximum " + config.maxBuyAmmount + ".)");
        return userInput;
    }
}
function updateInventory(i,inventory,buyAmmount,finalPrice){
        
        inventory.money -= finalPrice;

        if (i === 0){
            inventory.lemons += buyAmmount;
        } else if (i === 1){
            inventory.sugar += buyAmmount;
        } else if (i === 2){
            inventory.cups += buyAmmount;
        } else {
            inventory.ice += buyAmmount;
        }
    return inventory;       
}
function purchaseGoods(inventory,config){
    var goodsListArray = ["lemons","sugar","cups","ice"];
    var userInput;
    var goodPrice;
    var moneyCheck;
    var finalPrice;
    var i


    for (i = 0; i < goodsListArray.length; i++){
        moneyCheck = false;
        displayInventory(inventory);
        while (moneyCheck === false){
        userInput = getPurchaseString(i,config)
        userInput = validNumberCheck(userInput,config.minBuyAmmount,config.maxBuyAmmount);
        goodPrice = getGoodPrice(i,config,userInput);
        moneyCheck = checkIfEnoughMoney(inventory,goodPrice,userInput);
        }
        finalPrice = getFinalPrice(userInput,goodPrice);
        inventory = updateInventory(i,inventory,userInput,finalPrice);
    }
    return inventory
}
function makeLemonade(recipe,config,inventory){
	if (recipe === 1){
		if (inventory.lemons >= config.lemonsPerPitcherTart && invetory.sugar >= config.sugarPerPitcherTart && inventory.cups >= config.cupsPerPitcher && inventory.ice >= config.icePerPitcherTart){
			inventory.cupsOfLemonade = 12
			inventory.lemons -= config.lemonsPerPitcherTart
			inventory.sugar -= config.sugarPerPitcherTart
			inventory.cups -= config.cupsPerPitcher
			inventory.ice -= config.icePerPitcherTart
			return inventory
		} else {
			alert("You have run out of supplies to make tart lemonade.")
			return false
		}
	} else	if (recipe === 2){
		if (inventory.lemons >= config.lemonsPerPitcherStandard && invetory.sugar >= config.sugarPerPitcherStandard && inventory.cups >= config.cupsPerPitcher && inventory.ice >= config.icePerPitcherStandard){
			inventory.cupsOfLemonade = 12
			inventory.lemons -= config.lemonsPerPitcherStandard
			inventory.sugar -= config.sugarPerPitcherStandard
			inventory.cups -= config.cupsPerPitcher
			inventory.ice -= config.icePerPitcherStandard
			return inventory
		} else {
			alert("You have run out of supplies to make standard lemonade.")
			return false
		}
	} else if (recipe === 3){
		if (inventory.lemons >= config.lemonsPerPitcherSweet && invetory.sugar >= config.sugarPerPitcherSweet && inventory.cups >= config.cupsPerPitcher && inventory.ice >= config.icePerPitcherSweet){
			inventory.cupsOfLemonade = 12
			inventory.lemons -= config.lemonsPerPitcherSweet
			inventory.sugar -= config.sugarPerPitcherSweet
			inventory.cups -= config.cupsPerPitcher
			inventory.ice -= config.icePerPitcherSweet
			return inventory
		} else {
			alert("You have run out of supplies to make sweet lemonade.")
			return false
		}
	}
}

function Main(){
    var customerArray = [];
    var inventory;
    var price;
    var recipe;
    var temperature;
    var config;
    var customerBuyThreshold

    price = {actualValue: 0, modifier: 0}
    temperature = {rangeValue: 0, modifier: 0}
    inventory = {lemons:0 , sugar:0 , cups:0 , ice:0, money:2000, cupsOfLemonade: 0};
    config = {
        lemonBasePrice: 20, lemonWholesaleThreshold1: 15, lemonWholesaleThreshold2: 45, 
        sugarBasePrice: 10, sugarWholesaleThreshold1: 25, sugarWholesaleThreshold2: 50, 
        cupBasePrice: 5, cupWholesaleThreshold1: 100, cupWholesaleThreshold2: 250,
        iceBasePrice: 1, iceWholesaleThreshold1: 100 , iceWholesaleThreshold2: 300, 
        lemonsPerPitcherSweet: 4, sugarPerPitcherSweet: 7, icePerPitcherSweet: 25,
        lemonsPerPitcherStandard: 5, sugarPerPitcherStandard: 5, icePerPitcherStandard: 25,
        lemonsPerPitcherTart: 7, sugarPerPitcherTart: 4, icePerPitcherTart: 25,
        numberOfCustomers: 100,
        defualtCustomerBuyThreshold: 10,
        cupsPerPitcher: 12,
        minBuyAmmount: 0, maxBuyAmmount: 500};
    
    customerArray = populateCustomerArray(config.numberOfCustomers);

    console.log (customerArray[0]);
    inventory = purchaseGoods(inventory,config);
    displayInventory(inventory);
    recipe = chooseRecipe();
    price = choosePrice(price);
    price = calcPriceModifier(price);
    temperature = calcTemperatureModifier(temperature);
    customerBuyThreshold = calcLikelyhoodOfMakingSale(temperature,price,config);

    console.log(price);
    console.log(recipe);
    console.log(temperature);
}


Main();