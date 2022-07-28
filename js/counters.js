(function scrollDown(e) {
    const counters = document.querySelectorAll('.count');
    const speed = 50;
    if(window.pageYOffset > 4180){
        counters.forEach((counter) => {
            const updateCount = () => {
            const target = parseInt(+counter.getAttribute('data-target'));
            const count = parseInt(+counter.innerText);
            const increment = Math.trunc(target / speed);
    
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 200);
            }else {
                counter.innerText = target;
            }
            };
            updateCount();
            }); 
    }
    window.addEventListener("scroll", scrollDown);
})();
