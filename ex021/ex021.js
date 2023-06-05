var filmes = []
function BotaoCadastrar(){
    var nome = document.getElementById('nomes').value
    filmes.push(nome)
    document.getElementById('resultado').innerHTML = ``

    for (var i = 0; i < filmes.length ; i++){
        document.getElementById('resultado').innerHTML += `${filmes[i]} <br>`
    }
}