function Calcular(){
    //receber valor 1
    var valor1 = document.getElementById('numero1').value
    //receber valor 2 
    var valor2 = document.getElementById('numero2').value
    //calcular valor
    //soma
    var Soma = Number(valor1) + Number(valor2)
    //subtração
    var Sub = Number(valor1) - Number(valor2)
    //multiplicação
    var Mult = Number(valor1) * Number(valor2)
    //divisão
    var Divs = Number(valor1) / Number(valor2)
    //exponencial
    var Elev = Number(valor1) ** Number(valor2)
    //sobra
    var Sobra = Number(valor1) % Number(valor2)
    //pronto

    document.getElementById('resultado').innerHTML = `${valor1} + ${valor2} = ${Soma}
    <br> ${valor1} - ${valor2} = ${Sub} <br> ${valor1} * ${valor2} = ${Mult} <br>
    ${valor1} / ${valor2} = ${Divs} <br> ${valor1} ** ${valor2} = ${Elev} <br>
    ${valor1} % ${valor2} = ${Sobra}`
}

function Limpar(){
    document.getElementById('resultado').innerHTML = ""
}