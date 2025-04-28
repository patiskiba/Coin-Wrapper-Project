//! PART 1: TOTAL VALUES OF COINS
console.log("PART 1: Values of coins.");

//? Coin type values
let pennyValue = 0.01;
let nickelValue = 0.05;
let dimeValue = 0.1;
let quarterValue = 0.25;


//? Coin counts (PLACEHOLDERS)
let pennyCount = Number(prompt("Enter penny count:"));
let nickelCount = Number(prompt("Enter nickel count:"));
let dimeCount = Number(prompt("Enter dime count:"));
let quarterCount = Number(prompt("Enter quarter count:"));
let combinedCount = pennyCount + nickelCount + dimeCount + quarterCount;

//? Calculate totals
let pennyValueTotal = pennyValue * pennyCount;
let nickelValueTotal = nickelValue * nickelCount;
let dimeValueTotal = dimeValue * dimeCount;
let quarterValueTotal = quarterValue * quarterCount;
let combinedValueTotal = pennyValueTotal + nickelValueTotal + dimeValueTotal + quarterValueTotal;

console.log(`Pennies: $${pennyValueTotal.toFixed(2)}`);
console.log(`Nickels: $${nickelValueTotal.toFixed(2)}`);
console.log(`Dimes: $${dimeValueTotal.toFixed(2)}`);
console.log(`Quarters: $${quarterValueTotal.toFixed(2)}`);
console.log(`Combined Total: $${combinedValueTotal.toFixed(2)}`);


//! PART 2: WRAPPERS

console.log("--------------");
console.log("PART 2: Coins sorted into wrappers.");

//? Wrapper capacities
let pennyWrapperCapacity = 50;
let nickelWrapperCapacity = 40;
let dimeWrapperCapacity = 50;
let quarterWrapperCapacity = 40;

//? Initial wrappers and remainders
let pennyWrapperCount = 0;
let pennyWrapperRemainder = 0;

let nickelWrapperCount = 0;
let nickelWrapperRemainder = 0;

let dimeWrapperCount = 0;
let dimeWrapperRemainder = 0;

let quarterWrapperCount = 0;
let quarterWrapperRemainder = 0;

//? Calculate actual wrapper counts and remainders
//? Pennies
pennyWrapperCount = Math.floor(pennyCount/pennyWrapperCapacity);
pennyWrapperRemainder = pennyCount % pennyWrapperCapacity;

console.log(`${pennyWrapperCount} wrapper(s) for pennies. ${pennyWrapperRemainder} pennies remaining.`);

//? Nickels
nickelWrapperCount = Math.floor(nickelCount/nickelWrapperCapacity);
nickelWrapperRemainder = nickelCount % nickelWrapperCapacity;

console.log(`${nickelWrapperCount} wrapper(s) for nickels. ${nickelWrapperRemainder} nickels remaining.`);

//? Dimes
dimeWrapperCount = Math.floor(dimeCount/dimeWrapperCapacity);
dimeWrapperRemainder = dimeCount % dimeWrapperCapacity;

console.log(`${dimeWrapperCount} wrapper(s) for dimes. ${dimeWrapperRemainder} dimes remaining.`);

//? Quarters
quarterWrapperCount = Math.floor(quarterCount/quarterWrapperCapacity);
quarterWrapperRemainder = quarterCount % quarterWrapperCapacity;

console.log(`${quarterWrapperCount} wrapper(s) for quarters. ${quarterWrapperRemainder} quarters remaining.`);

//? Remainder combined value
let pennyWrapperRemainderValue = pennyWrapperRemainder * pennyValue;
let nickelWrapperRemainderValue = nickelWrapperRemainder * nickelValue;
let dimeWrapperRemainderValue = dimeWrapperRemainder * dimeValue;
let quarterWrapperRemainderValue = quarterWrapperRemainder * quarterValue;
let combinedRemainderValue = pennyWrapperRemainderValue + nickelWrapperRemainderValue + dimeWrapperRemainderValue + quarterWrapperRemainderValue;

console.log(`Combined total remainder value: $${combinedRemainderValue.toFixed(2)}`)