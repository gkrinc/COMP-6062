const report = (c) => {
  console.log(c);
}

// The `callback` parameter is a function
// There is a bit of a disconnect in the function signature
// we're not really sure what parameters callback takes but,
// that's on us as the developer to make sure the signature
// of the function we pass, matches what `doWork` expects as a callback
const doWork = (a, b, callback) => {
  let value = a * b;

  if (callback) {
    // If the callback parameter exists
    // call it and pass `value` as the parameter
    callback(value);
  }
}

// Nothing gets console logged because we didn't provide a callback
doWork(5, 2);

// In this case we're passing our `report` function as the parameter
// for `callback`. This will log '18' to the console
doWork(6, 3, report);

// Because the `report` function is generic it's handy to
// create a named function for it and reuse it
doWork(7, 1, report);


// But what if we need a very specific callback that's only used in one instance?
// We could create another named function, but that's extra code
// and a little harder to follow. This is where anonymous functions come in
doWork(7, 0, (c) => {
  if (c === 0) {
    console.error('Zero?!');
  }
});
