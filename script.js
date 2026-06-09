// Função para disparar animações quando os elementos aparecem na tela ao rolar a página
function animaScroll() {
    var elementos = document.querySelectorAll('.scroll-anim');
    
    elementos.forEach(function(elemento) {
        var topoElemento = elemento.getBoundingClientRect().top;
        var telaAltura = window.innerHeight;
        
        // Se o elemento estiver visível na tela, adiciona a classe que ativa a animação
        if (topoElemento < telaAltura - 100) {
            elemento.classList.add('active');
        }
    });
}

// Executa uma vez ao carregar a página para animar o que já está visível
window.addEventListener('load', animaScroll);

// Executa toda vez que o usuário rolar a página
window.addEventListener('scroll', animaScroll);
