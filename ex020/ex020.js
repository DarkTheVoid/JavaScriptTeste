function BotaoVetor() {
    var filmes = ['Interstellas',
                    'Star Wars',
                    'Harry Potter',
                    'Super Mario Bros',
                    'Vingadores', 'Barbie',
                    'Branca de Neve']
//debugger
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById('resultado').innerHTML +=
            `Posição do Vetor ${i} - Filme ${filmes[i]} <br>`
    }
}