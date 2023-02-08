const focusInput = document.querySelector('#validation-input');

focusInput.addEventListener('blur', event => {
  focusInput.classList.add('valid', 'invalid');

  if (event.currentTarget.value.length == focusInput.getAttribute('data-length')) {
    focusInput.classList.remove('invalid');
  } else {
    focusInput.classList.remove('valid');
  }
});
