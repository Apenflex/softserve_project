(function () {
    const modalOpen = document.querySelectorAll("[data-modal=start_free]");
    const modalOverlay = document.querySelector(".overlay_block");
    const modalWindow = document.querySelector(".modal_block");
    const modalCloseButtons = document.querySelectorAll(".modal__close");
    const submitModal = document.querySelector(".button_submit");
    const modalMini = document.querySelector(".modal_mini");
    const form = document.querySelector('.start-form');

    modalOpen.forEach(function (item) {
        item.addEventListener("click", function (e) {
            modalOverlay.classList.add("overlay_active");
            modalWindow.classList.add("modal_active");
        });
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

    function handleSubmit(event) {
        if (!form.checkValidity()) return;
      event.preventDefault();
      const modalMini = document.querySelector(".modal_mini");
      fetch("https://formspree.io/f/xgedgqla", {
        method: "POST",
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          modalWindow.classList.remove("modal_active");
          modalMini.classList.add("modal_mini_active");
          form.reset();
        } else {
            modalWindow.classList.remove("modal_active");
            modalMini.classList.add("modal_mini_active");
            document.querySelector('.modal_error_oops').innerHTML = "Oops!";
            document.querySelector('.modal_error').innerHTML = "There was a problem submitting your form";
        }
      }).catch(error => {
        modalWindow.classList.remove("modal_active");
        modalMini.classList.add("modal_mini_active");
        document.querySelector('.modal_error_oops').innerHTML = "Oops!";
        document.querySelector('.modal_error').innerHTML = "There was a problem submitting your form";
      });
    }
    submitModal.addEventListener("click", handleSubmit);

  })();