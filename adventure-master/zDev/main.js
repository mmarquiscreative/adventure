
var GameCharacter = function(attack, health, stamina, potion, attackName, spellLvl, spellName){
    this.attack = attack;
    this.health = health;
    this.stamina = stamina;
    this.potion = potion;
    this.attackName = attackName;
    this.spell = spellLvl;
    this.spellName = spellName;
};

var adventurer = new GameCharacter(0, 60, 60, 2);
var orc = new GameCharacter(15, 60, 60, 2, 1, 'Crude Club', 'Simple Charm: ', 'Phlegm');
var orcPair = new GameCharacter(30, 120, 60, 2, 2, 'Brutal Mace', 'Intermediate Hex: ','Tango for Two');
var troll = new GameCharacter(60, 300, 300, 1, 3, 'Skull-Encrusted Hammer', 'Super Incredible Encantation: ', 'Abyssmal Pressure');
var dragon = new GameCharacter(120, 60, 60, 2, 4, 'Jeweled Claws', 'Dragon-God Conjuration: ', 'Magma-jestic Battle Fire');

var leviathan = new GameCharacter(250, 1000, 1000, 10, 6, 'Maw of Man-sized Teeth', 'Ultimate Boss-Level Magic Cast: ', 'Super Soaker');



//Other Variables
var kingdomName = 'Kregon'
var weapon = 'Sword';
var gem = ['ruby', 'saphire', 'emerald'];
var weaponStrength = [15, 20, 20, 20, 25, 25, 25, 30];
var potionStrength = 20;
var superPotionStrength = 40;
var orcAttackOptions = [5, 10, 10, 10, 15, 15, 15, 20];
var orcHealthOptions = [20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40];


function readyToPlay (){
    
var begin = confirm('Are you ready to begin the adventure?');
 if (begin === true) { 
    
     gameStart ();
     

 } else {
     alert('Come back later then');
 }
}
var timeOutID;
//Game Start
//readyToPlay (); now functions from HTML button

function gameOver() {
    alert('You fall to your knees. The last breath fades from your body as all fades to black.');
    alert('You have died.');
    throw new Error('GAME OVER!');
}
//////////

// Update Story Box functions 
// Sets a delay for story box updates
function updateStoryBox(text1, time) {
    window.setTimeout(updateStory, time, text1);
}
// updates the 'Story Box' id in the html
function updateStory(text) {
    document.getElementById('storyBox').textContent = text;
    console.log('running UpdateStory');
}

/////////////
function popUps(type, delay, text){
     window.setTimeout(type, delay, text);

}


function alerts(text) {
    alert(text);
}

function prompts(text) {
    prompt(text);
}

function confirms(text) {
    confirm(text);
}
/////////////////////////
// Part One            //   
/////////////////////////

