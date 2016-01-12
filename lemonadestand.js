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
        return 0.25;
    } else if (temperature > 80){
        return 0.5;
    } else if (temperature > 70){
        return 0.75;
    } else if (temperature > 60){
        return 1;
    } else {
        return 1.25;
    }
}

function calcPriceModifier(price){
    if (price < 20){
        return 0.2;
    } else if (price < 30){
        return 0.25;
    } else if (price < 50){
        return 0.5;
    } else if (price < 75){
        return 0.75;
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
    playerChoice = getuserInput("Please choose a recipe 'Tart' 'Standard' or 'sweet' ");
    lowerCaseInput = playerChoice.toLowerCase();
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
    var output;
    playerChoice = getuserInput("Please enter a price in cents for your lemonade. (min 0 , max 500)");
    output = validNumberCheck(playerChoice,0,500);
    return output;
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
        userInput = getUserInput("Please enter ammount of lemons to buy. (Minimum " + config.minBuyAmmount + " , Maximum " + config.maxBuyAmmount + ".)");
        return userInput;
    } else if (i === 1){
        alert("The base price of sugar is " + config.sugarBasePrice + " cents. there is a 20% discount if you buy more than " + config.sugarWholesaleThreshold1 + " and a 40% discount if you buy more than " + config.sugarWholesaleThreshold2 + ".");
        userInput = getUserInput("Please enter ammount of sugar to buy. (Minimum " + config.minBuyAmmount + " , Maximum " + config.maxBuyAmmount + ".)");
        return userInput;
    } else if (i === 2){
        alert("The base price of cups is " + config.cupBasePrice + " cents. there is a 20% discount if you buy more than " + config.cupWholesaleThreshold1 + " and a 40% discount if you buy more than " + config.cupWholesaleThreshold2 + ".");
        userInput = getUserInput("Please enter ammount of cups to buy. (Minimum " + config.minBuyAmmount + " , Maximum " + config.maxBuyAmmount + ".)");
        return userInput;
    }else {
        alert("The base price of ice is " + config.iceBasePrice + " cents. there is a 20% discount if you buy more than " + config.iceWholesaleThreshold1 + " and a 40% discount if you buy more than " + config.iceWholesaleThreshold2 + ".");
        userInput = getUserInput("Please enter ammount of ice to buy. (Minimum " + config.minBuyAmmount + " , Maximum " + config.maxBuyAmmount + ".)");
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

function Main(){
    var customerArray = [];
    var inventory;
    var price;
    var recipe;
    var temperature;
    var config;

    inventory = {lemons:0 , sugar:0 , cups:0 , ice:0, money:2000};
    config = {
        lemonBasePrice: 20, lemonWholesaleThreshold1: 15, lemonWholesaleThreshold2: 45, 
        sugarBasePrice: 10, sugarWholesaleThreshold1: 15, sugarWholesaleThreshold2: 45, 
        cupBasePrice: 5, cupWholesaleThreshold1: 15, cupWholesaleThreshold2: 45,
        iceBasePrice: 1, iceWholesaleThreshold1: 15 , iceWholesaleThreshold2: 40, 
        numberOfCustomers: 100,
        minBuyAmmount: 0, maxBuyAmmount: 500};
    
    customerArray = populateCustomerArray(config.numberOfCustomers);

    console.log (customerArray[0]);
    inventory = purchaseGoods(inventory,config);
    displayInventory(inventory)
}


Main();