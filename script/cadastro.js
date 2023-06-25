function cadastro()   {
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const senha = document.getElementById("senha").value;
    const gender = document.getElementById("gender");
    const senha_segundavia = document.getElementById("senha_segundavia");
    const chave = document.getElementById("chave");
    if(idade.value >= 12){
        if(senha === senha_segundavia.value){
            if(senha.length > 7){
                localStorage.setItem("user", nome);
                localStorage.setItem("senha", senha);
                localStorage.setItem("gender", gender);
                localStorage.setItem("chave", chave);
                window.alert("Cadastrado com sucesso!");
                window.location.assign("user.html");
            }else{
                window.alert("A senha deve ter 8 caracteres!");
            }
        }else{
            window.alert("As duas senhas não batem! Reveja a confirmação.");
        }
    }else{
        window.alert("Você é menor de 13 anos, não pode se cadastrar em WordBook!");
    }

}
function info_chave()  {
    window.alert("Coloque uma chave que você se lembre, ela será utilizada em caso de recuperação de senha!");
}