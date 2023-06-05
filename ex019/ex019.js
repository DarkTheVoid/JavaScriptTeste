var vidas = 5 

function BotaoAdd(){
   vidas++
    document.getElementById("resultado").innerHTML = ""

   for(var i = 1; i<= vidas; i++){
      document.getElementById('resultado').innerHTML += `<img class="coracao" src="https://imagepng.org/wp-content/uploads/2017/10/coracao.png" alt="">`
   }
}

function BotaoMen(){
   vidas--
   document.getElementById("resultado").innerHTML = ""

  for(var i = 1; i<= vidas; i++){
     document.getElementById('resultado').innerHTML += `<img class="coracao" src="https://imagepng.org/wp-content/uploads/2017/10/coracao.png" alt="">`
}
}