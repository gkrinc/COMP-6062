// Creating an object called `spiderman`
const spiderman = {
  name: 'Spiderman',
  email: 'spiderman@marvel.com',
};

const anotherSpiderman = {
  name: 'Spiderman',
  email: 'spiderman@marvel.com',
};

// Another object. Though it has the same signature, it
// isn't related to the `spiderman` variables in any way
const hulk = {
  name: 'Hulk',
  email: 'hulk@marvel.com',
};

// Even though they have the same properties and values
// they are not equal
console.log('spiderman == anotherSpiderman: ', spiderman == anotherSpiderman);

// We can copy the reference to `spiderman` into another variable though
const duplicateSpiderman = spiderman;

// They both point to the same object, therefore they're equal
console.log('duplicateSpiderman === spiderman: ', duplicateSpiderman === spiderman);

// Not exactly a graceful way of checking equivalence. Think about an object with dozens of properties :s
const arePropertiesEquivalent = spiderman.name === duplicateSpiderman.name && spiderman.email === duplicateSpiderman.email;
console.log('spiderman ~ duplicateSpiderman: ', arePropertiesEquivalent);

// This function will check all of the key/pairs in both objects
// against each other to ensure one object doesn't have keys that
// the other object doesn't
const objectsAreEquivalent = (objA, objB) => {
  let equivalent = 1;
  Object.keys(objA).forEach((key) => {
    equivalent &= objA[key] === objB[key];
  });

  // At this point we have checked if all of the properties that exist on objA
  // exist and are equivalent to the same properties on objB. Now we need to do
  // the same thing using the keys from objB

  Object.keys(objB).forEach((key) => {
    equivalent &= objA[key] === objB[key];
  });

  return Boolean(equivalent);
};

const areEquivalent = objectsAreEquivalent(spiderman, anotherSpiderman);
console.log('spiderman ~ anotherSpiderman: ', areEquivalent);

// Object can be extended at any time just by adding the new property and setting a value
spiderman.firstAppearance = {
  comic: 'Amazing Fantasy',
  volume: 15
};

// We can see that the original properties: name and email are still there,
// but we now also see the new `firstAppearance` property
console.log({spiderman});

// Object can get very nested as well, but we can't set a nested property until
// it's parent has been defined. By trying to set the value `total` on the property
// `issues` which has yet to be set, we'll get this error in the console:
// objects.js:68 Uncaught TypeError: Cannot set properties of undefined (setting 'total')
// spiderman.issues.total = 2132;

// Object properties can also be functions
spiderman.sayCatchprase = () => {
  console.log(' Whatever life holds in store for me, I will never forget these words: "With great power comes great responsibility." This is my gift, my curse. Who am I? I\'m Spider-man');
};

spiderman.sayCatchprase();
