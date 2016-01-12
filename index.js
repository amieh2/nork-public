'use strict';

//Creating a current state object
var Current ={
    Room:[],
    inventory :[]
};

var world = require('./lib/world.json'); //import world file
 Current.Room = world.rooms[0]; //Stores the room that we are in
 
var room = world.rooms[0]; //Stores the room that we are in

var readline = require('readline');
var io = readline.createInterface({ //call the interface "io"
  input: process.stdin, //input comes from the terminal ("standard in")
  output: process.stdout //output goes to the terminal ("standard out")
});

console.log('Welcome to the game of Nork! \n');
console.log(Current.Room.description); //prints out the current room description

//Function that recusively asks the user of what they want to do. Takes in user input as a parameter
var askQuestion = function(answer)
{
    Process(answer.toUpperCase());
    if (null != Current)
    {
        io.question('What would you like to do?', askQuestion);
    }
    if (null === Current)
     {
        console.log('Good Bye');
    	io.close(); //close the whole interface once completely done asking questions   
    }
}
 io.question('What would you like to do?', askQuestion);

//Function that processes the answer from the four commands the user can input, if its not one of the valid commands
//The game is over
function Process(answer)
{
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
function ProcessGo(data){
    if (Current.Room.exits[data])
    {
        var NewRoomName = Current.Room.exits[data];
        for(var i = 0; i < world.rooms.length; i++) {
            if(world.rooms[i].id === NewRoomName) {
                Current.rooms = world.rooms[i];
                console.log('\n' + 'You moved ' + data + ', now you are in the ' + Current.rooms.id + '.');
                console.log(Current.rooms.description + '\n');
            }
        }
    }
    else{
        console.log("Not a valid direction");
    }
}

function ProcessTake(itemName){
    var itemPickedup = false;
    //for(var i = 0; i < Current.Room.items.length; i++) {    
        //if (Current.Room.items[i] === itemName) {
             if(Current.Room.items = itemName) {
                 console.log('You picked up: ' + itemName);
             }
            //console.log('You picked up: ' + itemName);
            Current.inventory.push(itemName);
            itemPickedup = true;
        //}
   // }
    if(itemPickedup === false) {
        console.log('Could not find ' + itemName);
    }
}

function ProcessUse(data) {
    for(var i = 0; i < Current.Room.items.length; i++) {
        if(Current.room.description.includes(Current.room.items[i])) {
            
        }   
    //Check inventory make sure item exists
    //verify item can be used in the room (make sure word is in task,)
    
    // to end just set Current=null;
    //if (Current.Room.exits[data])
    }
}

function ProcessInventory() {
    console.log('Current inventory: ');  
    for(var i = 0; i < Current.inventory.length; i++) {
         console.log('   ' +Current.inventory.id);  
    }
}