function cadastro()   {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade");
    const senha = document.getElementById("senha").value;
    const gender = document.getElementById("gender");
    const senha_segundavia = document.getElementById("senha_segundavia");
    const chave = document.getElementById("chave").value;
    if(nome.length > 1){
    if(idade.value >= 12){
        if(senha === senha_segundavia.value){
            if(senha.length > 7){
                localStorage.setItem("user", nome);
                localStorage.setItem("senha", senha);
                localStorage.setItem("gender", gender);
                localStorage.setItem("chave", chave);
                window.alert("Cadastro efetuado! Realize o login!");
            }else{
                window.alert("A senha deve ter 8 caracteres!");
            }
        }else{
            window.alert("As duas senhas não batem! Reveja a confirmação.");
        }
    }else{
        window.alert("Você é menor de 13 anos, não pode se cadastrar em WordBook!");
    }

    }else{
        window.alert("Preencha os dados!");
    }}
function info_chave()  {
    window.alert("Coloque uma chave que você se lembre, ela será utilizada em caso de recuperação de senha!");
}
function login()  {
    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;
    const true_user = localStorage.getItem("user");
    const true_senha = localStorage.getItem("senha");
    if(user === true_user)
    if(senha === true_senha){
        window.location.href = "pages_priv/index.html";
    }
    else{
        window.alert("Senha ou usuário errados!");
    }else{
        window.alert("Senha ou usuário errados!");
    }
}
function recuperar()   {
    const user = document.getElementById("user").value;
    const chave = document.getElementById("chave").value;
    const true_user = localStorage.getItem("user");
    const true_chave = localStorage.getItem("chave");
    const senha = localStorage.getItem("senha");
    if(user === true_user)
    if(chave === true_chave){
        window.alert("Sua senha é: " + senha );
    }else{
        window.alert("Chave ou usuário incorreto!");
    }else{
        window.alert("Chave ou usuário incorreto!");
    }
}
function acesso()  {
    window.location.href = "register.html";
}
function acesso_telalogin()   {
    window.location.href= "login.html";
}
function user_public()   {
    let valor = window.confirm("Você não poderá utilizar de alguns recursos! Deseja acessar sem conta?");
    if(valor === true)  {
        window.location.href = "user_public.html";
    }
    else{
        window,alert("Faça o cadastro ou login e tenha acesso a recursos exclusivos!");
        window.location.href= "register.html";
    }
}