let swiper = new Swiper(".eventSwiper", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".event-button-next",
        prevEl: ".event-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.20,
        },
        993: {
            slidesPerView: 3.10,
        },
        1200: {
            slidesPerView: 4.20,
        },
    },
});


let swiper2 = new Swiper(".tarifSwiper", {
    spaceBetween: 17,
    loop: true,
    navigation: {
        nextEl: ".tarif_btn_next",
        prevEl: ".tarif_btn_prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.10,
        },
        993: {
            slidesPerView: 2.75,
        },
        1200: {
            slidesPerView: 3.74,
        },
    },
});

// accardion
const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
    const items = document.querySelectorAll('.js-acc-item');
    const thisItem = this.parentNode;

    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('is-open');
            return;
        }
        item.classList.remove('is-open');
    });
}
// accardion