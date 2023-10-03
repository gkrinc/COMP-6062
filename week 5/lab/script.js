const radios = document.querySelectorAll('[name="options"]');
const specialSection = document.querySelectorAll('.option-2-special')[0];

radios.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.value === '2') {
      specialSection.classList.remove('d-none');
    } else {
      specialSection.classList.add('d-none');
    }
  });
});

const textbox = document.getElementById('textbox');
textbox.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'enter') {
    alert('"Enter" key pressed');
  }
});