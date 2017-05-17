//Set Base Stats
var adventurer = {
    attack: 0,
    health: 50,
};

var orc = {
    attack: 10,
    health: 30,
};

var troll = {
    attack: 25,
    health: 75,
};


var dragon = {
    attack: 50,
    health: 150,
};

//Other Variables
var kingdomName = 'Kregon'

//Prompt if Ready to Play
function readyToPlay (){
var begin = confirm('Are you ready to begin the adventure?');
 if (begin === true) { 
    gameStart ();
 } else {
     alert('Come back later then');
 }
}

//Game Start
readyToPlay ();

function gameStart (){
var namePlayer = prompt('What is your name?');

alert('Welcome to the kingdom of ' + kingdomName + ', ' + namePlayer + '!' );
alert('The land is in peril. We have been overrun with Orcs and need your help!');
var heroHelp = confirm('Will you help us?');
    if (heroHelp === true) {
        alert('We are most gracious! To help you on this quest you may select a weapon of your choice!');
        
        //Begin Weapon Select
        var weapon = prompt('Would you like a sword, axe, mace, or bow?');
        switch (weapon) {
            case 'sword':
                alert('That is the sharpest sword in all the land! Our strongest weapon by far.');
                adventurer.attack = adventurer.attack + 25;
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'axe':
                alert('That axe will help you tear throw a lot of Orcs. Use it wisely.');
                adventurer.attack = adventurer.attack + 20;
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'mace':
                alert('That mace is a favorite of our blacksmith. Good for smashing Orcs');
                adventurer.attack = adventurer.attack + 20;
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'bow':
                alert('Ah the nimble bow. You plan on taking down Orcs from afar!');
                adventurer.attack = adventurer.attack + 15;
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'excalibur':
                alert('How... how did you know we had Excalibur? That was supposed to be a secret. Very well, you may take Excalibur on your quest.');
                adventurer.attack = adventurer.attack + 100;
                console.log('Hero attack now ' + adventurer.attack);
                break;
            default:
                alert('Err. I\'m not sure why you would want to use that as your weapon, but hey, you do you.');
                adventurer.attack = adventurer.attack + 5;
                console.log('Hero attack now ' + adventurer.attack);
                                 } //End Weapon Select
        alert('We are so happy for you to be helping us. I know that it is a long and dangerous road ahead.')
        firstBattle (); //Start Next Function
    } else {
        alert('Well fine. It\'s not like we don\'t have women or children or anything. Just leave us to die. That\'s cool.')
        alert('Jerk.');
    }
}

//Battle Function for first encounter with Orcs
function firstBattle () {
    alert('With new weapon in hand you set out on your quest.');
}
