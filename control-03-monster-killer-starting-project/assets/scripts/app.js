const ATTACK_VALUE = 20;
const STRONG_ATTACK_VALUE = 25
const MONSTER_ATTACK_VALUE = 17
const HEAL_VALUE = 20;

const AttackModes = {
    NORMAL: 'NORMAL',
    STRONG: 'STRONG'
}

let chosenMaxLife = 0;

do { 
    chosenMaxLife = parseInt(prompt("Enter the maximum available life for the players.", "100"));
} while (isNaN(chosenMaxLife) || chosenMaxLife <= 0 );

let playersHealth = chosenMaxLife;
let monstersHealth = chosenMaxLife;
let hasBonusLife = true;
adjustHealthBars(chosenMaxLife);

function reset() {
    playersHealth = chosenMaxLife;
    monstersHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = playersHealth;
    const monsterDealtDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    playersHealth -= monsterDealtDamage;

    if (playersHealth <= 0 && hasBonusLife) {
        playersHealth = initialPlayerHealth;
        setPlayerHealth(playersHealth);
        removeBonusLife();
        hasBonusLife = false;
        alert('You should have lost, but the extra life saved you.')
    }

    if (playersHealth > 0 && monstersHealth <= 0 ) {
        alert("you won! :D");
    } else if (monstersHealth > 0 && playersHealth <= 0) {
        alert("You lost! :(");
    } else if (playersHealth <= 0 && monstersHealth <= 0) {
        alert("It's a draw! .__.");
    }

    if (playersHealth <= 0 || monstersHealth <= 0) {
        reset();
    }
}

function attackMonster(attackMode) {
    let maxDamage;
    if (attackMode === AttackModes.NORMAL) {
        maxDamage = ATTACK_VALUE;
    } else if (attackMode === AttackModes.STRONG) {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    console.log(`I just did a ${attackMode} which could have been a maximum of ${maxDamage}`);

    const dealtDamage = dealMonsterDamage(maxDamage);
    monstersHealth -= dealtDamage;

    endRound()
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

    endRound();
}

function attackHandler() {
    attackMonster(AttackModes.NORMAL);
}

function strongAttackHandler() {
    attackMonster(AttackModes.STRONG);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
