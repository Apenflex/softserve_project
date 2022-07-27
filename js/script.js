// OWL Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

(function () {
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  function updateClock() {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
  }

  setInterval(updateClock, 1000);
})();

(function () {
  const modalOpen = document.querySelectorAll("[data-modal=start_free]");
  const modalOverlay = document.querySelector(".overlay_block");
  const modalWindow = document.querySelector(".modal_block");
  const modalCloseButtons = document.querySelectorAll(".modal__close");
  const submitModal = document.querySelector(".button_submit");
  const modalMini = document.querySelector(".modal_mini");

  modalOpen.forEach(function (item) {
    item.addEventListener("click", function (e) {
      modalOverlay.classList.add("overlay_active");
      modalWindow.classList.add("modal_active");
    });
  });

  submitModal.addEventListener("click", function (e) {
    modalWindow.classList.remove("modal_active");
    modalMini.classList.add("modal_mini_active");
  });

  modalCloseButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (modalOverlay.classList.contains("overlay_active")) {
        modalOverlay.classList.remove("overlay_active");
        modalWindow.classList.remove("modal_active");
        modalMini.classList.remove("modal_mini_active");
      }
    });
  });
})();
  // function validateForms(form) {
  //     document.querySelector(form).validate({
  //         rules: {
  //             name: "required",
  //             phone: "required",
  //             email: {
  //                 required: true,
  //                 email: true
  //             }
  //         },
  //         messages: {
  //             name: "Будь-ласка введіть своє ім'я",
  //             phone: "Будь-ласка введіть свій телефон",
  //             email: {
  //               required: "Будь-ласка введіть свою пошту",
  //               email: "Невірно введено адрес електронної пошти"
  //             }
  //         }
  //     });
  // }
  // validateForms('#free-form');

  // document.querySelector('input[name=phone]').mask("+380 (99) 123-45-67");

