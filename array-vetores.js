//Declarando um array vazio

var meuVetor = []

//Craindo vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcus', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor

console.log(nomes[1])
console.log(novoVetor[2])

//Verificando
console.log(nomes.length)

//Indice
var frutas = ['Maçã', 'Laranja', 'Pera', 'Morango', 'Uva']
for(var i=0; i < frutas.lenght; i++){
    console.log(futas [i])   
}


//Adicionando novo valor no FINAL do vetor
frutas.push('Abacaxi')
console.log(frutas.length)
console.log(frutas)

var NovaListaFrutas = [] //[]
NovaListaFrutas.push('limão')
console.log (NovaListaFrutas) //['limão']
NovaListaFrutas.push('Melância')
console.log(NovaListaFrutas) //['limão', Melância]

NovaListaFrutas[0] = 'Melão' //substituindo o conteúdo da posição 0
" "
for (var indice in NovaListaFrutas){
    console.log(NovaListaFrutas[indice])
}

//Método forEach de um vetor percorre e retorna todos os elementos do vetor
NovaListaFrutas.forEach( fruta =>)

// Var vetor = [] basicamente uma variável com vários espaços
//que cabem mis informações

//as posições se iniciam do 0 (zero)
//"i" é só um  nome simbólico para as posições 
//i < vetor.length >> é o tamanho do vetor, significa que 
//a função irá agir até a quantidade que adicionarmos a ela

// i++ para acrescentar

// for { i = 0, i < vetor.lenght, i++}

// for {var i in vetor} >> serve para substituir toda a função a 
//cima, e a com o mesmo propósito

frutas.forEach( item => {
    console.log(item)
} )

//O método forEach - significa para cada item do vetor
//dentro dos parênteses colocamos a variável que irá 
//receber o ocnteúdo de cada linha do vetor 
//e com o => {} informamos o bloco que irá executar para
//cada linha

frutas.forEach( (item, pos) => {
    console.log(item)
} )
//Quando precisamos do índice também o colocamos entre
//assim como no exemplo abaixo