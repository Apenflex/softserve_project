// OWL Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        700: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


(function() {

    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds'); // DOM, Document Object Model Tree
    
    function updateClock() {
        const h = new Date().getHours();
        const m = new Date().getMinutes();
        const s = new Date().getSeconds();
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;
    }

    setInterval(updateClock, 1000);

})();

