
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

var storyBoxDelay = 0;
var yesNo;
var textInput;

function testFunction() {
    console.log('testFunction tested');
}
function modifyElement (id, buttonValue){
    document.getElementById(id).textContent= buttonValue;
}
// Toggle choice box
function toggleChoiceBox() {
    document.querySelector('.choiceBox').classList.toggle('hide');
};

// Toggle multi-choice box
function toggleMultiBox() {
    document.querySelector('.multiChoiceBox').classList.toggle('hide');
};

// Toggle battle mode
function toggleBattleMode() {
    document.querySelector('.battleLoop').classList.toggle('hide');
};

// Toggle Response boxes
function toggleResponseBox() {
   document.getElementById('response').classList.toggle('hide');
};

// Toggle yes/no buttons
function toggleYesNo() {
    document.getElementById('yesNo').classList.toggle('hide');
};

// modifyButton
function modifyButton (id, buttonValue, buttonFunc, newId){
    document.getElementById(id).value= buttonValue;
    document.getElementById(id).setAttribute('onclick', buttonFunc);
    document.getElementById(id).id= newId;
    console.log(id + buttonValue + buttonFunc + newId);
};

// modifyButtonFunction
function modifyButtonFunc (id, buttonFunc){
    document.getElementById(id).setAttribute('onclick', buttonFunc);
};

// update STory Header
function modifyStoryHead(text){
    document.querySelector('#storyBoxHeadCh').innerHTML = text;
};

// update Story Paragraph
function modifyStoryPar(text){
    console.log(text);
    document.querySelector('#storyBoxParCh').innerHTML=text;
};

// update Story Question
function modifyStoryQuestion(text) {
    document.querySelector('#storyQuestionCh').textContent = text;
};

function sequence0n1 (){
    var x = 'Ch';
    console.log("began sequence0n1");
    document.getElementById('begin').classList.toggle('hide');
    toggleChoiceBox();
    toggleYesNo();
    modifyButtonFunc('yes', 'sequence0n2 ()');
    modifyButtonFunc('no', 'sequence0n1 ()');
    modifyStoryHead('Welcome to Sunny ' + kingdomName);
    modifyStoryPar('Welcome, hero. Our great land is in peril. We have been overrun with Orcs and need your help!');
    modifyStoryQuestion('Will you help us?');
    console.log("finished sequence0n1");
};


function sequence0n2(){
    modifyStoryHead('Excellent!');
    modifyStoryPar('We are most gracious! To help you on this quest you may select a weapon of your choice!');
    modifyStoryQuestion('Would you like a sword, axe, mace, bow or something else?');
    toggleResponseBox();
}
    
// sequence0n2: will you help?
// sequence0n3: choose weapon


//// sequence1
// sequence1n1: walking when orcs attack
// sequence1n2: orc battle
// sequence1n3: victory see cave

//// sequence2
// sequence2n1: enter cave, go left or right?
// sequence2n2: right = sequence3
// sequence2n3: left: closed door, open or turn around?
    // turn around = sequence3n1:
// sequence2n4: open door, orc battle
// sequence2n5: victory, choose prize

//// sequence3
// sequence3n1: head other way

function gameOver() {
    alert('You fall to your knees. The last breath fades from your body as all fades to black.');
    alert('You have died.');
    throw new Error('GAME OVER!');
}

function getTextInput() {
                console.log('started getTextInput')
    textInput = document.getElementById('textInput').value;
    document.getElementById('response').classList.toggle = 'hide';
                console.log("finished getTextInput");

    //pauseScript === false;
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
function popUps(type, text){
                    console.log('started popUps')
     window.setTimeout(type, storyBoxDelay, text);
                    console.log('finished popUps')

}


// simple updates to story box

function alerts(text) {
                    console.log('started alerts')
    updateStoryBox(text, storyBoxDelay);
                    console.log('finished alerts')
}

// Typed Replies

function prompts(text) {
                    console.log('started prompts')
    document.getElementById('response').classList.toggle('hide');
    updateStoryBox(text, storyBoxDelay);
                    console.log('finished prompts')
    //pauseScript === true;
}

// Yes or No button answers

function confirms(text) {
                    console.log('started confirms')
    document.getElementById('yesNo').classList.toggle('hide');
    updateStoryBox(text, storyBoxDelay);
    document.getElementById('yes').addEventListener('click', returnYes);
    document.getElementById('no').addEventListener('click', returnNo)
                    console.log('finished confirms')
    //pauseScript === true;
}

function returnYes() {
                    console.log('started returnYes')
    yesNo === true;
    document.getElementById('yesNo').classList.toggle('hide');
                    console.log('finished returnYes')
}
    
function returnNo() {
                    console.log('started returnNo')
    yesNo === false;
    document.getElementById('yesNo').classList.toggle('hide');
                    console.log('finished returnNo')
}
/////////////////////////
// Part One            //   
/////////////////////////

function gameStart (){
                    console.log('started gameStart')
updateStory('The land is in peril. We have been overrun with Orcs and need your help!');
    popUps(prompts, 'What is your name?');
    var namePlayer = textInput;
    popUps(confirms, 'Will you help us?');
    if (yesNo === true) {
        alerts('We are most gracious! To help you on this quest you may select a weapon of your choice!');

        //Begin Weapon Select
        prompts('Would you like a sword, axe, mace, or bow?');
        switch (textInput) {
            case 'sword':
                alerts('That is the sharpest sword in all the land!');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'axe':
                alerts('That axe will help you tear throw a lot of Orcs. Use it wisely.');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'mace':
                alerts('That mace is a favorite of our blacksmith. Good for smashing Orcs');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'bow':
                alerts('Ah the nimble bow. You plan on taking down Orcs from afar!');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                console.log('Hero attack now ' + adventurer.attack);
                break;
            case 'excalibur':
                alerts('How... how did you know we had Excalibur? That was supposed to be a secret. Very well, you may take Excalibur on your quest.');
                adventurer.attack = adventurer.attack + 100;
                console.log('Hero attack now ' + adventurer.attack);
                break;
            default:
                alerts('Err. I\'m not sure why you would want to use that as your weapon, but hey, you do you.');
                adventurer.attack = adventurer.attack + 5;
                console.log('Hero attack now ' + adventurer.attack);
                                 } //End Weapon Select
        alerts('We are so happy for you to be helping us. I know that it is a long and dangerous road ahead.')
        //sequenceOne (); //Start Next Function
    } else {
        alerts('Well fine. It\'s not like we don\'t have women or children or anything. Just leave us to die. That\'s cool.')
        alerts('Jerk.');
    }
                        console.log('finished gameStart');

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
    