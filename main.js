//Set Base Stats
var adventurer = {
    attack: 0,
    health: 60,
    potion: 2,
};

var orc = {
    attack: 0,
    health: 0,
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
var gem = ['ruby', 'saphire', 'emerald'];
var weaponStrength = [15, 20, 20, 20, 25, 25, 25, 30];
var potionStrength = 20;
var superPotionStrength = 40;
var orcAttackOptions = [5, 10, 10, 10, 15, 15, 15, 20];
var orcHealthOptions = [20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40];


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
//readyToPlay (); now functions from HTML button

function gameOver() {
    alert('You fall to your knees. The last breath fades from your body as all fades to black.');
    alert('You have died.');
    throw new Error('GAME OVER!');
}

/////////////////////////
// Part One            //   
/////////////////////////

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
                alert('That is the sharpest sword in all the land!');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'axe':
                alert('That axe will help you tear throw a lot of Orcs. Use it wisely.');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'mace':
                alert('That mace is a favorite of our blacksmith. Good for smashing Orcs');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'bow':
                alert('Ah the nimble bow. You plan on taking down Orcs from afar!');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
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
    sequenceTwo ();
}
//END FIRST ENCOUNTER WITH ORCS

/////////////////////////
// End Part One        //   
/////////////////////////

/////////////////////////
// ORC BATTLE FUNCTION //   
/////////////////////////
function orcBattle () {
    orc.attack = orcAttackOptions[Math.floor(Math.random () * orcAttackOptions.length)];
    orc.health = orcHealthOptions[Math.floor(Math.random () * orcHealthOptions.length)];
    console.log('Your health: ' + adventurer.health + ' -- Your attack strength: ' + adventurer.attack + ' -- You have ' + adventurer.potion + ' potion\(s\)');
    console.log('Orc attach strength: ' + orc.attack + ' -- Orc health: ' + orc.health);
    
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
                adventurer.health = adventurer.health + potionStrength;
                adventurer.potion = adventurer.potion - 1;
                console.log('You have ' + adventurer.health + ' points left and you have ' + adventurer.potion + ' potion\(s\) left.');
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
        gameOver();
    } else if (orc.health <= 0) {
        alert('You have vanquished the Orc!');
    } 
}
/////////////////////////////
// END ORC BATTLE FUNCTION //   
/////////////////////////////

/////////////////////////
// Part Two            //   
/////////////////////////

// SEQUENCE TWO START FUNCTION
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
// END SEQUENCE TWO START FUNCTION

/////////////////////////
// Part Two Left       //   
/////////////////////////
// SEQUENCE TWO LEFT FUNCTION PT. 1 -- ENTRANCE POINTS: function sequenceTWO
function sequenceTwoLeft () {
    alert('As you walk down the tunnel you see a dim light from around the corner.');
    alert('You round the corner and see a door with two torches on either side. There are strange noises and rumblings coming from inside.');
    var sequenceTwoLeftChoice1 = confirm('Do you go through the door or turn back? To go through select \'ok\' and to go back select \'cancel\'.');
        if (sequenceTwoLeftChoice1 === true) {
            alert('You open the door and go inside.');
            alert('Upon entering the room you see two orcs at a table fighting over a piece of meat.');
            alert('You try to stay quiet but the Orcs quickly realize you are there and attack.');
            orcBattle ();
            sequenceTwoLeftTwo ();
        } else {
            alert('Fear overcomes you and you turn back toward the other tunnel.');
            alert('Arriving back at the fork you head toward the right. It is dimly lit with torches on the wall.');
            sequenceTwoRight ();
        }
}
// END SEQUENCE TWO LEFT FUNCTION PT. 1


