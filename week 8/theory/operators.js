
let on = true;
console.log(on ? 'On' : 'Off');
// Expected output: 'On'

on = false;
console.log(on ? 'On' : 'Off');
// Expected output: 'Off'


const a = {};

// Old way...clunky
if (a && a.b && a.b.c) {
  console.log(a.b.c);
}

console.log(a?.b?.c);
// Expected output: undefined

// Can be used to call functions as well
const car = { pressBrake: () => {} };
car.pressBrake();
// Error car.pressGas is not a function
car.pressGas();
// Safe, no error - returns undefined
car.pressGas?.();



const status = {};
console.log(status.message ?? 'n/a');
// Expected output: 'n/a'
console.log(status?.message?.label ?? 'n/a');
// Expected output: 'n/a'


