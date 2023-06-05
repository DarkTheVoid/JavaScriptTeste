var Perfil = []
Perfil = JSON.parse(localStorage.getItem('BDcadastros'))

if (Perfil == null) {
    Perfil = []
}


ExibirCadastros()

function BotaoCadastrar() {
    var Nome = document.getElementById('Nome').value
    var Usuario = document.getElementById('Usuario').value
    var Senha = document.getElementById('Senha').value
    var Senha2 = document.getElementById('SenhaConfirmar').value


    if (Nome == "" || Usuario == "" || Senha == "" || Senha2 == "") {
        alert('Preencha todos os campos')
        exit
    }
    if (Senha != Senha2) {
        alert('Senha incorreta')
        exit
    }


    var objetUsuario = {
        nome: Nome,
        usuario: Usuario,
        senha: Senha
    }

    Perfil.push(objetUsuario)
    localStorage.setItem('BDcadastros', JSON.stringify(Perfil))

    ExibirCadastros()
}




function ExibirCadastros() {
    document.getElementById('UsuariosCadastrados').innerHTML = ''

    Perfil.forEach((item, pos) => {
        document.getElementById('UsuariosCadastrados').innerHTML +=
            `<b>Nome:</b> ${item.nome} 
            <b>Usuário:</b> ${item.usuario} <br>
            <img src='' onclick= 'excluirusuario(${pos})'`

    })

}



function BotaoLogin() {
    var Usuario = document.getElementById('Usuario').value
    var Senha = document.getElementById('Senha').value
    var encontrado = false

    Perfil.forEach(item => {
        if (Usuario == item.usuario && Senha == item.senha) {
            document.getElementById("resultadoooo").innerHTML =
                `<b> Parabéns! Você acessou o sistema </b>`
            encontrado = true
            exit
        }
    })
    alert("Usuário ou senha inválidos")
}


function excluirusuario(pos) {
    if (confirm('Deseja realmente excluir este usuário?')) {
        Perfil.splice(pos, 1)
        localStorage.setItem('BDcadastros', JSON.stringify(Perfil))
        ExibirCadastros()
    }

}