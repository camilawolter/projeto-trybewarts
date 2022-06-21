const emailAvaliacao = document.getElementById('input-email');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const house = document.getElementById('house');
const formAvaliacao = document.getElementById('evaluation-form');
const resultado = document.getElementById('form-data');

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

// criando contador de caracteres
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

counter.innerText = 500;

function contador() {
  const numCaracter = textArea.value.length;
  const result = 500 - numCaracter;
  counter.innerText = result;
}

textArea.addEventListener('keyup', contador);

// substituindo o formulário pelas informações
function subsFormAvaliacao(event) {
  event.preventDefault();

  const familia = document.querySelector('input[name=family]:checked');
  const conteudos = document.querySelectorAll('.subject:checked');
  const nota = document.querySelector('input[name=rate]:checked');

  formAvaliacao.style.display = 'none';

  resultado.innerText = `
    Nome: ${nome.value} ${sobrenome.value}
    Email: ${emailAvaliacao.value}
    Casa: ${house.value}
    Família: ${familia.value}
    Matérias: ${[...conteudos].map((conteudo) => conteudo.value).join(', ')}
    Avaliação:  ${nota.value}
    Observações: ${textArea.value}
  `;
}

formAvaliacao.addEventListener('submit', subsFormAvaliacao);
