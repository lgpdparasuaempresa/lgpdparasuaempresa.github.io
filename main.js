 function EnviarInformacoes() {
    document.querySelector("#EnviarClick").addEventListener('EnviarInformacoes')
        const NomeDoUsuario =  document.getElementById('#nome').value;
        const SuaEmpresa = document.getElementById("#suaempresa").value;
        const EmailDoUsuario =  document.getElementById('#email').value;
        const NumeroDoUsuario = document.getElementById('#numero').value;
        const SobreProjeto = document.getElementById('#projeto').value;

        document.getElementById("BOTAO01").style.display = window.location.href =
         window.location.href = "https://wa.me/558587261031?text=" 
         + "Nome : "+NomeDoUsuario+"%0a"
         + "Sua empresa : "+SuaEmpresa+"%0a"
         + "Email : "+EmailDoUsuario+"%0a"
         + "Número : "+NumeroDoUsuario+"%0a"
         + "Investimento : "+investimento+"%0a"
         + "Projeto : "+SobreProjeto+"%0a"
         
    
   
}
