

const sliderImages = document.querySelectorAll('.slider_img');
const sliderLine = document.querySelector('.slider_line');
const sliderBtnNext = document.querySelector('.slider_btn-next');
const sliderBtnPrev = document.querySelector('.slider_btn-prev');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', function(){
    console.log('resize')
    showSlide()
});


showSlide();

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);


function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    console.log(sliderImages.length)
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    console.log('slider-width: ', sliderLine.style.width)
    sliderImages.forEach(item => {
        item.style.width = sliderWidth + 'px'
        console.log('item-width: ',item.style.width)
    });

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