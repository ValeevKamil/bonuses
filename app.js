console.log('worced');

const purchaseAmount = 1000;
const bonuses = 2000;

let total;
if (purchaseAmount <= bonuses) {
     total = 0;
} else {
     total = purchaseAmount - bonuses;
}

console.log(total);