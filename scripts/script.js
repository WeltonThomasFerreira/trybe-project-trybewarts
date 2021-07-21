const loginButton = document.querySelector('#login-button');
const checkBox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

checkBox.addEventListener('click', () => {
  if (checkBox.checked === true) {
    submitButton.removeAttribute('disabled');
    console.log(checkBox.value);
  } else {
    submitButton.setAttribute('disabled', 'disabled');
    console.log(checkBox.value);
  }
});

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const login = document.querySelector('#input-login');
  const password = document.querySelector('#input-password');
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});
