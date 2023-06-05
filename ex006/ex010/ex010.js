function loga(){
    var Email = document.getElementById('usuario').value
    var Senha = document.getElementById('senha').value

    if(Email == "adm" && Senha == "123"){
         document.getElementById('result').innerHTML = 
        `Bem vindo ${Email}, você logou corretamente`
    }
    else{
        document.getElementById('result').innerHTML = `Usuário e Senhas incorretas`
    }
}

// && tudo precisa ser "verdadeiro
// || precisa de apenas uma verdadeira