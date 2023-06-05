
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Buscando as informações                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

var ListaFilmes = []
ListaFilmes = JSON.parse(localStorage.getItem('bdFilmes')) 
//para puxar o que foi guardado no LocalStorage

if(ListaFilmes == null){
    ListaFilmes = []
}
exibirFilmesVetor()

function CadastrarFilme() {
    var filmes = document.getElementById('NOMEfilme').value
    var imagens = document.getElementById('ImagemFilme').value

    var ObjFilme = {
        nome: filmes,
        link: imagens
    }
    ListaFilmes.push(ObjFilme)
    //utilizando o localstorage que irá gravar o nosso vetor de 
    //filmes no método setItem, preciso passar como parâmetro o 
    //nome do espaço que o navegador irá reservar e passo também 
    //o vetor de filmes convertido em formato JSON
    localStorage.setItem('bdFilmes', JSON.stringify(ListaFilmes))

    document.getElementById('resultado').innerHTML = ''

    for (var i in ListaFilmes) {
        document.getElementById('resultado').innerHTML +=
        `<div> 
            <img src=" ${ListaFilmes[i].link} " class='img'>
            <p> ${ListaFilmes[i].nome}  </p>
        </d>
        `
    }
}

function botaoIndicar(){
    var nrSorteado = parseInt(Math.random() * ListaFilmes)
    document.getElementById('').innerHTML = 
    `<div> 
    <img src=" ${ListaFilmes[nrSorteado].link} " class='img'>
    <p> ${ListaFilmes[nrSorteado].nome}  </p>
</d>
    `
}

function exibirFilmesVetor(){
    document.getElementById('resultado').innerHTML = ``
    
    for (var i in ListaFilmes){
        document.getElementById('resultado').innerHTML = 
        `<div> 
        <img src=" ${ListaFilmes[i].link} " class='img'>
        <p> ${ListaFilmes[i].nome}  </p>
    </d>
        `
    }
}

function limpar(){
    ListaFilmes = []
    localStorage.setItem('bdFilmes',JSON.stringify(ListaFilmes))
    exibirFilmesVetor()
    //Para guardar as informações que foram colocadas no site
}