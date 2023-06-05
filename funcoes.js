//função com entrada de parâmetro e sem retorno (sem saída de dados)
//Criando a função para gerar no console a tabuada do nr



calcular(34567897654567890)
function calcular(nr) {
    for (var i = 0; i < 20; i++) {
        console.log(`${nr} X ${i} = ${nr * i}`)
    }
}


//Chamado função para calcular o dobro e receber o resultado na variável

var resultado
resultado = calcularDobro(1)
console.log(resultado)

//Declarando a função recebendo o parâmetro e retornando um valor
function calcularDobro(nr) {
    var dobro = nr * 2
    return dobro //com o comando return "devolve" o valor calculado para a chamada
}

function calcularMedia(nota1, nota2) {
    var soma = nota1 + nota2
    var media = soma / 2
    return media
}

var MediaAluno = calcularMedia(9, 7)
console.log(`media do aluno 1 é ${MediaAluno}`)
var MediaAluno = calcularMedia(5, 3)
console.log(`Media do aluno 2 é ${MediaAluno}`)

var login = 'admin'
var senha = '123'
var possoAcessar = validarLogin(login, senha)
if (possoAcessar == true){
    console.log('Você pode acessar o sistema')
} else {
    console.log('Você não tem permissão')
}

function validarLogin(login, senha) {
    if (login == '' || senha == '') {
        return false
    }
    if (login == 'admin' && senha == '123') {
        return true
    } else {
        return false
    }
}


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

