'use strict';

//Creating a current state object
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
    Process(answer.toUpperCase());
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
    if(answer.substr(0,3) === 'GO ') {
        ProcessGo(answer.substr(3).toLowerCase());
    } else if(answer.substr(0,5) === 'TAKE ') {
        ProcessTake(answer.substr(5).toLowerCase());
    } else if(answer.substr(0,4) === 'USE ') {
        ProcessUse(answer.substr(4).toLowerCase());
    } else if(answer.substr(0,10) === 'INVENTORY') {
        ProcessInventory();
    } else {
        console.log('Sorry, not valid. You died, Game Over!');
        Current = null;
    }
}

//Function to process the command go. 
function ProcessGo(direction){
    if (Current.Room.exits[direction]) {
        var NewRoomName = Current.Room.exits[direction];
        for(var i = 0; i < world.rooms.length; i++) {
            if(world.rooms[i].id === NewRoomName) {
                Current.room = world.rooms[i];
                console.log('\n' + 'You moved ' + direction + ', now you are in the ' + Current.room.id + '.');
                console.log(Current.room.description + '\n');
            }
        }
    }
    else {
        console.log("Not a valid direction");
    }
}

function ProcessTake(itemName){
    if(Current.Room.items.name === itemName) {
        console.log('You picked up: ' + itemName);
        Current.inventory.push(itemName);
    } else {
        console.log('Could not find ' + itemName);
    }
}

function ProcessUse(itemName) { 
    var inInventory = false;
    for(var i = 0; i < Current.inventory.length; i++) {
        if(Current.inventory[i] === itemName) {
            inInventory = true;
        }
    }
    if (inInventory === true && Current.Room.description.includes(Current.Room.items.task)) {
       console.log('You are now using the ' + itemName);
    } else {
            console.log('Sorry you dont have that item!');
    }
}

function ProcessInventory() {
    console.log('Current inventory: ');  
         console.log('   ' + Current.inventory);  
}