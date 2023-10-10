console.log('Loaded');

const areaOfACircle = (radius) => Math.PI * radius ** 2;

const radiusInput = document.getElementById('greg-radius-input');
const areaInput = document.getElementById('greg-area-input');

radiusInput.addEventListener('input', (event) => {
  const area = areaOfACircle(event.target.value);
  areaInput.value = area.toFixed(2);
});
