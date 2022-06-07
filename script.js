// criando alerta ao digitar o e-mail e senha
const headerEmail = document.getElementById('header-email');
const senha = document.getElementById('senha');
const buttonEntrar = document.getElementById('entrar');

function alerta() {
  if (headerEmail.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', alerta);
