const btnn = document.getElementById("BOTAO2");
btnn.addEventListener('click', function() {

const NameUser =  document.getElementById("nomedousuario").value;
const Empresa = document.getElementById("suaempresaaqui").value;
const EmailUsuario =  document.getElementById("emaildouser").value;
const NumeroUsuario = document.getElementById("telefonedouser").value;
const SobreProject = document.getElementById("projetodouser").value;

 btnn.style.display = window.location.href =
 window.location.href = "https://wa.me/558587261031?text=" 
 + "Nome : "+NameUser+"%0a"
 + "Sua empresa : "+Empresa+"%0a"
 + "Email : "+EmailUsuario+"%0a"
 + "Número : "+NumeroUsuario+"%0a"
 + "Projeto : "+SobreProject+"%0a"   
});
const agreee = document.getElementById("agree");
agreee.addEventListener('change', function() {
const BOTAO2 = document.getElementById("BOTAO2");
if(agreee.checked) {
BOTAO2.removeAttribute("disabled");
} else {
BOTAO2.setAttribute("disabled","disabled");
}
});