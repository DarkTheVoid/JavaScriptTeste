var filmes = []
var filmagens = []
var i = 0

function CadastrarFilme(){
   
   filmes.push(document.getElementById('NOMEfilme').value)
   filmagens.push(document.getElementById('ImagemFilme').value)
   document.getElementById('resultado').innerHTML += ``

for(var i = 0; i < filmes.length; i++)
{
    document.getElementById('resultado').innerHTML += 
    `${filmes[i]} <br>  <img src="${filmagens[i]}">`
}
}

