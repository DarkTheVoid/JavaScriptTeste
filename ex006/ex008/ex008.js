function FecharMedia(){
    var NomeAluno = document.getElementById('NomeAluno').value
    var Nota1 = Number(document.getElementById('Nota1').value)
    var Nota2 = Number(document.getElementById('Nota2').value)

if (Number(Nota1) > 10){
    alert('Nota 1 não pode ser maior que 10')
    exit
}
if (Number(Nota2) > 10){
    alert('Nota 1 não pode ser maior que 10')
    exit
}





    var Media = (Nota1 + Nota2) / 2
   


    //não precisa de uma var pro 7, pode ser direto
if( Media >= 7){ //é dentro do function!!
   document.getElementById('Resultado').innerHTML = 
    `O Aluno(a) ${NomeAluno} 
    tirou ${Nota1} e ${Nota2}, sua média foi
     de ${Media} <br> PASSOU DE ANO` 
}
else{
    document.getElementById('Resultado').innerHTML = 
    `O Aluno(a) ${NomeAluno} 
    tirou ${Nota1} e ${Nota2}, sua média foi
     de ${Media} <br> NÃO PASSOU DE ANO`
}

}

