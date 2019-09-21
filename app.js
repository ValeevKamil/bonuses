console.log('worced');

const purchaseAmount = 1000;
const avaliablebonuses = 1000;

const maxBonusesSpend = purchaseAmount * 0.5;
let avaliableBonuses;
if (maxBonusesSpend <=avaliablebonuses) {
     avaliableBonuses = maxBonusesSpend;
} else {
    avaliableBonuses = avaliablebonuses;
}

console.log(avaliableBonuses);
const total = purchaseAmount - avaliableBonuses;
console.log(total);