const ATTACK_VALUE = 20;
const STRONG_ATTACK_VALUE = 25
const MONSTER_ATTACK_VALUE = 17
const AttackModes = {
    NORMAL: 'NORMAL',
    STRONG: 'STRONG'
}

let chosenMaxLife = 100;

let playersHealth = chosenMaxLife;
let monstersHealth = chosenMaxLife;

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
    const monsterDealtDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    playersHealth -= monsterDealtDamage;

    if (playersHealth > 0 && monstersHealth <= 0 ) {
        alert("you won! :D");
    } else if (monstersHealth > 0 && playersHealth <= 0) {
        alert("You lost! :(");
    } else if (playersHealth <= 0 && monstersHealth <= 0) {
        alert("It's a draw! .__.");
    }
}

function attackHandler() {
    attackMonster(AttackModes.NORMAL);
}

function strongAttackHandler() {
    attackMonster(AttackModes.STRONG);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