//SEQUENCE TWO LEFT FUNCTION PT. 2 -- ENTRANCE POINTS: function orcBattleTwo
function sequenceTwoLeftTwo () {
    alert('With the orcs dead you decide to explore the room.');
    alert('As you look around the room you see a few things of note.')
    alert('In the corner is a chest with a skull on it, on the table there is a small box, and there is a cabinet against the wall.')
    var gemRoomChoice = prompt('Do you want to \'a\' open the chest, \'b\' open the box, \'c\' open the cabinet, or \'d\' leave the room.');
    var gemCounterA = 0;
    var gemCounterB = 0;
    var gemCounterC = 0;
    //BEGIN Gem Room Exploration Choice
    while (gemRoomChoice !== 'd') {

                    if (gemRoomChoice === 'a' && gemCounterA === 0) {
                        alert('You open the chest and find a large pile of potions.');
                        adventurer.potion = adventurer.potion + 5;
                        console.log('You know have ' + adventurer.potion + ' potions.');
                        gemCounterA++
                        gemRoomChoice = prompt('Do you want to \'b\' open the box, \'c\' open the cabinet, or \'d\' leave the room.');
                    } else if (gemRoomChoice === 'a' && gemCounterA > 0) {
                        alert('You already opened the chest.');
                        gemRoomChoice = prompt('Do you want to \'b\' open the box, \'c\' open the cabinet, or \'d\' leave the room.');
                    } else if (gemRoomChoice === 'b' && gemCounterB === 0) {
                        var heroGem = gem[Math.floor(Math.random () * gem.length)];
                        alert('You open the chest and find a ' + heroGem + '!');
                        //GEM OPTION IF/ELSE
                        if (heroGem === 'ruby'){
                            var heroGemPower = 'fire'; 
                            alert('You pick up the ' + heroGem + '. As you admire it you notice your ' + weapon + ' begins to glow red.');
                            alert('You touch the ' + heroGem + ' to the weapon and instantly the weapon sets a blaze.');
                            alert('You now have a ' + heroGemPower + ' ' + weapon + '!');
                            adventurer.attack = adventurer.attack + 25;
                            gemCounterB++
                            console.log('Your weapon now does ' + adventurer.attack + ' damage!');
                            gemRoomChoice = prompt('Do you want to \'a\' open the chest, \'c\' open the cabinet, or \'d\' leave the room.');
                        } else if (heroGem === 'saphire') {
                            var heroGemPower = 'ice'; 
                            alert('You pick up the ' + heroGem + '. As you admire it you notice your ' + weapon + ' begins to glow blue.');
                            alert('You touch the ' + heroGem + ' to the weapon and instantly the weapon turns to ice.');
                            alert('You now have an ' + heroGemPower + ' ' + weapon + '!');
                            adventurer.attack = adventurer.attack + 25;
                            console.log('Your weapon now does ' + adventurer.attack + ' damage!');
                            gemCounterB++
                            gemRoomChoice = prompt('Do you want to \'a\' open the chest, \'c\' open the cabinet, or \'d\' leave the room.');
                        } else if (heroGem === 'emerald') {
                            var heroGemPower = 'poison'; 
                            alert('You pick up the ' + heroGem + '. As you admire it you notice your ' + weapon + ' begins to glow green.');
                            alert('You touch the ' + heroGem + ' to the weapon and instantly the weapon sizzles.');
                            alert('You now have a ' + heroGemPower + ' ' + weapon + '!');
                            adventurer.attack = adventurer.attack + 25;
                            console.log('Your weapon now does ' + adventurer.attack + ' damage!');
                            gemCounterB++
                            gemRoomChoice = prompt('Do you want to \'a\' open the chest, \'c\' open the cabinet, or \'d\' leave the room.');
                        } // END GEM OPTION IF/ELSE
                    } else if (gemRoomChoice === 'b' && gemCounterB > 0) {
                        alert('You already opened the box.');
                        gemRoomChoice = prompt('Do you want to \'a\' open the chest, \'c\' open the cabinet, or \'d\' leave the room.');
                    } else if (gemRoomChoice === 'c' && gemCounterC === 0) {
                        alert('You open the cabinet and an arrow shoots you in the shoulder. It was a trap!');
                        adventurer.health = adventurer.health - 20;
                        console.log('Your health is now ' + adventurer.health + '.');
                        gemCounterC++
                        if (adventurer.health > 0) {
                             gemRoomChoice = prompt('Do you want to \'a\' open the chest, \'b\' open the box, or \'d\' leave the room.');
                        } else {
                            gameOver ();
                        }
                    } else if (gemRoomChoice === 'c' && gemCounterC > 0) {
                        alert('You already opened the cabinet, do you really want to get shot again?');
                        gemRoomChoice = prompt('Do you want to \'a\' open the chest, \'b\' open the box, or \'d\' leave the room.');
                    } else {
                        gemRoomChoice = prompt('You need to decide on something to do. Do you want to \'a\' open the chest, \'b\' open the box, \'c\' open the cabinet, or \'d\' leave the room.');
                    } //END Gem Room Exploration Choice     
        
        
}// END FIRST WHILE
    
    if (gemRoomChoice === 'd') {
        alert('You head out of the room and back toward the other tunnel to see if it goes deeper into the mountain.');
        alert('Arriving back at the fork you head toward the right. It is dimly lit with torches on the wall.');
        sequenceTwoRight ();
    }
}
//SEQUENCE TWO LEFT FUNCTION PT. 2

/////////////////////////
// End Part Two Left   //   
/////////////////////////

/////////////////////////
// Part Two Right      //   
/////////////////////////

