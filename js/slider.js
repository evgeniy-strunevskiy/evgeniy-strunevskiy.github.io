

const sliderImages = document.querySelectorAll('.slider_img');
const sliderLine = document.querySelector('.slider_line');
const sliderDots = document.querySelectorAll('.slider_dot');
const sliderBtnNext = document.querySelector('.slider_btn-next');
const sliderBtnPrev = document.querySelector('.slider_btn-prev');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

showSlide();

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);


function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}


function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}