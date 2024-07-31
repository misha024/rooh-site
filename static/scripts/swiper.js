const swiper = new Swiper('.swiper-container', { // Главная инициализация библиотеки
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const updateSlidesPerView = () => { // Кол-во слайдов прокрута
    const screenWidth = window.innerWidth;
    let slidesPerView;

    if (screenWidth >= 3840) {slidesPerView = 6}
    else if (screenWidth >= 2560) {slidesPerView = 6}
    else if (screenWidth >= 1920) {slidesPerView = 5}
    else if (screenWidth >= 1600) {slidesPerView = 4}
    else if (screenWidth >= 1200) {slidesPerView = 3}
    else if (screenWidth >= 992) {slidesPerView = 2}
    else if (screenWidth >= 768) {slidesPerView = 2}
    else {slidesPerView = 1}

    swiper.params.slidesPerView = slidesPerView
    swiper.update()
}

window.addEventListener("DOMContentLoaded", updateSlidesPerView) // Запуск при загрузке страницы
window.addEventListener("resize", updateSlidesPerView) // Запуск при изменении ширины страницы