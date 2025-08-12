function menuMobile() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-container');

    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuList.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
        });
    }
}
menuMobile();


function slides(){
    document.addEventListener('DOMContentLoaded', () => {
    // Função para clonar os elementos do slider
    function setupSliderClones(selector) {
        const track = document.querySelector(selector);
        if (track) {
            const elements = [...track.children];
            elements.forEach(element => {
                const clone = element.cloneNode(true);
                track.appendChild(clone);
            });
        }
    }
    
    setupSliderClones('.slider-track');
    setupSliderClones('.slider-galery-track');
    setupSliderClones('.slider-track-servicos');

});
}slides();

function faq(){
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantenha todos os códigos anteriores aqui: slider, menu mobile, etc.) ...
    
    // --- NOVO CÓDIGO para a seção FAQ (agora mais performático) ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parentItem = question.closest('.faq-item');
            const answer = parentItem.querySelector('.faq-answer');

            // Verifica se o item já está ativo
            const isActive = parentItem.classList.contains('active');

            if (isActive) {
                // Se estiver ativo, fecha o item
                answer.style.maxHeight = 0;
            } else {
                // Se não estiver ativo, abre o item
                // 'scrollHeight' retorna a altura total do conteúdo, mesmo que ele esteja escondido
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
            
            // Alterna a classe 'active' para girar o ícone
            parentItem.classList.toggle('active');
        });
    });

});
}faq();

function btnContato(){
    const btnContato = document.getElementById('btn-contact');
    if (btnContato) {
        btnContato.addEventListener('click', () => {
            window.location.href = 'http://wa.me/+553597769586'; 
        });
    }

    const btnContato2 = document.getElementById('btn-contact2');
    if (btnContato2) {
        btnContato2.addEventListener('click', () => {
            window.location.href = 'http://wa.me/+553597769586'; 
        });
    }
}btnContato();
