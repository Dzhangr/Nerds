let buttonOpenPopup = document.querySelector(".contacts-btn");
let buttonClosePopup = document.querySelector(".btn-close-modal");
let popupWriteUs = document.querySelector(".modal");

buttonOpenPopup.addEventListener("click", function () {
    popupWriteUs.classList.add("modal--show");
});

buttonClosePopup.addEventListener("click", function () {
    popupWriteUs.classList.remove("modal--show");
});

// Slider

let sliderToggleBtn1 = document.querySelector(".slider__toggle-btn1");
let sliderToggleBtn2 = document.querySelector(".slider__toggle-btn2")
let sliderToggleBtn3 = document.querySelector(".slider__toggle-btn3")

let sliderBox1 = document.querySelector(".slider-box1");
let sliderBox2 = document.querySelector(".slider-box2");
let sliderBox3 = document.querySelector(".slider-box3");

sliderToggleBtn1.addEventListener("click", function () {
    sliderToggleBtn1.classList.add("slider__toggle-btn--active");
    sliderToggleBtn2.classList.remove("slider__toggle-btn--active");
    sliderToggleBtn3.classList.remove("slider__toggle-btn--active");
});

sliderToggleBtn2.addEventListener("click", function () {
    sliderToggleBtn1.classList.remove("slider__toggle-btn--active");
    sliderToggleBtn2.classList.add("slider__toggle-btn--active");
    sliderToggleBtn3.classList.remove("slider__toggle-btn--active");
});

sliderToggleBtn3.addEventListener("click", function () {
    sliderToggleBtn1.classList.remove("slider__toggle-btn--active");
    sliderToggleBtn2.classList.remove("slider__toggle-btn--active");
    sliderToggleBtn3.classList.add("slider__toggle-btn--active");
});

sliderToggleBtn1.addEventListener("click", function () {
    sliderBox1.classList.add("slider-box--show");
    sliderBox2.classList.remove("slider-box--show");
    sliderBox3.classList.remove("slider-box--show");
});

sliderToggleBtn2.addEventListener("click", function () {
    sliderBox1.classList.remove("slider-box--show");
    sliderBox2.classList.add("slider-box--show");
    sliderBox3.classList.remove("slider-box--show");
});

sliderToggleBtn3.addEventListener("click", function () {
    sliderBox1.classList.remove("slider-box--show");
    sliderBox2.classList.remove("slider-box--show");
    sliderBox3.classList.add("slider-box--show");
});
