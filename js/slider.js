new Swiper('.image-slider', {
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    slidesPerColumn: 1,
    loopedSlides: 3,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 800,
});