const focusInput = document.querySelector('#validation-input');

focusInput.addEventListener('blur', event => {
  if (event.currentTarget.value.length == focusInput.getAttribute('data-length')) {
    focusInput.classList.add('valid');
  } else {
    focusInput.classList.add('invalid');
  }
});
