document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Swiper
  var mySwiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Обработчик события для кнопки "Показать все"
  var showAllButton = document.getElementById('open-sliderId');
  showAllButton.addEventListener('click', function () {
    mySwiper.slideTo(0);
  });
});
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 11, 
  slidesPerGroup: 11, 
  loop: true // 
});