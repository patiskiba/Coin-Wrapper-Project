//! PART 1: TOTAL VALUES OF COINS

//? Coin type values
let pennyValue = 0.01;
let nickelValue = 0.05;
let dimeValue = 0.10;
let quarterValue = 0.25;


//? Coin counts (PLACEHOLDERS)
let pennyCount = 200;
let nickelCount = 200;
let dimeCount = 200;
let quarterCount = 200;

//? Calculate totals
let pennyValueTotal = pennyValue * pennyCount;
let nickelValueTotal = nickelValue * nickelCount;
let dimeValueTotal = dimeValue * dimeCount;
let quarterValueTotal = quarterValue * quarterCount;
let combinedValueTotal = pennyValueTotal + nickelValueTotal + dimeValueTotal + quarterValueTotal;

console.log(`Pennies: $${pennyValueTotal}`);
console.log(`Nickels: $${nickelValueTotal}`);
console.log(`Dimes: $${dimeValueTotal}`);
console.log(`Quarters: $${quarterValueTotal}`);
console.log(`Combined Total: $${combinedValueTotal}`);