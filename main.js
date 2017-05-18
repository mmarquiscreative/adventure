//Set Base Stats
var adventurer = {
    attack: 0,
    health: 100,
    potion: 2,
};

var orc = {
    attack: 10,
    health: 30,
};

var orcPair = {
    attack: 15,
    health: 40,
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
var weapon;
var gem = ['Ruby', 'Saphire', 'Emerald', 'Diamond'];

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
        weapon = prompt('Would you like a sword, axe, mace, or bow?');
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
        sequenceOne (); //Start Next Function
    } else {
        alert('Well fine. It\'s not like we don\'t have women or children or anything. Just leave us to die. That\'s cool.')
        alert('Jerk.');
    }
}

//FIRST ENCOUNTER WITH ORCS
function sequenceOne () {
    alert('With new weapon in hand you set out on your quest.');
    alert('After an hour of travel you arrive at the base of the Black Mountains. Proceeding with caution you begin climbing toward a small cave on the mountain side.');
    alert('Half way to the cave you hear a small rockslide to your left. You turn just in time to dodge an incoming arrow. An orc comes barreling toward you.');
    orcBattle ();
}
//END FIRST ENCOUNTER WITH ORCS

//FIRST ORC BATTLE FUNCTION
function orcBattle () {
    while (adventurer.health > 0 && orc.health > 0) {
        //AVENTURER SEQUENCE
        var orcFightChoice = prompt('Do you want to attack? \'a\', defend \'b\', or drink a potion \'c\'?')
        if (orcFightChoice === 'a') {
                alert('You attack the Orc your ' + weapon + ' dealing ' + adventurer.attack + ' damage!')
                orc.health = orc.health - adventurer.attack;
                console.log('The orc has ' + orc.health + ' health points left.');
        } else if (orcFightChoice === 'b'){
            alert('You dodge the orc\'s attack as he lunges toward you.')
            console.log('No stat change.');
        } else if (orcFightChoice === 'c'){
            if (adventurer.potion > 0) {
                alert('You drink a potion and immediately feel it running through your veins.');
                adventurer.health = adventurer.health + 15;
                adventurer.potion = adventurer.potion - 1;
                console.log('You have ' + adventurer.health + ' points left and ' + adventurer.potion + '\'s left.');
            } else {
                alert('You don\'t have any potions!! Bad choice');
            } //END POTION OPTION
        } else {
            alert('You fumble over yourself and don\'t do anything.');
            console.log('No stat change.');
        } //END AVENTURER SEQUENCE   
        
        //ORC SEQUENCE
        if (orc.health > 0 && orcFightChoice !== 'b') {
            alert('The orc swings his rusty blade and slices you across the chest doing ' + orc.attack + ' damage!');
            adventurer.health = adventurer.health - orc.attack;
            console.log('You now have ' + adventurer.health + ' health points left.');
        }
    } //END ROUND
    
    if (adventurer.health <= 0) {
        alert('You have died.');
        alert('Dude, you really let the first Orc beat you?');
        alert('GAME OVER');
    } else if (orc.health <= 0) {
        alert('You have vanquished the Orc!');
        sequenceTwo ();
    } 
}
//END FIRST ORC BATTLE FUNCTION

// SEQUENCE TWO MAIN FUNCTION
function sequenceTwo () {
    alert('You proudly stand over the mangled carcus of the orc. After cleaning your weapon you proceed toward the cave.');
    alert('As you approach the cave you see piles of bones surround the entrance, a small shiver rolls down your spine.');
    // Begin Directional Choice
    var sequenceTwoDirection = confirm('You proceed slowly down the entrance of the cave until you come to a fork in the tunnel. To go left select \'ok\' and to go right select \'cancel\'.');
           if (sequenceTwoDirection === true) {
                alert('You walk down the tunnel to the left and observe odd drawings and symbols all over the wall.');
                sequenceTwoLeft ();
            } else {
                alert('You head toward the tunnel on the right. It is dimly lit with torches on the wall.');
                sequenceTwoRight ();
            }
}
// END SEQUENCE TWO MAIN FUNCTION

