const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', () => {
  const login = document.querySelector('#input-login');
  const password = document.querySelector('#input-password');
  console.log(login.value);
  console.log(password.value);
  if (login.value === 'tryber@teste.com' && password.value !== '123456') {
    window.alert('Olá, Tryber!');
  }
});
