(function () {
    const logos = [
        {
            id: "1",
            image: "img/carrousel_iamspetfood.svg",
            description: "iams pet food"
        },
        {
            id: "2",
            image: "img/carrousel_pedigree.svg",
            description: "pedigree"
        },
        {
            id: "3",
            image: "img/carrousel_petco.svg",
            description: "petco"
        },
        {
            id: "4",
            image: "img/carrousel_petpower.svg",
            description: "pet power"
        },
        {
            id: "5",
            image: "img/carrousel_purina.svg",
            description: "purina"
        },
        {
            id: "6",
            image: "img/carrousel_royalcanin.svg",
            description: "royal canin"
        }
    ];
    
    function fillLogos(logo_list) {
        let i = 0;
        const slidesfill = [];
        for (const logo of logo_list) {
            slidesfill[i] = ` <div class="logo_slide">
            <img class="carrousel_food_img" src="${logo.image}" alt="${logo.description}" height="110">
            </div>`;
            i++;
        }
        return slidesfill;
    }
    const slides = fillLogos(logos);

    let currentSlideIdx = 0;

    function renderCarousel() {
        const sliderContainer = document.querySelector('.carrousel_food_slides');
        //  const imgPointer = document.querySelector('.logo_slide');
        //  const cls = ["logo_one", "logo_two", "logo_three", "logo_four", "logo_five"];

        sliderContainer.innerHTML = slides[currentSlideIdx];

        if (window.innerWidth > 465) {

            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;

            sliderContainer.innerHTML += slides[secondSlideIdx];

            //     imgPointer.classList.remove(...cls); 
            //   imgPointer.classList.add("logo_two");

            if (window.innerWidth > 755) {

                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                sliderContainer.innerHTML += slides[thirdSlideIdx];

                //  imgPointer.classList.remove(...cls);
                //   imgPointer.classList.add("logo_three");

                if (window.innerWidth > 855) {

                    const fourSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                    sliderContainer.innerHTML += slides[fourSlideIdx];

                    // imgPointer.classList.remove(...cls);
                    // imgPointer.classList.add("logo_four");

                    if (window.innerWidth > 975) {

                        const fifthSlideIdx = fourSlideIdx + 1 >= slides.length ? 0 : fourSlideIdx + 1;
                        sliderContainer.innerHTML += slides[fifthSlideIdx];

                        //    imgPointer.classList.remove(...cls);
                        //   sliderContainer.classList.add("logo_five");

                    }
                }
            }
        }
    }
    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }
    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    setInterval(next, 3000);

    const nextButton = document.querySelector('.carrousel_food_btn-next');
    nextButton.addEventListener('click', next);

    const prevButton = document.querySelector('.carrousel_food_btn-prev');
    prevButton.addEventListener('click', prev);

    renderCarousel();

    window.addEventListener('resize', renderCarousel());
})();