const textInput = document.querySelector('#font-size-control');
const valueInput = document.querySelector('#text');

console.dir(textInput.value);
valueInput.style.fontSize = textInput.value + `px`;

textInput.addEventListener('input', onСhangeTextInput);

function onСhangeTextInput(event) {
  valueInput.style.fontSize = event.currentTarget.value + 'px';
}
