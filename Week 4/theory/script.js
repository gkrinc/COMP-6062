/**
 * Calculates the area of a triangle
 * @param {Number} base
 * @param {Number} height
 * @returns {Number}
 */
const areaTriangle = (base, height) => (base * height / 2);

const triangleInputBase = document.getElementById('triangle-base');
const triangleInputHeight = document.getElementById('triangle-height');
const triangleInputArea = document.getElementById('triangle-area');

triangleInputBase.addEventListener('change', (event) => {
  const base = Number(event.target.value);
  const height = Number(triangleInputHeight.value);
  const area = areaTriangle(base, height);
  
  triangleInputArea.value = area.toFixed(1);
});

triangleInputHeight.addEventListener('change', (event) => {
  const height = Number(event.target.value);
  const base = Number(triangleInputBase.value);
  const area = areaTriangle(base, height);

  triangleInputArea.value = area.toFixed(1);
});

// ----------------------------------------------------------------

/**
 * Calculates the volume of a sphere
 * @param {Number} radius
 * @returns {Number}
 */
const volumeSphere = radius => 4/3*Math.PI*radius**3;

const sphereSliderRadius = document.getElementById('sphere-radius');
const sphereLabelRadius = document.querySelector('[for="sphere-radius"]'); // query by attribute
const sphereInputVolume = document.getElementById('sphere-volume');

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