function gameStart (){
updateStory('The land is in peril. We have been overrun with Orcs and need your help!');
    var namePlayer = popUps(prompts, 1000, 'What is your name?');
var heroHelp = popUps(confirms, 1000, 'Will you help us?');
    if (heroHelp === true) {
        alerts('We are most gracious! To help you on this quest you may select a weapon of your choice!');

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

function attackDamage(damageTarget, damageSource) {
    if (damageTarget !== 'Adventurer') {
        alert('You attack the ' + damageTarget + ' your ' + weapon + ' dealing ' + adventurer.attack + ' damage!');
    switch(damageTarget) {
        case 'Orc': 
            orc.health -= adventurer.attack;
            console.log('The orc has ' + orc.health + ' health points left.');
            console.log('The orc has ' + orc.stamina + ' stamina points left.');
            console.log('The orc has ' + orc.potion + ' potions left.');
            break;
        case 'Orc Pair': 
            orcPair.health -= adventurer.attack;
            console.log('The Orc Pair has ' + orcPair.health + ' health points left.');
            console.log('The Orc Pair has ' + orcPair.stamina + ' stamina points left.');
            console.log('The Orc Pair has ' + orcPair.potion + ' potions left.');
            break;
        case 'Troll': 
            troll.health -= adventurer.attack;
            console.log('The Troll has ' + troll.health + ' health points left.');
            console.log('The Troll has ' + troll.stamina + ' stamina points left.');
            console.log('The Troll has ' + troll.potion + ' potions left.');
            break;
        case 'Dragon': 
            dragon.health -= adventurer.attack;
            console.log('The Dragon has ' + dragon.health + ' health points left.');
            console.log('The Dragon has ' + dragon.stamina + ' stamina points left.');
            console.log('The Dragon has ' + dragon.potion + ' potions left.');
            break;
        case 'Leviathan': 
            leviathan.health -= adventurer.attack;
            console.log('The Leviathan has ' + leviathan.health + ' health points left.');
            console.log('The Leviathan has ' + leviathan.stamina + ' stamina points left.');
            console.log('The Leviathan has ' + leviathan.potion + ' potions left.');
            break;
        default: 
            console.log('Something for attackDamage didn\'t work' + 'damageTarget submitted was: ' + enemy);
    }
    } else if (damageTarget === 'Adventurer'){
            switch(damageSource) {
        case 'Orc': 
            alert('You are attacked by the ' + damageSource + 'It attacked with a ' + orc.attackName + ' dealing ' + orc.attack + ' damage!');
            adventurer.health -= orc.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        case 'Orc Pair': 
            alert('You are attacked by the ' + damageSource + 'They attacked with a ' + orc.attackName + ' dealing ' + orcPair.attack + ' damage!');
            adventurer.health -= orcPair.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        case 'Troll': 
            alert('You are attacked by the ' + damageSource + 'It attacked with a ' + orc.attackName + ' dealing ' + troll.attack + ' damage!');
            adventurer.health -= troll.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        case 'Dragon': 
            alert('You are attacked by the ' + damageSource + 'It attacked with its ' + dragon.attackName + ' dealing ' + adventurer.attack + ' damage!');
            adventurer.health -= dragon.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        case 'Leviathan': 
            alert('You are attacked by the ' + damageSource + 'It attacked with its ' + leviathan.attackName + ' dealing ' + leviathan.attack + ' damage!');
            adventurer.health -= leviathan.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        default: 
            console.log('Something for attackDamage didn\'t work' + 'damageSource submitted was: ' + damageSource);
    } 
    }else {
        console.log('input not correct. damageTarget submitted was: ' + damageTarget + ' damageSource submitted was: ' + damageSource);
    }
};
function orcBattle () {
    orc.attack = orcAttackOptions[Math.floor(Math.random () * orcAttackOptions.length)];
    orc.health = orcHealthOptions[Math.floor(Math.random () * orcHealthOptions.length)];
    console.log('Your health: ' + adventurer.health + ' -- Your attack strength: ' + adventurer.attack + ' -- You have ' + adventurer.potion + ' potion\(s\)');
    console.log('Orc attach strength: ' + orc.attack + ' -- Orc health: ' + orc.health);
    
    while (adventurer.health > 0 && orc.health > 0) {
        //AVENTURER SEQUENCE
        var fightChoice = prompt('Do you want to attack? \'a\', defend \'b\', or drink a potion \'c\'?')
        if (fightChoice === 'a') {
                /* var orcReaction = Math.floor(Math.random() * 3 + 1);
                if (orcReaction = 1) {
                    alert('You and the Orc attack at the same time! Your weapons catch each other in mid-air, no damage was dealt.');
                    var fightChoiceStamina = prompt('Use 5 stamina to overpower and deal some damage? \'a\', Step back to prepare for the next attack? \'b\', or Insult opponent? \'c\'?')
                    if (fightChoiceStamina === 'a'){
                        
                    }
                } else if (orcReaction = 2) {
                    
                }*/
                /*
                alert('You attack the Orc your ' + weapon + ' dealing ' + adventurer.attack + ' damage!')
                orc.health = orc.health - adventurer.attack;
                console.log('The orc has ' + orc.health + ' health points left.');
                */
            attackDamage('Orc', 'Adventurer');
        } else if (fightChoice === 'b'){
            alert('You dodge the orc\'s attack as he lunges toward you.')
            console.log('No stat change.');
        } else if (fightChoice === 'c'){
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
        if (orc.health > 0 && fightChoice !== 'b') {
            alert('The orc swings his rusty blade and slices you across the chest doing ' + orc.attack + ' damage!');
            adventurer.health = adventurer.health - orc.attack;
            console.log('You now have ' + adventurer.health + ' health points left.');
        }
    } //END ROUND
}
    