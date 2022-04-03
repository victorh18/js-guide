const ATTACK_VALUE = 20;
const STRONG_ATTACK_VALUE = 25
const MONSTER_ATTACK_VALUE = 17
const HEAL_VALUE = 20;

const AttackModes = {
    NORMAL: 'NORMAL',
    STRONG: 'STRONG'
}

const LogEvents = {
    PLAYER_ATTACK: "PLAYER_ATTACK",
    PLAYER_STRONG_ATTACK: "PLAYER_STRONG_ATTACK",
    PLAYER_HEALED: "PLAYER_HEALED",
    MONSTER_ATTACK: "MONSTER_ATTACK", 
    MONSTER_STRONG_ATTACK: "MONSTER_STRONG_ATTACK",
    PLAYER_WINS: "PLAYER_WINS",
    MONSTER_WINS: "MONSTER_WINS",
    DRAW: "DRAW"
}

const EventTargets = {
    PLAYER_ATTACK: "MONSTER",
    PLAYER_STRONG_ATTACK: "MONSTER",
    PLAYER_HEALED: "PLAYER",
    MONSTER_ATTACK: "PLAYER", 
    MONSTER_STRONG_ATTACK: "PLAYER",
    PLAYER_WINS: "MONSTER",
    MONSTER_WINS: "PLAYER",
    DRAW: "NO ONE"
}

let chosenMaxLife = 0;

let battleLog = [];

do { 
    chosenMaxLife = parseInt(prompt("Enter the maximum available life for the players.", "100"));
} while (isNaN(chosenMaxLife) || chosenMaxLife <= 0 );

let playersHealth = chosenMaxLife;
let monstersHealth = chosenMaxLife;
let hasBonusLife = true;
adjustHealthBars(chosenMaxLife);

function writeToLog(event, damageDealt, playerHealth, monsterHealth) {
    battleLog.push({
        event,
        damage: damageDealt,
        target: EventTargets[event],
        playersHealth: playerHealth,
        monsterHealth: monsterHealth
    });
}

function reset() {
    playersHealth = chosenMaxLife;
    monstersHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = playersHealth;
    const monsterDealtDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    playersHealth -= monsterDealtDamage;
    writeToLog(LogEvents.MONSTER_ATTACK, monsterDealtDamage, playersHealth, monstersHealth);

    if (playersHealth <= 0 && hasBonusLife) {
        playersHealth = initialPlayerHealth;
        setPlayerHealth(playersHealth);
        removeBonusLife();
        hasBonusLife = false;
        alert('You should have lost, but the extra life saved you.')
    }

    if (playersHealth > 0 && monstersHealth <= 0 ) {
        alert("you won! :D");
        writeToLog(LogEvents.PLAYER_WINS, 0, playersHealth, monstersHealth);
    } else if (monstersHealth > 0 && playersHealth <= 0) {
        alert("You lost! :(");
        writeToLog(LogEvents.MONSTER_WINS, monsterDealtDamage, playersHealth, monstersHealth);
    } else if (playersHealth <= 0 && monstersHealth <= 0) {
        alert("It's a draw! .__.");
        writeToLog(LogEvents.DRAW, 0, playersHealth, monstersHealth);
    }

    if (playersHealth <= 0 || monstersHealth <= 0) {
        reset();
    }
}

function attackMonster(attackMode) {
    let maxDamage;
    let eventType;
    if (attackMode === AttackModes.NORMAL) {
        maxDamage = ATTACK_VALUE;
        eventType = LogEvents.PLAYER_ATTACK;
    } else if (attackMode === AttackModes.STRONG) {
        maxDamage = STRONG_ATTACK_VALUE;
        eventType = LogEvents.PLAYER_STRONG_ATTACK;
    }

    console.log(`I just did a ${attackMode} which could have been a maximum of ${maxDamage}`);

    const dealtDamage = dealMonsterDamage(maxDamage);

    monstersHealth -= dealtDamage;
    writeToLog(eventType, dealtDamage, playersHealth, monstersHealth);

    endRound();
}

function healPlayerHandler() {
    let healValue;
    if (playersHealth >= chosenMaxLife - HEAL_VALUE) {
        healValue = chosenMaxLife - playersHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    playersHealth += healValue;
    writeToLog(LogEvents.PLAYER_HEALED, healValue, playersHealth, monstersHealth);

    endRound();
}

function attackHandler() {
    attackMonster(AttackModes.NORMAL);
}

function strongAttackHandler() {
    attackMonster(AttackModes.STRONG);
}

function logButtonHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', logButtonHandler);
