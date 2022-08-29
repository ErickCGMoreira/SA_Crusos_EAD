if(localStorage.getItem("logado")){
  document.getElementById("perfil").style.display = "block";
  document.getElementById("nomeuser").innerHTML = localStorage.getItem("logado");
} else {
  document.getElementById("perfil").style.display = "none";
}

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

function logar(){
  var emaillogin = document.getElementById("emaillogin").value;
  var senhalogin = String(document.getElementById("senhalogin").value);
  alert(emaillogin);
  alert(senhalogin);

  if (emaillogin == "" || senhalogin == ""){
      alert("Existem campos vazios");
      return false;
  }

  let dados = localStorage.getItem(37);
  var users = JSON.parse(dados); 
  var nome1 = users.nome_;
  alert(nome1);

  for(var l = 0; l < 101; l++){
    var KEY = localStorage.key(l);
    var DATA = localStorage.getItem(KEY);
    
      let dados = localStorage.getItem(id);
      var users = JSON.parse(dados); 
      var nome1 = users.nome_;
      var senha1 = String(localStorage.getItem(l).split(',')[1]);
      var cpf1 = String(localStorage.getItem(l).split(',')[2]);

      if(DATA.senha_ == senhalogin && DATA.email_ == emaillogin){
          localStorage.setItem('logado', nome1);
          window.location.href = "index.html"
          return true;
      }
    
  }
  
  alert("Usuário ou senha incorretos!");
  return false;
} 

function deslogar(){
  localStorage.removeItem('logado');
  window.location.href = "home.html"
}

var chances = 3;

function verificarprova(){
  if(document.getElementById("q1c").checked && document.getElementById("q2d").checked && document.getElementById("q3c").checked && document.getElementById("q4a").checked && document.getElementById("q5a").checked && document.getElementById("q6b").checked && document.getElementById("q7a").checked && document.getElementById("q8a").checked && document.getElementById("q9a").checked && document.getElementById("q10a").checked && document.getElementById("q11d").checked && document.getElementById("q12d").checked){
    if(chances > 0){
      certificado();
      alert("Parabens você teve um aproveitamento superior a 70% e passou na prova!")
    }
  } else{
    chances = chances - 1;
    if(chances <= 0){
      alert("Suas chances acabaram! Revise a materia e tente novamente.")
    }
  }
}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = localStorage.getItem("logado")

const image = new Image()
image.src = 'img/certificado.jpg'


function certificado() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '35px monotype corsiva'
	ctx.fillStyle = '#000'
	ctx.fillText(localStorage.getItem("logado"), 40, 180)
  var anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/png");
  anchor.download = "Certificado.png";
  anchor.click();
}