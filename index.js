const perguntas = document.querySelectorAll('.item');

perguntas.forEach(function (li) {
    
    li.addEventListener('click', () => {
        const respostaAtiva = document.querySelector('.ativo');
        respostaAtiva.classList.remove('ativo');

        li.classList.add('ativo');

    });
});


