const select = document.getElementById('special-select');
const specialSection = document.querySelectorAll('.option-2-special')[0];

select.addEventListener('change', (event) => {
  if (event.target.value === '2') {
    specialSection.classList.remove('d-none');
  } else {
    specialSection.classList.add('d-none');
  }
});

const textbox = document.getElementById('textbox');
textbox.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'enter') {
    alert('"Enter" key pressed');
  }
});