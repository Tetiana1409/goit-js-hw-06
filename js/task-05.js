const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

if (textInput.value === '') {
  output.textContent = textInput.attributes.placeholder.value;
} else {
  output.textContent = textInput.value;
}

function onAddTextInput(event) {
  event.currentTarget.value === ' '
    ? (output.textContent = 'Anonymous')
    : (output.textContent = event.currentTarget.value);
}

textInput.addEventListener('input', onAddTextInput);

//
