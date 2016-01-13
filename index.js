'use strict';

//Creating a current state object, stores the current room and currently inventory
var Current ={
    Room:[],
    inventory :[]
};

var world = require('./lib/world.json'); //import world file
 Current.Room = world.rooms[0]; //Stores the room that we are in
 
//var room = world.rooms[0]; //Stores the room that we are in

var readline = require('readline');
var io = readline.createInterface({ //call the interface "io"
  input: process.stdin, //input comes from the terminal ("standard in")
  output: process.stdout //output goes to the terminal ("standard out")
});

console.log('Welcome to the game of Nork! \n');
console.log(Current.Room.description); //prints out the current room description

//Function that recusively asks the user of what they want to do. Takes in user input as a parameter
var askQuestion = function(answer) {
    Process(answer.toUpperCase());// calls the process method
    if (null != Current) {
        io.question('What would you like to do?', askQuestion);
    }
    if (null === Current) {
    	io.close(); //close the whole interface once completely done asking questions   
    }
}
io.question('What would you like to do?', askQuestion);

//Function that processes the answer from the four commands the user can input, if its not one of the valid commands
//The game is over
function Process(answer) {
    if(answer.substr(0,3) === 'GO ') { //if the user types go, calls the process go method
        ProcessGo(answer.substr(3).toLowerCase());
    } else if(answer.substr(0,5) === 'TAKE ') { //if the user types take, calls the process take method
        ProcessTake(answer.substr(5).toLowerCase());
    } else if(answer.substr(0,4) === 'USE ') { //if the user types use, calls the process use method
        ProcessUse(answer.substr(4).toLowerCase());
    } else if(answer.substr(0,10) === 'INVENTORY') { //if the user types inventory, calls the process go method
        ProcessInventory();
    } else {
        console.log('Sorry, not valid. You died, Game Over!'); // if the user types anything other than the commands
        Current = null;
    }
}

//Function to process when the user types the command go
function ProcessGo(direction){
    if (Current.Room.exits[direction]) {
        var NewRoomName = Current.Room.exits[direction];
        for(var i = 0; i < world.rooms.length; i++) { //checks the rooms that are the world
            if(world.rooms[i].id === NewRoomName) { // if it matches, then current room changes
                Current.Room = world.rooms[i];
                console.log('\n' + 'You moved ' + direction + ', now you are in the ' + Current.Room.id + '.');
                console.log(Current.Room.description + '\n');
            }
        }
    }
    else {
        console.log("Not a valid direction");
    }
}

//Function to process when the user types the command take
function ProcessTake(itemName){
    if(Current.Room.items.name === itemName) { //checks if the current room has the item the user typed
        console.log('You picked up: ' + itemName);
        Current.inventory.push(itemName); //adds the item the user picked up to the inventory
    } else {
        console.log('Could not find ' + itemName); //if item doesnt exist in room, prints out 
    }
}

//Function to process when the user types use
function ProcessUse(itemName) { 
    var inInventory = false;
    for(var i = 0; i < Current.inventory.length; i++) { //checks the list of current inventory
        if(Current.inventory[i] === itemName) { //If the current inventory contains the item the user typed
            inInventory = true; 
        }
    }
    //if the item is in the current inventory and can be used in the room, prints out
    if (inInventory === true && Current.Room.description.includes(Current.Room.items.task)) {
       console.log('You are now using the ' + itemName);
    } else {
            console.log('Sorry you dont have that item!');
    }
}

//Function to process when the user types inventory
function ProcessInventory() {
    console.log('Current inventory: ');  
         console.log('   ' + Current.inventory);  //prints out the current inventory
}
