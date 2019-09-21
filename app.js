console.log('worced');

const purchaseAmount = 1000;
const avaliableBonuses = 1000;

const maxBonuses = purchaseAmount * 0.5;

// тернарный оператор
const appliedBonuses = maxBonuses <= avaliableBonuses ? maxBonuses: avaliableBonuses;

console.log(appliedBonuses);
const total = purchaseAmount - appliedBonuses;
console.log(total);