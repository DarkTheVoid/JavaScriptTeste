function calcular(){
    var NomeAluno = document.getElementById('NomeAluno').value
    var Nota1 = document.getElementById('Nota1').value
    var Nota2 = document.getElementById('Nota2').value
}

var possoCalular = validarNotas(Nota1, Nota2)

function validarNotas(Nota1, Nota2){
    if (Number(Nota1) > 10){
        alert('Nota 1 não pode ser maior que 10')
        return false
    }
    if (Number(Nota2) > 10){
        alert('Nota 1 não pode ser maior que 10')
        return false
    }
}




function calcularMedia(Nota1, Nota2){
    var media = (Number(Nota1)+ Number(Nota2)) / 2
    return media
}


