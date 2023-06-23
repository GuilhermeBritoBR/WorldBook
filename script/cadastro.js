function cadastro()   {
    let nome = document.getElementById("nome");
    let idade = document.getElementById("idade");
    let senha = document.getElementById("senha");
    let gender = document.getElementById("gender");
    let senha_segundavia = document.getElementById("senha_segundavia");
    if(idade.value >= 12){
        if(senha.value == senha_segundavia.value){
            if(senha.length == 8){
                window.location.assign("user.html");
                window.alert("Cadastrado com sucesso!");
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