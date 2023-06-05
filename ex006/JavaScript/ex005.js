
function BotaoCalcular(){
    //entrada de dados
    var numero = document.getElementById('nr').value
    //processamento
    var dobro = numero * 2
    var metade = numero / 2
    //saída

    document.getElementById('resultado').innerHTML += 
     `O dobro de ${numero} é igual a ${dobro} e a metade é igual a ${metade} <br>`
}
function BotaoLimpar(){
    document.getElementById('resultado').innerHTML = ""
}
