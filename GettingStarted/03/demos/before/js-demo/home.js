let testString = "Hello world";
let testNumber = 5.20;
let testNumberAsString = "123.456"
const testConst = "constant";
let decimalTest = 0.000001531513531;

//types of quotes
let single = "singleQuotes";
let double = "doubleQuotes";
//also allow interpolation
let backquotes = `Calling parameter: ${testString}`;

//type conversion

let numberToString = testInt.toString;
let stringToNumber = Number.parseFloat(testNumberAsString);

//bool
let trueValue = true;
let falseValue = false;

//null, undefined
let underfinedValue = undefined; //used by JS when an object is not initialized
let nullValue = null; //used by developers to wipe value

//objects and symbols

let person ={
    firstName: "Aleks",
    lastName: "Popov"
}

showMessage(typeof decimalTest)
console.log("test message")