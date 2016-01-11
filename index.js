'use strict';

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

var askQuestion = function(answer)
{
    Process(answer.toUpperCase());
    if (null != Current)
    {
        io.question('What would you like to do?', askQuestion);
    }
    if (null === Current)
     {
        console.log('Bye');
    	io.close(); //close the whole interface once completely done asking questions   
    }
}
 io.question('What would you like to do?', askQuestion);

function Process(answer)
{
    if(answer.substr(0,3) === 'GO ') {
        ProcessGo(answer.substr(3).toLowerCase());
    } else if(answer.substr(0,5) === 'TAKE ') {
        ProcessTake(answer.substr(6).toLowerCase());
    } else if(answer.substr(0,4) === 'USE ') {
        ProcessUse(answer.substr(5).toLowerCase());
    } else if(answer.substr(0,10) === 'INVENTORY') {
        ProcessInventory();
    } else {
        console.log('Sorry, Game Over');
        Current = null;
    }
}

function ProcessGo(data){
    if (Current.Room.exits[data])
    {
        var NewRoomName = Current.Room.exits[data];
        for(var i = 0; i < world.rooms.length; i++) {
            if(world.rooms[i].id === NewRoomName) {
                Current.rooms = world.rooms[i];
                console.log('You moved to: ' + data + ' now you see ' + Current.rooms.description);
            }
        }
    }
    else{
        console.log("Not a valid direction");
    }
}

function ProcessTake(itemName){
    var itemPickedup = false;
    for(var i = 0; i < Current.Room.items.length; i++) {    
        if (Current.Room.items[i] === itemName) {
            Current.inventory.push(Current.room.items[i]);
            console.log('Picked up: ' + itemName);
            itemPickedup = true;
        }
    }
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
    console.log('Current inventory');  
    for(var i = 0; i < Current.inventory.length; i++) {
         console.log('   ' +Current.inventory.id);  
    }
}