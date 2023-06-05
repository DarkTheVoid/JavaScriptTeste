function BotaoAdd(){

    document.getElementById("resultado").innerHTML = ""

    var num = Number(document.getElementById("num").value)
     for( var coracion = 1; coracion <= num; coracion++){
        document.getElementById("resultado").innerHTML +=
        `<img class="coracao" src="https://imagepng.org/wp-content/uploads/2017/10/coracao.png" alt="">`
     }
}