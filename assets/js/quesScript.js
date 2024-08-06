function calcularResultado() {
    var perfilS1 = 0;
    var perfilS2 = 0;
    var perfilS3 = 0;
    var perfilS4 = 0;

    for (var i = 1; i <= 25; i++) {
        var respostaSelecionada = document.querySelector('input[name=q' + i + ']:checked');

        if (respostaSelecionada !== null) {
            var valorResposta = respostaSelecionada.value;

            switch (valorResposta) {
                case 's1':
                    perfilS1++;
                    break;
                case 's2':
                    perfilS2++;
                    break;
                case 's3':
                    perfilS3++;
                    break;
                case 's4':
                    perfilS4++;
                    break;
                default:
                    break;
            }
        }
    }

    var totalPerguntas = 25;
    var percentualS1 = (perfilS1 / totalPerguntas) * 100;
    var percentualS2 = (perfilS2 / totalPerguntas) * 100;
    var percentualS3 = (perfilS3 / totalPerguntas) * 100;
    var percentualS4 = (perfilS4 / totalPerguntas) * 100;

    document.getElementById('resultado').innerHTML = `
        <p>Ares - Foco em resultados - ${percentualS1.toFixed(2)}%</p>
        
        <p>Apolo - Criatividade e Liberdade - ${percentualS2.toFixed(2)}%</p>
        
        <p>Afrodite - Felicidade e Igualdade - ${percentualS3.toFixed(2)}%</p>
        
        <p>Zeus - Ordem e controle - ${percentualS4.toFixed(2)}%</p>
    `;
}