function calcularResultado() {
    let profileZeus = 0;
    let profileAtena = 0;
    let profileAres = 0;
    let profileAfrodite = 0;
    let profileHermes = 0;
    let profilePoseidon = 0;
    let profileHera = 0;
    let profileHades = 0;

    let totalQuestions = 20;

    for (let i = 1; i <= totalQuestions; i++) {
        let respostaSelecionada = document.querySelector('input[name=q' + i + ']:checked');

        if (respostaSelecionada !== null) {
            let valorResposta = respostaSelecionada.value;

            switch (valorResposta) {
                case 'zeus':
                    profileZeus++;
                    break;
                case 'atena':
                    profileAtena++;
                    break;
                case 'ares':
                    profileAres++;
                    break;
                case 'afrodite':
                    profileAfrodite++;
                    break;
                case 'hermes':
                    profileHermes++;
                    break;
                case 'poseidon':
                    profilePoseidon++;
                    break;
                case 'hera':
                    profileHera++;
                    break;
                case 'hades':
                    profileHades++;
                    break;
                default:
                    break;
            }
        }
    }

    let percentZeus = (profileZeus / totalQuestions) * 100;
    let percentAtena = (profileAtena / totalQuestions) * 100;
    let percentAres = (profileAres / totalQuestions) * 100;
    let percentAfrodite = (profileAfrodite / totalQuestions) * 100;
    let percentHermes = (profileHermes / totalQuestions) * 100;
    let percentPoseidon = (profilePoseidon / totalQuestions) * 100;
    let percentHera = (profileHera / totalQuestions) * 100;
    let percentHades = (profileHades / totalQuestions) * 100;

    let percents = {
        'Zeus': percentZeus,
        'Atena': percentAtena,
        'Ares': percentAres,
        'Afrodite': percentAfrodite,
        'Hermes': percentHermes,
        'Poseidon': percentPoseidon,
        'Hera': percentHera,
        'Hades': percentHades
    };

    let biggestDeus = Object.keys(percents).reduce((a, b) => percents[a] > percents[b] ? a : b);

    document.getElementById('resultado').innerHTML =
        `
        <p>Seu Arquétipo Tecnológico: ${biggestDeus}</p></br>
        <p>Parabéns! Com base nas suas respostas, você é ${biggestDeus}, o arquétipo tecnológico correspondente ao deus ${biggestDeus} da mitologia grega.</p>
        <p>Zeus - Gestão de Projetos - ${percentZeus.toFixed(2)}%</p>
        <p>Atena - Segurança da Informação - ${percentAtena.toFixed(2)}%</p>
        <p>Ares - Desenvolvimento de Jogos - ${percentAres.toFixed(2)}%</p>
        <p>Afrodite - Design de Interface do Usuário (UI/UX) - ${percentAfrodite.toFixed(2)}%</p>
        <p>Hermes - Desenvolvimento Web - ${percentHermes.toFixed(2)}%</p>
        <p>Poseidon - Engenharia de Rede - ${percentPoseidon.toFixed(2)}%</p>
        <p>Hera - Recursos Humanos de TI - ${percentHera.toFixed(2)}%</p>
        <p>Hades - Administração de Banco de Dados - ${percentHades.toFixed(2)}%</p>
        `;
}