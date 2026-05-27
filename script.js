const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.textContent = "Primeira interação com JavaScript 🚀";
});

const form = document.getElementById("formAgenda");
const resposta = document.getElementById("resposta");
const listaAgendamentos = document.getElementById("listaAgendamentos");
const agendamentos = [];

function renderizarAgendamentos() {
  listaAgendamentos.innerHTML = "";

  agendamentos.forEach(function(agendamento, index) {
    listaAgendamentos.innerHTML += `
      <li>
       ${agendamento.horario} - ${agendamento.nome} - ${agendamento.servico}
        <button onclick="removerAgendamento(${index})">
          Remover
        </button>
      </li>
    `;
  });
}

function removerAgendamento(index) {
  agendamentos.splice(index, 1);
  renderizarAgendamentos();
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const horario = document.getElementById("horario").value;

if (
  nome === "" ||
  servico === "" ||
  horario === ""
  ) 
  {
    resposta.textContent = "Preencha nome e serviço antes de agendar.";
    return;
}
const horarioExistente = agendamentos.find(
  function(agendamento) {
    return agendamento.horario === horario;
  }
 );

if (horarioExistente) {

  resposta.textContent =
    "Esse horário já está ocupado.";

  return;
}
  const texto = `${nome}, seu agendamento para ${servico} foi solicitado 🚀`;

  resposta.textContent = texto;

  agendamentos.push({
  nome: nome,
  servico: servico,
  horario: horario
});

  renderizarAgendamentos();
});