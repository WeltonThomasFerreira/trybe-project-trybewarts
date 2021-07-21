const loginButton = document.querySelector('#login-button');
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
