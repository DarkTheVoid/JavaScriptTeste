//FN + F8 para ver o console.log()
var listacarros = [
    
]

//iniciando com uma var global (fora da função)
var carro = 'Gol' //variável

var carro = []  //vetor

var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'VW'
} //Objeto

//A diferença entre variável e objeto:
// Dentro do "Objeto" pode haver vários atributos


console.log(carro)

//para acessar uma infromação específica dentro do objeto é apenas:
//console.log("nome do objeto".a informação que deseja)

console.log(carro.modelo)
//ou
console.log(`${carro.ano} - ${carro.modelo}`)

listacarros.push(carro)
console.log(listacarros)



//Novo objeto - novo carro
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca: 'GM'
}

listacarros.push(carro)
console.log(listacarros)

for (var andar in listacarros){
    console.log(carro.modelo)
}

