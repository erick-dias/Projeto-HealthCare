function paginaInicial() {
  const content = document.getElementById("content");

  fetch("../assets/html/paginaInicial.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      headerPadrao();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function paginaLoginPaciente() {
  const content = document.getElementById("content");

  fetch("../assets/html/loginPaciente.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasPaciente();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function cadastroPaciente() {
  const content = document.getElementById("content");

  fetch("../assets/html/cadastroPaciente.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasPaciente();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function cadastroClinica() {
  const content = document.getElementById("content");

  fetch("../assets/html/cadastroClinica.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasClinica();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function loginClinica() {
  const content = document.getElementById("content");

  fetch("../assets/html/loginClinica.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasClinica();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function paginaAssinaturasClinica() {
  const content = document.getElementById("content");

  fetch("../assets/html/paginaAssinaturaClinica.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasClinica();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function paginaListaMedicos() {
  const content = document.getElementById("content");

  fetch("../assets/html/paginaListaMedicosClinica.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      document.getElementById("lista-medicos").innerHTML = getCardsMedicos();
      paginasClinica();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function paginaPerfilPaciente() {
  const content = document.getElementById("content");

  fetch("../assets/html/paginaPerfilPaciente.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasPaciente();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function paginaPerfilClinica() {
  const content = document.getElementById("content");

  fetch("../assets/html/paginaPerfilClinica.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      document.getElementById("quantidade-medicos").innerText = medicos.length;
      paginasClinica();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function paginaBuscarPorMedicos() {
  const content = document.getElementById("content");

  fetch("../assets/html/paginaBuscaPorMedico.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasPaciente();
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function paginaEditarInfoMedicos() {
  const content = document.getElementById("content");

  fetch("../assets/html/editarInfoMedicos.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasClinica();
      let id = document.getElementById("id-cadastro-medico").innerHTML;
      if (id === "-1") {
        document.getElementById("cancelar").setAttribute("onclick", "paginaListaMedicos()");
        document.getElementById("cancelar").innerText = "Cancelar Cadastro";
        document.getElementById("confirmar").innerText = "Concluir Cadastro";
        document.getElementById("titulo-pag").innerText = "Cadastrar Novo Medico";
      }
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function getMedicoTemplate() {
  fetch("/assets/html/templates/medicoCardTemplate.html")
    .then((response) => response.text())
    .then((dados) => {
      templateCardMedicos = dados;
    });
}

//HEADERS
const barraDeNavegacaoHeader = document.querySelector(".barra-de-navegacao-header");
const botaoLogin = document.getElementById("botao-perfil");
const botaoVoltar = document.getElementById("voltar");

function mostrarBotaoVoltar() {
  botaoVoltar.removeAttribute("hidden");
}

function ocultarBotaoVoltar() {
  botaoVoltar.setAttribute("hidden", true);
}

function headerPadrao() {
  ocultarBotaoVoltar();
  barraDeNavegacaoHeader.style.display = "none";
  botaoLogin.style.display = "flex";
  botaoPadraoHeader();
  botaoLogin.setAttribute("onclick", "paginaLoginPaciente()");
}

function paginasClinica() {
  let numeroTipo = document.getElementById("tipo-pagina").innerHTML;

  switch (Number(numeroTipo)) {
    case 2:
      ocultarBotaoVoltar();
      barraDeNavegacaoHeader.style.display = "none";
      botaoLogin.style.display = "none";
      break;

    case 3:
      ocultarBotaoVoltar();
      barraDeNavegacaoHeader.style.display = "flex";
      botaoLogin.style.display = "flex";
      botaoPerfilHeader("clinica");
      document.getElementById("botao-home").style.textDecoration = "underline";

      break;

    default:
      mostrarBotaoVoltar();
      botaoVoltar.setAttribute("onclick", "paginaPerfilClinica()");
      barraDeNavegacaoHeader.style.display = "flex";
      botaoLogin.style.display = "flex";
      botaoPerfilHeader("clinica");
      document.getElementById("botao-home").setAttribute("onclick", "paginaPerfilClinica()");
      document.getElementById("botao-home").style.textDecoration = "none";

      break;
  }
}

function paginasPaciente() {
  let numeroTipo = document.getElementById("tipo-pagina").innerHTML;

  switch (Number(numeroTipo)) {
    case 2:
      ocultarBotaoVoltar();
      barraDeNavegacaoHeader.style.display = "none";
      botaoLogin.style.display = "none";
      break;

    case 3:
      ocultarBotaoVoltar();
      barraDeNavegacaoHeader.style.display = "flex";
      botaoLogin.style.display = "flex";
      botaoPerfilHeader("paciente");
      document.getElementById("botao-home").style.textDecoration = "underline";
      break;

    default:
      mostrarBotaoVoltar();
      botaoVoltar.setAttribute("onclick", "paginaPerfilPaciente()");
      barraDeNavegacaoHeader.style.display = "flex";
      botaoLogin.style.display = "flex";
      botaoPerfilHeader("paciente");
      document.getElementById("botao-home").setAttribute("onclick", "paginaPerfilPaciente()");
      document.getElementById("botao-home").style.textDecoration = "none";
      break;
  }
}

function botaoPadraoHeader() {
  const content = document.getElementById("botao-perfil");
  content.setAttribute("onclick", "paginaLoginPaciente()");
  fetch("../assets/html/templates/resetHeader.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function botaoPerfilHeader(tipoUsuario) {
  const content = document.getElementById("botao-perfil");
  content.removeAttribute("onclick");

  fetch("../assets/html/templates/headerTemplate.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;

      const nomeUsuario = document.getElementById("nome-usuario");
      if (nomeUsuario) {
        nomeUsuario.textContent = tipoUsuario === "clinica" ? "Nome da Clínica" : "Nome do Paciente";
      }
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

//*============= Definicao de Classes e Objetos =============

class Medico {
  constructor(id, nome, crm, telefone, email, especialidade) {
    this.id = id;
    this.nome = nome;
    this.crm = crm;
    this.telefone = telefone;
    this.email = email;
    this.especialidade = especialidade;
  }
}

//======================== BANCO DE DADOS FICTICÍO ========================

function gerarMedicosDefalt(quantidade) {
  let medicos = [];

  const nomes = [
    "Maria",
    "João",
    "Ana",
    "Pedro",
    "Fernanda",
    "Ricardo",
    "Juliana",
    "Carlos",
    "Paula",
    "Luciana",
    "Eduardo",
    "Beatriz",
    "Rafael",
    "Camila",
    "Bruno",
    "Tatiana",
    "Rodrigo",
    "Isabela",
    "Daniel",
    "Gabriela",
    "Fábio",
    "Larissa",
    "Marcelo",
    "Patrícia",
    "Guilherme",
    "Monique",
    "Roberta",
    "Renato",
    "Nathalia",
    "Felipe",
    "Cláudia",
    "Mariana",
    "Leandro",
    "Sabrina",
    "Alexandre",
    "Raquel",
    "Leonardo",
    "Simone",
    "Gustavo",
    "Alice",
    "Thiago",
    "Débora",
    "Igor",
    "Larissa",
    "Sandra",
    "André",
    "Helena",
    "Miguel",
    "Luana",
    "Robson",
  ];

  const sobrenomes = [
    "Silva",
    "Souza",
    "Carvalho",
    "Lima",
    "Costa",
    "Almeida",
    "Rocha",
    "Pereira",
    "Santana",
    "Gomes",
    "Moura",
    "Ferreira",
    "Oliveira",
    "Barbosa",
    "Machado",
    "Martins",
    "Ribeiro",
    "Andrade",
    "Monteiro",
    "Vieira",
    "Campos",
    "Araújo",
    "Teixeira",
    "Batista",
    "Melo",
    "Moreira",
    "Dias",
    "Nunes",
    "Cavalcante",
    "Ramos",
    "Neves",
    "Fonseca",
    "Alves",
    "Correia",
    "Medeiros",
    "Nascimento",
    "Morais",
    "Lopes",
    "Figueiredo",
    "Cardoso",
    "Assis",
    "Freitas",
    "Torres",
    "Aguiar",
    "Pinto",
    "Ferraz",
    "Barros",
    "Brito",
    "Macedo",
    "Queiroz",
  ];

  const especialidades = [
    "Cardiologia",
    "Ortopedia",
    "Dermatologia",
    "Ginecologia",
    "Neurologia",
    "Pediatria",
    "Oftalmologia",
    "Psiquiatria",
    "Endocrinologia",
    "Gastroenterologia",
    "Urologia",
    "Oncologia",
    "Nefrologia",
    "Pneumologia",
    "Hematologia",
    "Reumatologia",
    "Infectologia",
    "Hepatologia",
    "Imunologia",
    "Radiologia",
    "Angiologia",
    "Otorrinolaringologia",
    "Geriatria",
    "Anestesiologia",
    "Emergencista",
    "Cirurgia Geral",
    "Cirurgia Plástica",
    "Medicina do Esporte",
    "Medicina Intensiva",
    "Alergologia",
  ];

  function gerarTelefone() {
    const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
    const numero = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    return `${ddd} 9${numero}`;
  }

  function gerarCRM() {
    const numeroCRM = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const uf = ["SP", "MG", "RJ", "BA", "RS", "PR", "PE", "SC", "GO", "ES"];
    return `${numeroCRM}/${uf[Math.floor(Math.random() * uf.length)]}`;
  }

  function gerarEmail(nome, sobrenome) {
    const dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
    return `${nome.toLowerCase()}${sobrenome.toLowerCase()}@${dominios[Math.floor(Math.random() * dominios.length)]}`;
  }

  for (let i = 0; i < quantidade; i++) {
    const nomeMedico = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenomeMedico = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    const nomeCompleto = `${nomeMedico} ${sobrenomeMedico}`;
    const especialidade = especialidades[Math.floor(Math.random() * especialidades.length)];
    const email = gerarEmail(nomeMedico, sobrenomeMedico);

    medicos.push(new Medico(++countIdMedicos, nomeCompleto, gerarCRM(), gerarTelefone(), email, especialidade));
  }

  return medicos;
}

function filtrarMedicoPorEspecialidade() {
  // Obtenha o valor selecionado no filtro
  const especialidadeSelecionada = document.getElementById("especialidadeFiltro").value;

  // Filtra os médicos pela especialidade selecionada
  const medicosFiltrados = especialidadeSelecionada ? medicos.filter((medico) => medico.especialidade === especialidadeSelecionada) : medicos; // Se nenhuma especialidade estiver selecionada, mostra todos os médicos

  // Atualiza a lista de médicos exibida com o resultado da filtragem
  const listaMedicosContainer = document.getElementById("lista-medicos");
  listaMedicosContainer.innerHTML = ""; // Limpa a lista atual

  // Renderiza os cartões dos médicos filtrados
  for (let medico of medicosFiltrados) {
    listaMedicosContainer.innerHTML += getUmCardMedicoPreenchido(medico);
  }

  // Caso não encontre nenhum médico, mostra uma mensagem
  if (medicosFiltrados.length === 0) {
    listaMedicosContainer.innerHTML = "<p>Nenhum médico encontrado.</p>";
  }
}

//*======================== Manipulacao Lista de Médicos ========================
function getUmCardMedicoPreenchido(medicos) {
  let response = templateCardMedicos.replace(/\${(.*?)}/g, (string, atr) => medicos[atr] || "");
  return response;
}

function getCardsMedicos() {
  let conteudoMedicos = "";
  for (let medico of medicos) {
    conteudoMedicos += getUmCardMedicoPreenchido(medico);
  }
  return conteudoMedicos;
}

//======================== Interação com Usuário ========================
function cadastrarMedico() {
  let id = document.getElementById("id-cadastro-medico").innerHTML;
  let nome = document.getElementById("nome-medico").value;
  let crm = document.getElementById("crm-medico").value;
  let telefone = document.getElementById("telefone-medico").value;
  let email = document.getElementById("email-medico").value;
  let especialidade = document.getElementById("especialidade-medico").value;

  if (id === "-1") {
    let novomedico = new Medico(++countIdMedicos, nome, crm, telefone, email, especialidade);
    medicos.push(novomedico);
  } else {
    let indice = -1;
    for (let i = 0; i < medicos.length; i++) {
      if (medicos[i].id == id) {
        indice = i;
        break;
      }
    }
    if (indice !== -1) {
      medicos[indice].nome = nome;
      medicos[indice].crm = crm;
      medicos[indice].telefone = telefone;
      medicos[indice].email = email;
      medicos[indice].especialidade = especialidade;
    }
  }
  paginaListaMedicos();
}

function buscarMedicoPorNome(nome) {
  const nomeBusca = nome.toLowerCase();

  const medicosFiltrados = medicos.filter((medico) => medico.nome.toLowerCase().includes(nomeBusca));

  const listaMedicosContainer = document.getElementById("lista-medicos");
  listaMedicosContainer.innerHTML = "";

  for (let medico of medicosFiltrados) {
    listaMedicosContainer.innerHTML += getUmCardMedicoPreenchido(medico);
  }

  if (medicosFiltrados.length === 0) {
    listaMedicosContainer.innerHTML = "<p>Nenhum médico encontrado.</p>";
  }
}

function editarMedico(id) {
  let pos = 0;
  for (let medico in medicos) {
    if (medicos[medico].id == id) {
      pos = medico;
      break;
    }
  }
  let m = medicos[pos];
  const content = document.getElementById("content");
  fetch("/assets/html/editarInfoMedicos.html")
    .then((response) => response.text())
    .then((dados) => {
      content.innerHTML = dados;
      paginasClinica();
      document.getElementById("titulo-pag").innerText = "Gerenciar Perfil do Médico";
      document.getElementById("id-cadastro-medico").innerText = m.id;
      document.getElementById("nome-medico").value = m.nome;
      document.getElementById("crm-medico").value = m.crm;
      document.getElementById("telefone-medico").value = m.telefone;
      document.getElementById("email-medico").value = m.email;
      document.getElementById("especialidade-medico").value = m.especialidade;
      document.getElementById("cancelar").setAttribute("onclick", "apagarMedico()");
      document.getElementById("cancelar").innerText = "Desvincular Médico à Clínica";
      document.getElementById("confirmar").innerText = "Confirmar Modificações";
    })
    .catch((err) => {
      console.log("Ocorreu um erro ao carregar a página: " + err);
    });
}

function apagarMedico() {
  let id = document.getElementById("id-cadastro-medico").innerText;

  let pos = medicos.findIndex((medico) => medico.id === Number(id));

  if (pos !== -1) {
    medicos.splice(pos, 1);
    paginaListaMedicos();
  } else {
    console.log("Médico não encontrado.");
  }
}

//* ============= Mostrar Senhas =============
function visualizarSenhas(idInput1, idInput2) {
  const senha = document.getElementById(idInput1);
  const confirmacaoSenha = document.getElementById(idInput2);
  if (senha.type === "password") {
    senha.type = "text";
    confirmacaoSenha.type = "text";
  } else {
    senha.type = "password";
    confirmacaoSenha.type = "password";
  }
}

//* ============= Inicialização da Página =============
//componente default
paginaInicial();

//contagem Id medicos
var countIdMedicos = 0;

//obtendo dados medicos
var medicos = gerarMedicosDefalt(100);

//criando o template do card dos medicos
var templateCardMedicos;
getMedicoTemplate();
