document.addEventListener('DOMContentLoaded', () => {
    const setas = document.querySelectorAll('.setas');
    const respostas = document.querySelectorAll('.esconder');

    function fecharTodos() {
        respostas.forEach(resposta => {
            resposta.classList.add('esconder');
        });

        setas.forEach(seta => {
            seta.classList.remove('cor-ativa');
            seta.classList.add('cor-desativada');
        })
    }

    setas.forEach((seta, index) => {
        seta.addEventListener('click', () => {

            const respostaAtual = respostas[index];
            const setaAtual = seta;

            if (respostaAtual.classList.contains('esconder')) {

                fecharTodos();

                respostaAtual.classList.remove('esconder');
                setaAtual.classList.remove('cor-desativada');
                setaAtual.classList.add('cor-ativa');
            } else {
                respostaAtual.classList.add('esconder');
                setaAtual.classList.remove('cor-ativa');
                setaAtual.classList.add('cor-desativada');
            }
        });
    });
});