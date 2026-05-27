const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.textContent = "Primeira interação com JavaScript 🚀";
});

const form = document.getElementById("formAgenda");
const resposta = document.getElementById("resposta");

const ultimoAgendamento = localStorage.getItem("ultimoAgendamento");

if (ultimoAgendamento) {
  resposta.textContent = ultimoAgendamento;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;

  if (nome === "" || servico === "") {
    resposta.textContent = "Preencha nome e serviço antes de agendar.";
    return;
  }

  const texto = `${nome}, seu agendamento para ${servico} foi solicitado 🚀`;

  resposta.textContent = texto;
  localStorage.setItem("ultimoAgendamento", texto);
});