// Creating an object called `spiderman`
const spiderman = {
  username: 'Spiderman',
  email: 'spiderman@marvel.com'
};

const anotherSpiderman = {
  username: 'Spiderman',
  email: 'spiderman@marvel.com'
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
console.log('spiderman ≡ duplicateSpiderman: ', arePropertiesEquivalent);

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

const areEquivalent = objectsAreEquivalent(spiderman, duplicateSpiderman);
console.log('spiderman ≡ duplicateSpiderman: ', areEquivalent);




// Another object. Though it has the same signature, it
// isn't related to the `spiderman` variable in any way
const hulk = {
  username: 'Hulk',
  email: 'hulk@marvel.com'
};