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

// desabilitando o botão enviar
const buttonEnviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
 
buttonEnviar.disabled = true;
 
// habilitar o botão enviar só quando tiver checando
function verificarEstado() {
 if (checkbox.checked) {
   buttonEnviar.disabled = false;
 } else {
   buttonEnviar.disabled = true;
 }
}
 
checkbox.addEventListener('click', verificarEstado);
 