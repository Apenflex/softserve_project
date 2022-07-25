(function () {

    const slides = [
        `<div class="owl-carousel owl-theme">
            <img class="slider-item" src="img/slider/docker_logo.png" alt="Docker logotype">
            <img class="slider-item" src="img/slider/google_logo.png" alt="Google logotype">
            <img class="slider-item" src="img/slider/ibm_logo.png" alt="IBM logotype">
            <img class="slider-item" src="img/slider/optimizely_logo.png" alt="Optimizely logotype">
            <img class="slider-item" src="img/slider/github_logo.png" alt="GitHub logotype">
            <img class="slider-item" src="img/slider/shutterstock_logo.png" alt="Shutterstock logotype">
        </div>`
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.slider');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    // function prev() {
    //     currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    //     renderCarousel();
    // }

    // function next() {
    //     currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    //     renderCarousel();
    // }

    setInterval(next, 3000);

    // const prevButton = document.querySelector('.products-carousel__btn-prev');
    // prevButton.addEventListener('click', prev);

    // const nextButton = document.querySelector('.products-carousel__btn-next');
    // nextButton.addEventListener('click', next);

    renderCarousel();

    // window.addEventListener('resize', renderCarousel);

})();