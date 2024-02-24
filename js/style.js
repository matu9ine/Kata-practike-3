   document.addEventListener('DOMContentLoaded', function() {
    var linkContainer = document.querySelector('.slider__servise__brand-link');
    var toggleButton = document.getElementById('open-sliderId');
    var isOpen = false;

    toggleButton.addEventListener('click', function() {
        isOpen = !isOpen;

        toggleButton.textContent = isOpen ? 'Скрыть' : 'Показать все';

        linkContainer.style.minHeight = isOpen ? '280px' : '188px'; 

        
    });
});