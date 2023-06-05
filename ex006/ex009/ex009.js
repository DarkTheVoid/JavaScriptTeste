function Verificar(){
    var nome = document.getElementById('Nome').value
    var idade = Number(document.getElementById('Idade').value)
    

    if(idade > 18){
        document.getElementById('Conclusao').innerHTML = 
        `Parabéns! ${nome} já pode tirar CNH <br> <img class="imagem" src="https://conteudo.imguol.com.br/2013/03/20/montagem-do-tumblr-thumbs--ammo-mostra-o-personagem-terminator-arnold-schwarzenegger-dando-joinha-em-vez-de-apontar-uma-arma-em-cena-do-filme-o-exterminador-do-futuro-1363809846474_300x300.jpg.webp" alt="">`
    }
    else{
        document.getElementById('Conclusao').innerHTML = 
        `Lamento, ${nome} ainda não pode tirar CNH` 
    }
    
}   