//SEQUENCE TWO RIGHT FUNCTION PT. 1 -- ENTRANCE POINTS -- function sequenceTwo, function sequenceTwoLeft, function sequenceTwoLeftTwo
function sequenceTwoRight () {
    alert('At the end of the tunnel you come to another fork.');
    alert('You try to go left but a few feet in you realize it is caved in.');
    alert('You head back down the other tunnel and enter a large open room.');
    alert('Before you have a chance to explore an Orc charges at you.');
    orcBattle();
    alert('Now that the Orc is dead you have a chance to check around the room.');
    alert('There are three doors; one to the left, one to the right, and one at the top of a staircase. There is also an apothecary table and a grinding stone.');
    var LargeRoomChoice = prompt('What would you like to do? \'a\' go through door to left, \'b\' go through door to the right, \'c\' go through door at the top of the stairs, \'d\' try using the apothecary table, \'e\' try using the grinding stone.');
    var apothecaryOption = 0;
    var grinderOption = 0;

    while (LargeRoomChoice !== 'a' && LargeRoomChoice !== 'b' && LargeRoomChoice !== 'c'){    
         if (LargeRoomChoice === 'd' && apothecaryOption === 0) {
                //Apothecary If Else
                var apothecarySkill = Math.floor(Math.random() * 10);
                console.log(apothecarySkill);
                if (apothecarySkill >= 7) {
                    alert('You begin mixing ingrdidents at the apothecary table with your potions.');
                    alert('Your old skills worked! Your potions are now stronger.')
                    potionStrength = potionStrength + 10;
                    console.log('Potions now give ' + potionStrength + ' health points back.');
                    apothecaryOption++
                    LargeRoomChoice = prompt('What would you like to do? \'a\' go through door to left, \'b\' go through door to the right, \'c\' go through door at the top of the stairs, \'e\' try using the grinding stone.');
                } else {
                    alert('You begin mixing ingreidents at the apothecary table with your potions.');
                    alert('You can\'t get the ingreidents to mix properly and don\'t make the potions stronger')
                    apothecaryOption++
                    LargeRoomChoice = prompt('What would you like to do? \'a\' go through door to left, \'b\' go through door to the right, \'c\' go through door at the top of the stairs, \'e\' try using the grinding stone.');
                }
                //End Apothecary If Else
            } else if (LargeRoomChoice === 'd' && apothecaryOption > 0) {
                alert('You already used the apothecary set.');
                LargeRoomChoice = prompt('What would you like to do? \'a\' go through door to left, \'b\' go through door to the right, \'c\' go through door at the top of the stairs, \'e\' try using the grinding stone.');
            } else if (LargeRoomChoice === 'e' && grinderOption === 0) {
                //Grinder If Else
                var grinderSkill = Math.floor(Math.random() * 10);
                console.log(grinderSkill);
                if (apothecarySkill >= 7) {
                    alert('You begin sharpening your ' + weapon + ' on the grinding stone.');
                    alert('Your blacksmith experience paid off. You weapon is now stronger!');
                    adventurer.attack = adventurer.attack + 10;
                    console.log('Your ' + weapon + ' now does ' + adventurer.attack + ' damage.');
                    grinderOption++
                    LargeRoomChoice = prompt('What would you like to do? \'a\' go through door to left, \'b\' go through door to the right, \'c\' go through door at the top of the stairs, \'e\' try using the grinding stone.');
                } else {
                    alert('You try sharpening your ' + weapon + ' on the grinding stone.');
                    alert('The grinding stone is broken.');
                    grinderOption++
                    LargeRoomChoice = prompt('What would you like to do? \'a\' go through door to left, \'b\' go through door to the right, \'c\' go through door at the top of the stairs, \'d\' try using the apothecary table');
                }
                //End Grinder If Else
            } else if (LargeRoomChoice === 'e' && grinderOption > 0) {
                alert('Remember the grinding stone is broken.');
                LargeRoomChoice = prompt('What would you like to do? \'a\' go through door to left, \'b\' go through door to the right, \'c\' go through door at the top of the stairs, \'d\' try using the apothecary table');
            } else {
                LargeRoomChoice = prompt('What would you like to do? \'a\' go through door to left, \'b\' go through door to the right, \'c\' go through door at the top of the stairs, \'d\' try using the apothecary table, \'e\' try using the grinding stone.');
            }      
    } //END WHILE LOOP
        if (LargeRoomChoice === 'a') {
        sequenceTwoRightOne ();
    } else if (LargeRoomChoice === 'b') {
        sequenceTwoRightTwo ();
    } else if (LargeRoomChoice === 'c') {
        sequenceTwoRightThree ();
    } 
}

//END SEQUENCE TWO RIGHT FUNCTION PT. 1 

//SEQUENCE TWO RIGHT FUNCTION PT. 2

// START sequenceTwoRightOne
function sequenceTwoRightOne () {
    alert('You enter the door to the left.');
    alert('This is as far is goes right now.');
}

// START sequenceTwoRightTwo
function sequenceTwoRightTwo () {
    alert('You enter the door to the right.');
    alert('This is as far is goes right now.');
}

// START sequenceTwoRightThree
function sequenceTwoRightThree () {
    alert('You climb the stairs and go through the door.');
    alert('This is as far is goes right now.');
}
































