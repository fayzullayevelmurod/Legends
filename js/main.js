let swiper = new Swiper(".eventSwiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".event-button-next",
    prevEl: ".event-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    993: {
      slidesPerView: 3.1,
    },
    1200: {
      slidesPerView: 4.2,
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
      slidesPerView: 1.1,
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
const accSingleTriggers = document.querySelectorAll(".js-acc-single-trigger");

accSingleTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".js-acc-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("is-open");
      return;
    }
    item.classList.remove("is-open");
  });
}
// accardion

// custom select
try {
  const selectBox = document.querySelectorAll(".select_box");

  selectBox.forEach((item) => {
    const select = item.querySelector(".custom_select");
    let selectedText = item.querySelector(".selected_text");
    const optionItem = item.querySelectorAll(".option_item");
    const selectOption = item.querySelector(".select_option");

    select.addEventListener("click", () => {
      select.classList.toggle("active");
      selectOption.classList.toggle("show");
    });

    optionItem.forEach((option) => {
      option.addEventListener("click", () => {
        selectedText.value = option.textContent;
      });
    });
  });
} catch (error) {
  console.log(error);
}

try {
  function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const img = input.nextElementSibling.querySelector("img");

    if (input.type === "password") {
      input.type = "text";
      img.src = "images/icons/eye.svg"; // Change to eye icon
    } else {
      input.type = "password";
      img.src = "images/icons/eye-slash.svg"; // Change to eye-slash icon
    }
  }
} catch (error) {}
