

function w3_open() {
  document.getElementById("conteudo").style.marginLeft = "170px";
  document.getElementById("meuaside").style.width = "170px";
  document.getElementById("meuaside").style.display = "block";
  document.getElementById("abrirnav").style.display = 'none';
}

function w3_close() {
  document.getElementById("conteudo").style.marginLeft = "0%";
  document.getElementById("meuaside").style.display = "none";
  document.getElementById("abrirnav").style.display = "inline-block";
}

function logar() {
  var emaillogin = document.getElementById("emaillogin").value;
  var senhalogin = String(document.getElementById("senhalogin").value);

  if (emaillogin == "" || senhalogin == "") {
    alert("Existem campos vazios");
    return false;
  }

  let dados = localStorage.getItem(76);
  var users = JSON.parse(dados);
  var nome1 = users.nome_;

  for (var l = 0; l < 101; l++) {
    var KEY = localStorage.key(l);
    var DATA = localStorage.getItem(KEY);

    let dados = localStorage.getItem(l);
    var users = JSON.parse(dados);
    var nome1 = users.nome_;
    var senha1 = String(localStorage.getItem(l).split(',')[1]);
    var cpf1 = String(localStorage.getItem(l).split(',')[2]);

    if (users.senha_ == senhalogin && users.email_ == emaillogin) {
      localStorage.setItem('logado', nome1);
      window.location.href = "index.html"
      return true;
    }

  }

  if ("erick" == senhalogin && "erick@gmail.com" == emaillogin) {
    localStorage.setItem('logado', erick);
    alert("Login feito com sucesso");
    window.location.href = "index.html"
    return true;
  }


  alert("Usuário ou senha incorretos!");
  return false;
}

function deslogar() {
  localStorage.removeItem('logado');
  window.location.href = "home.html"
}

var chances = 3;

function verificarprova() {
  var nota = 0;
  if (document.getElementById("q1c").checked) { nota++; }
  if (document.getElementById("q2d").checked) { nota++; }
  if (document.getElementById("q3c").checked) { nota++; }
  if (document.getElementById("q4a").checked) { nota++; }
  if (document.getElementById("q5a").checked) { nota++; }
  if (document.getElementById("q6b").checked) { nota++; }
  if (document.getElementById("q7a").checked) { nota++; }
  if (document.getElementById("q8a").checked) { nota++; }
  if (document.getElementById("q9a").checked) { nota++; }
  if (document.getElementById("q10a").checked) { nota++; }
  if (document.getElementById("q12d").checked) { nota++; }
  if (document.getElementById("q11d").checked) { nota++; }
  if (nota >= 8) {
    if (chances > 0) {
      certificado();
      alert("Parabens você teve um aproveitamento superior a 70% e passou na prova!")
    }
  } else {
    chances = chances - 1;
    if (chances <= 0) {
      alert("Suas chances acabaram! Revise a materia e tente novamente.")
    }
  }
}




function certificado() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const nameInput = localStorage.getItem("logado")

  const image = new Image()
  image.src = 'img/certificado.jpg'
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  ctx.font = '35px monotype corsiva'
  ctx.fillStyle = '#000'
  ctx.fillText("erick", 40, 180)
  var anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/png");
  anchor.download = "Certificado.png";
  anchor.click();
}

function entrar() {

  var _login = {}

  document.querySelectorAll(`form[name='login'] input`).forEach((input) => {
    if (input.type != 'submit') {
      if (input.type == 'radio' && input.checked) {
        _login[input.name] = input.value;

      } else if (input.type != 'radio') {
        _login[input.name] = input.value;
      }
    }

    // alert(input.name);
  })


  for (let position = 0; position < localStorage.length; position++) {

    var KEY = localStorage.key(position);
    
    if(KEY != 'logado'){
      var DATA = JSON.parse(localStorage.getItem(KEY));

    var KEY = localStorage.key(position)
    var DATA = JSON.parse(localStorage.getItem(KEY));

    if (_login.mail == DATA.email_ && _login.senha == DATA.senha_) {


      localStorage.setItem('logado', "Erick");
      window.location.href = "index.html";

      return true;

    }  
    }
    
  }


  return false;

  /*emaillogin = document.getElementById("username").value;
  senhalogin = String(document.getElementById("password").value);

  if(localStorage.getItem(emaillogin)){
      var nome_ = String(localStorage.getItem(emaillogin).split('.')[0]);
      var senha_ = String(localStorage.getItem(emaillogin).split('.')[1]);
      var cpf_ = String(localStorage.getItem(emaillogin).split('.')[2]);
   
     
     
  }


  if (emaillogin == "" || senhalogin == ""){
      alert("Existem Campos Vazios ");
      return false;
  }


  if(localStorage.getItem(emaillogin)){
      if(senha_ == senhalogin){
          email = emaillogin_;
          nome = nome_;
          senha = senha_;
          localStorage.setItem('logado', nome+","+email+","+senha);
          window.locale.href = "cursos.html"
          return true;
      }
  }

  alert("Usuário ou Senha Incorretos!");
  return false;
  */


}