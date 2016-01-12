
function displayInventory(inventory){


    var moneyConvertedToWholeDollar;
    var output;
    output = (inventory.Money / 100);
    moneyConvertedToWholeDollar = output.toFixed(2);

        alert("You currently have " + inventory.lemons + " lemons, " + inventory.sugar + " cups of sugar, " + inventory.cups + " paper cups, " + inventory.ice + " ice cubes. You currently have $" + moneyConvertedToWholeDollar);
        console.log("You currently have " + inventory.lemons + " lemons, " + inventory.sugar + " cups of sugar, " + inventory.cups + " paper cups, " + inventory.ice + " ice cubes. You currently have $" + moneyConvertedToWholeDollar);
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
    
    //customerArray = populateCustomerArray(config.numberOfCustomers);
    console.log (inventory.lemons)
    console.log (inventory.sugar)
    console.log (inventory.cups)
    console.log (inventory.ice)
    console.log (inventory.money)
    console.log (customerArray[0]);
    displayInventory(inventory);
    //purchaseGoods(inventory,config);
}


Main();