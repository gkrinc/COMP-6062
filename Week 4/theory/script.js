/*
The window variable is always in scope so we can access it’s properties with or without
prefixing them with the variable name window.

console.log();
same as
window.console.log();

*/

console.log('Log level message');
console.info('Info level message');
console.debug('Debug level message');
console.warn('Warn level message');
console.error('Error level message');

const course = {
  name: 'COMP-6062',
  year: 2023,
  semester: 'Fall',
};
console.log(course);
console.log({course});
console.log('Course: ', course.name, course.year, course.semester);




// ----------------------------------------------------------------






/**
 * Calculates the area of a triangle
 * @param {Number} base
 * @param {Number} height
 * @returns {Number}
 */
const areaTriangle = (base, height) => (base * height / 2);

// Notice how we don't include the `#`? The function is searching by element id so the `#` would be redundant
const triangleInputBase = document.getElementById('triangle-base'); // returns an Element object
const triangleInputHeight = document.getElementById('triangle-height');
const triangleInputArea = document.getElementById('triangle-area');

// The `input` event fires when the value of an <input>, <select>, or <textarea> element has been changed
// as a direct result of a user action (such as typing in a textbox or checking a checkbox).
triangleInputBase.addEventListener('input', (event) => {
  // The `value` from the event target is always a string even though we set the type on the input to `number`
  const base = Number(event.target.value);
  const height = Number(triangleInputHeight.value);
  const area = areaTriangle(base, height);
  
  // Set the value of the input
  triangleInputArea.value = area.toFixed(1);
});

triangleInputHeight.addEventListener('input', (event) => {
  const height = Number(event.target.value);
  const base = Number(triangleInputBase.value);
  const area = areaTriangle(base, height);

  // Set the value of the input
  triangleInputArea.value = area.toFixed(1);
});





// ----------------------------------------------------------------




// Template literals example
console.log('COMP' + '-' + 6062);
console.log('COMP'.concat('-', 6062));
const programCode = 'COMP';
const programNumber = 6062;
console.log(`${programCode}-${programNumber}`);
console.log(`This is a
multiline
string`);
console.log(`Area = ${areaTriangle(5, 7)}`);





// ----------------------------------------------------------------





/**
 * Calculates the volume of a sphere
 * @param {Number} radius
 * @returns {Number}
 */
const volumeSphere = radius => 4/3*Math.PI*radius**3;

const sphereSliderRadius = document.getElementById('sphere-radius');
const sphereLabelRadius = document.querySelector('[for="sphere-radius"]'); // CSS syntax for selector(query) by attribute
const sphereInputVolume = document.getElementById('sphere-volume');

// The second parameter of addEventListener is a function. This can either be a named function
// or in this case an "anonymous function"
sphereSliderRadius.addEventListener('input', (event) => {
  const radius = Number(event.target.value);
  updateSphereVolume(radius);
});

const updateSphereVolume = (radius) => {
  const volume = volumeSphere(radius);

  sphereInputVolume.value = volume.toFixed(2);
  sphereLabelRadius.innerHTML = `Radius (${radius.toFixed(1)})`;
};

updateSphereVolume(Number(sphereSliderRadius.value));





// ----------------------------------------------------------------




const btn = document.getElementById('btn');

document.getElementsByName('btn-class').forEach((radio) => {
    radio.addEventListener('input', (event) => {
      const value = event.target.value;

      btn.className = `btn ${value}`;
      btn.setAttribute('disabled', value === 'btn-disabled');
  });
});

btn.addEventListener('click', () => {
  // Is this particular instance, we don't really care about
  // the `event` parameter because we know which button was clicked
  // and don't need anything from the button
  alert('The button was clicked');
});

btn.addEventListener('keypress', (event) => {
  console.log(`The '${event.key}' key was pressed`);
});




// ----------------------------------------------------------------




function genericClickHandlerWithThis() {
  // 'data' attributes are a nice way to add additional context
  // to an element without causing strange side-effect by using 
  // non-standard attributes or hacks
  console.log(this.dataset.testvalue);
};

const genericClickHandlerWithoutThis = (event) => {
  console.log(event.target.dataset.testvalue);
};

// Note how we include the dot on .generic-btn with the querySelectorAll method
// because it's generic we need to be more specific with our query
document.querySelectorAll('.generic-btn').forEach((genericBtn) => {
  genericBtn.addEventListener('click', genericClickHandlerWithThis);
  genericBtn.addEventListener('click', genericClickHandlerWithoutThis);
});
