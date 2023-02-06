const textInput = document.querySelector('#font-size-control');
const valueInput = document.querySelector('#text');

textInput.addEventListener('input', onСhangeTextInput);

function onСhangeTextInput(event) {
  valueInput.style.fontSize = `${event.currentTarget.value}px`;
}
