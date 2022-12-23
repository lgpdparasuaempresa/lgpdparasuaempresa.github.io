
        const btn = document.getElementById("BOTAO01");
        btn.addEventListener('click', function() {
       
        const NomeDoUsuario =  document.getElementById("nome1").value;
        const SuaEmpresa = document.getElementById("suaempresa1").value;
        const EmailDoUsuario =  document.getElementById("email1").value;
        const NumeroDoUsuario = document.getElementById("telefone1").value;
        const SobreProjeto = document.getElementById("projeto1").value;

         btn.style.display = window.location.href =
         window.location.href = "https://wa.me/558587222151?text=" 
         + "Nome : "+NomeDoUsuario+"%0a"
         + "Sua empresa : "+SuaEmpresa+"%0a"
         + "Email : "+EmailDoUsuario+"%0a"
         + "Número : "+NumeroDoUsuario+"%0a"
         + "Projeto : "+SobreProjeto+"%0a"   
   });
   const agree = document.getElementById("agree1");
   agree.addEventListener('change', function() {
    const BOTAO01 = document.getElementById("BOTAO01");
    if(agree.checked) {
        BOTAO01.removeAttribute("disabled");
    } else {
        BOTAO01.setAttribute("disabled","disabled");
    }
   });
       



  
