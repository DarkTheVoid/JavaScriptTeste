
/*Comentários em múltiplas linhas */
//Comentário em uma única linha

//Alert é utilizado para exibir uma pequena mensagem em popup
//alert("Olá Mundo!!!")

//No Console conseguimos visualizar informações sem exibir na página
//sem exibir na página    
console.log("Olá Mundo!!! Utilizando Console")

function BotãoTeste() {
   alert("Você clicou no botão")
}

console.error("Esta é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Esta é uma mensagem de informação")
//como acessar o Node
//Acima da tela + Terminal + Novo Terminal + digitar "nome" pra iniciá-lo

//Conhecendo Váriavel
//Number / Boolean / String  que significam respectivamente Número / True or False / Caracteres
//para se escrever em String, adicionamos aspas duplas ("") ou aspas comvencionais ('')
var nome = "Emanuelly"
var sobrenome = "Dias"
//para se escrever um Number, não utilizamos nada, e apenas ponto (.) para se escrever um número fracionado
var idade = 16
var salario = 1200
//para se escrever uma aprovação (Boolean), seguimos a mesma regra de Number
var aprovado = true
//TYPEOF = coferir o tipo de váriavel
console.log(typeof nome)
//NOME + SOBRENOME = concatenae dois textos/variáveis (colocar +" "+ para dar um espaçamento entre eles)
console.log(nome + " " + sobrenome)
//concatenar dois números irá somá-los
var n1 = 10
var n2 = 25
console.log(n1 + n2) //ira resultar em 35
var n3 = "10"
var n4 = "25"
console.log(n3 + n4) //ira resultar e 1025
//VAR1 = VAR2 > irá transformar a VAR1 no mesmo valor da VAR2
//VAR1 = VAR2 - NUMBER > ira subtrair a quantidade selecionada de uma VAR Number
//utilizar acrase (``) para juntar v
salario = salario + 200 //a variável também pode ser somada com ela mesma
console.log(salario)

//Antigamente, era escrito de uma forma complicada
console.log('Olá, ' + nome + ' você tem ' + idade + ' anos e recebe R$ ' + salario)
//Hoje, utilizamos o TemplateString
console.log(`Olá, ${nome} você tem ${idade} anos e recebe R$ ${salario}`)


function BotãoNome() {
   var nome2 = prompt('Qual é o seu nome?')
   confirm(`Olá ${nome2}, entendeu JS?`)
   //Caixa de texto já pronta para receber informação

}

function BotãoSomar() {
   //receber valor1 de um prompt
   var num1 = prompt('Escolha um número!')
   //recebendo valor2 de um prompt
   var num2 = prompt('Escolha outro por favor <3')
   //variável soma recebendo valor1 e valeor2
   var soma = Number(num1) + Number(num2)
   //exibindo em um alert o valor da soma
   //alert(soma)
   document.getElementById("resultadoSoma").innerHTML +=
      `<br> A soma dos números ${num1} e ${num2} é = ${soma}`

}
function BotaoCidade() {
   var nomeCidade = document.getElementById("cidade").value
   document.getElementById("resultadoCidade").innerHTML = nomeCidade
}
//Alterando um elemento buscando ele pelo ID e alterando o
//conteúdo do HTML, podemos ler da seguinte forma
//No documento, pegar o elemento ID resultandoSOma e alterar
//o conteúdo do HTML pela string


//Operadores Aritméricos e Ordem de precedência
var opSoma = 5 + 2 //operador de soma
console.log(opSoma)
var opSubtracao = 5 - 2 //operação de subtração
console.log(opSubtracao)
var opMultiplicacao = 5 * 2 //Operador de multiplicação
console.log(opMultiplicacao)
var opDivisao = 5 / 2 //Operador de divisão
console.log(opDivisao)

var opExponencial = 5 ** 2 //Operador de exponencial
console.log(opExponencial)
var opResto = 5 % 2 //Operador do resto da divisão
console.log(opResto)


//Ordem de precedencia

var ordemPrecedencial = 5 + 3 / 2
console.log(ordemPrecedencial)
var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2)

// 1_() , 2_** , 3_* / , 4_%  , 5_+-


//constante

//Constantes - o valor não pode ser alterado depois de atribuido
const pi = 3.14
//pi = 3 - Se o valor for alterado dará erro no JavaScript


//Outra aula
//Auto atribuição
var n = 3
n = n + 3 //a variável recebe ela mesmo + 3
n += 3 //quer dizer o mesmo que a expressão acima

n++ //quando precisamos somar + 1 ao valor  da variável
n-- //quando precisamos subtrair -1 ao valor  da variável

//Operadores relacionados 
var n1 = 5
var n2 = 6
console.log(n1 > n2)  // > Maior que
console.log(n1 < n2)  // < Menor que
console.log(n1 >= n2)  // >= Maior ou igual que
console.log(n1 <= n2)  // <= Menor ou igual que
console.log(n1 == n2)  // == Igual
console.log(n1 != n2) // != Não igual - Diferente

//Estruturas condicionais
if (n1 > n2) { //Verificando a condição entre parênteses
   //SE a condição for verdadeira "entra" nessse bloco IF
   console.log("O n1 é maior que o n2")
}
else {
   //Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
   console.log("O n1 não é maior que o n2")
}

//Exemplo de condição 
var minhaIdade = 15
if (minhaIdade >= 16) {
   console.log("Você pode votar")
}
else {
   console.log("Você NÃO pode votar")
}

//operqdores
//&& representa o E
var login = "adm"
var senha = "123"
//Para entrar na condição True as 2 condições precisa ser verdadeira
if (login == "adm" && senha == "123") {
   //Exexcuta essse bloco quando as condições sao TRUE
} else {
   //executa esse bloco se pelo menos 1 condição for FALSE 
}

var media = 6
//operador ou -> || Pipe
//Para entrar na condição TRUE pelo menos 1 condição precisa ser verdade
if (media == 6 || media == 5) {
   //Executa esse bloco quando pelo menos 1 condição é TRUE  
} else {
   //Aqui entra se todas as condições forem falsas
}

//Estruturas condicionais encadeadas 
if (media >= 7) {
   console.log("APROVADO")
} else if (media >= 5) { //podemos fazer um novo if junto com o else
   console.log("RECUPERAÇÃO")
} else if (media < 5) {
   console.log("REPROVAÇÃO ")
}


//debugger, para analisar o código
//Quando queremos parar de executar uma função de JS utilizamos exit

//ParseInt = um número inteiro
//Math.random = um número decimal aleatório
//parseInt(Math.random() * "número limite escolhido")
var nrSorteado = parseInt(Math.random() * 100) + 1
console.log(nrSorteado)


//switch case
//é como se fosse vários if else de forma mais simples
var diaSemana = 3
switch (diaSemana) {
   case 1:
      console.log("Hoje é: Domingo")
      break
   case 2:
      console.log("Hoje é: Segunda")
      break
   case 3:
      console.log("Hoje é: Terça")
      break
   case 4:
      console.log("Hoje é: Quarta")
      break
   case 5:
      console.log("Hoje é: Quinta")
      break
   case 6:
      console.log("Hoje é: Sexta")
      break
   case 7:
      console.log("Hoje é: Sábado")
      break
      default:
         console.log("Dias inválida")
}


//Laços de repetição WHILE 
//continua repetindo o código
var nrVidas = 5
while (nrVidas > 0){
   console.log(`Você ainda tem ${nrVidas}`)
}