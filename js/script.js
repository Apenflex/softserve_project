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