// SEQUENCE TWO LEFT FUNCTION PT. 1 -- ENTRANCE POINTS: function sequenceTWO
function sequenceTwoLeft () {
    alert('As you walk down the tunnel you see a dim light from around the corner.');
    alert('You round the corner and see a door with two torches on either side. There are strange noises and rumblings coming from inside.');
    var sequenceTwoLeftChoice1 = confirm('Do you go through the door or turn back? To go through select \'ok\' and to go back select \'cancel\'.');
        if (sequenceTwoLeftChoice1 === true) {
            alert('You open the door and go inside.');
            orcBattleTwo ();
        } else {
            alert('Fear overcomes you and you turn back toward the other tunnel.');
            alert('Arriving back at the fork you head toward the right. It is dimly lit with torches on the wall.');
            sequenceTwoRight ();
        }
}
// END SEQUENCE TWO LEFT FUNCTION PT. 1

// BEGIN SECOND ORC BATTLE -- ENTRANCE POINTS: function sequenceTwoLeft
function orcBattleTwo () {
    
    alert('You open the door and step inside. Sitting at a table are two Orcs arguing over a piece of meat.');
    alert('The orcs notice you in the room and jump from their seats. They draw their blades and charge at you.');
    while (adventurer.health > 0 && orcPair.health > 0) {
        //AVENTURER SEQUENCE
        var orcFightChoice = prompt('Do you want to attack? \'a\', defend \'b\', or drink a potion \'c\'?')
        if (orcFightChoice === 'a') {
                alert('You attack the Orcs with your ' + weapon + ' dealing ' + adventurer.attack + ' damage!')
                orcPair.health = orcPair.health - adventurer.attack;
                console.log('The orc has ' + orcPair.health + ' health points left.');
        } else if (orcFightChoice === 'b'){
            alert('You dodge the orc\'s attack as they lunges toward you.')
            console.log('No stat change.');
        } else if (orcFightChoice === 'c'){
            if (adventurer.potion > 0) {
                alert('You drink a potion and immediately feel it running through your veins.');
                adventurer.health = adventurer.health + 15;
                adventurer.potion = adventurer.potion - 1;
                console.log('You have ' + adventurer.health + ' points left and ' + adventurer.potion + '\'s left.');
            } else {
                alert('You don\'t have any potions!! Bad choice');
            } //END POTION OPTION
        } else {
            alert('You fumble over yourself and don\'t do anything.');
            console.log('No stat change.');
        } //END AVENTURER SEQUENCE   
        
        //ORC SEQUENCE
        if (orcPair.health > 0 && orcFightChoice !== 'b') {
            alert('The orcs attack from both sides swinging their blades causing ' + orcPair.attack + ' damage!');
            adventurer.health = adventurer.health - orcPair.attack;
            console.log('You now have ' + adventurer.health + ' health points left.');
        }
    } //END ROUND
    
    if (adventurer.health <= 0) {
        alert('You have died.');
        alert('A pair of Orcs is really hard to beat.');
        alert('GAME OVER');
    } else if (orcPair.health <= 0) {
        alert('You killed the two Orcs! Well done adventurer.');
        sequenceTwoLeftTwo ();
    } 
}
//END BEGIN SECOND ORC BATTLE 

//SEQUENCE TWO LEFT FUNCTION PT. 2 -- ENTRANCE POINTS: function orcBattleTwo
function sequenceTwoLeftTwo () {
    alert('You decide to explore the room.');
}
//SEQUENCE TWO LEFT FUNCTION PT. 2

//SEQUENCE TWO RIGHT FUNCTION PT. 1
function sequenceTwoRight () {
    alert('The smell in the tunnel begins to turn unbearable but you keep going down the tunnel.');
}
