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


//! PART 3: EXTRA CHALLENGE

console.log("--------------");
console.log("PART 3: Array sorting challenge (count variables reset)");

pennyCount = 0;
nickelCount = 0;
dimeCount = 0;
quarterCount = 0;



var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']



//? Go through array and sort

let penny = "penny";
let nickel = "nickel";
let dime = "dime";
let quarter = "quarter";


for (let i = 0; i < challengeData.length; i++) {
    if (challengeData[i] === penny) {
        pennyCount++;
    } else if (challengeData[i] === nickel) {
        nickelCount++;
    } else if (challengeData[i] === dime) {
        dimeCount++;
    } else if (challengeData[i] === quarter) {
        quarterCount++;
    }
}

console.log("In the challenge array there are:");
console.log(`${pennyCount} pennies.`);
console.log(`${nickelCount} nickels.`);
console.log(`${dimeCount} dimes.`);
console.log(`And ${quarterCount} quarters!`)

