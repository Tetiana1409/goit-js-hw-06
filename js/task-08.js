const form = document.querySelector('.login-form');

form.addEventListener('submit', onSendingForm);

function onSendingForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const userInfo = {
    Email: email.value,
    Password: password.value,
  };

  console.log(userInfo);
  event.currentTarget.reset();
}
