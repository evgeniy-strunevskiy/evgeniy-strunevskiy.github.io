const right = document.querySelector(".slider__arrow-right");
const left = document.querySelector(".slider__arrow-left");
const sliderList = document.querySelector(".slider__list");
const computed = getComputedStyle(sliderList);
console.log(computed);

right.addEventListener("click", function (e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight < 3760) {
    sliderList.style.right = currentRight + 940 + 'px';
  }
});

left.addEventListener("click", function (e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {
    sliderList.style.right = currentRight - 940 + 'px';
  }
});


if (direction === "right") {
  sliderList.appendChild(sliderList.firstChild);
} else {
  sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
}
}
