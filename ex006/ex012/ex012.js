var numero = parseInt(Math.random() * 100)
var tentativas = 0

var resultado = document.getElementById("resultado")

function ChutarNum(){
    var NumChu = Number(prompt('Tente adivinhar meu núúmero :P'))

    tentativas++

    if(NumChu == numero){
        resultado.innerHTML += `<br>Parabéns! você acerto em ${tentativas} tentativas`
    } else if (NumChu > numero){
        resultado.innerHTML += `<br>HMmmm, meu número é MENOR que ${NumChu}`
    } else if (NumChu < numero){
        resultado.innerHTML += `<br>HMmmm, meu número é MAIOR que ${NumChu}`
    }
    
}

function NovoJogo(){
    tentativas = 0
    numero = Number(parseInt(Math.random() * 100) + 1) 
    document.getElementById('resultado').innerHTML = ``

}