function Cadastro() {

  var key = Math.floor(Math.random() * 100); /* colocar números aleatórios de 0 a 100 */
  var nome = document.getElementById("usuario").value;
  var cpf = document.getElementById("cpf").value;
  var email = document.getElementById("mail").value;
  var senha = document.getElementById("senha").value;
  var conf_senha = document.getElementById("conf_senha").value;
  var data_nasc = document.getElementById("data_nasc").value;
  var telefone = document.getElementById("fone").value;
  var sexo = document.querySelector("input[type=radio]:checked").value;

  if (conf_senha == true) {
    alert("senha errada");
    return false;
  }

  var usuario = {
    nome_: nome,
    cpf_:cpf,
    email_: email,
    senha_: senha,
    data_nasc_: data_nasc,
    telefone_: telefone,
    sexo_: sexo
  };

  // armazenar (local storage) no navegador
  localStorage.setItem(key, JSON.stringify(usuario));

  window.location.href = 'login.html';

  return false;

}


function Login() {

  var iLOGIN = {}

  document.querySelectorAll("form[name='login'] input").forEach((input) => {
    iLOGIN[input.id] = input.value;
  })

  for (let pos = 0; pos < localStorage.length; pos++) {

    var KEY = localStorage.key(pos);
    var DATA = localStorage.getItem(KEY);


    if (DATA.email_ == iLOGIN.mail && DATA.senha == iLOGIN.senha) {
      return true;
    }
  }
  return false;
}

function listar() {

  var registros = document.getElementById("show");  //chamar na div show
  registros.innerHTML = '<table style="border: 1px solid #000">';


  // alert("Usuários:" + JSON.parse(usuario))
  for (let i = 0; i < localStorage.length; i++) {

    let id = localStorage.key(i); //buscar a key referente aos  dados 
    let dados = localStorage.getItem(id); // armazena os dados da key 
    var users = JSON.parse(dados); //receber e mostra os dados 

    registros.innerHTML += '<table style="border: 1px solid #000; width:450px;">' + //o + atrás do "="faz com que os nomes fiquem e não troque como loop
      '<tr>' +
      '<td>' + id + '</td>' +
      '<td>' + users.nome + '</td>' +
      '<td>' + users.cpf + '</td>' +
      '<td>' + users.email + '</td>' +
      '<td>' + users.senha + '</td>' +
      '<td>' + users.data_nasc + '</td>' +
      '<td>' + users.telefone + '</td>' +
      '<td>' + users.sexo + '</td>' +
      '<td> <button onclick="return excluir(\'' + id + '\')"> EXCLUIR </button> </td>'
    '</tr>' +
      '</table>';
  }
}

function excluir(del) {
  var ok = confirm("Tem certeza que deseja excluir este registro?");
  if (ok) {
    localStorage.removeItem(del);
    listar();
  } else {
    return false;
  }
}