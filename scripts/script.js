function ready() {
  //Ввод номера телефона
  const phone = document.querySelector('#phone');

  phone.addEventListener('keydown', function () {
    let isDigit = false;
    let isDash = false;
    let isControl = false;

    if (event.key >= 0 || event.key <= 9) {
      isDigit = true;
    }

    if (event.key == '-') {
      isDash = true
    }

    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
      isControl = true;
    }

    if (!isDigit && !isDash && !isControl) {
      event.preventDefault();
    }
  });

  //Код формы
  const myForm = document.querySelector('#myForm');
  const sendBtn = document.querySelector('#button-send');
  const overLay = document.querySelector('.overlay');
  const overLayBtn = document.querySelector('.overlay__btn');

  sendBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (validateForm(myForm)) {
      const data = {
        name: myForm.elements.name.value,
        phone: myForm.elements.phone.value,
        comment: myForm.elements.comment.value,
        to: 'esstrunevskiy@gmail.com'
      };

      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
      xhr.send(JSON.stringify(data));
      xhr.addEventListener('load', () => {
        if (xhr.response.status) {
          overLay.classList.add('overlay--active');
          overLay.innerText = "Сообщение отправлено"
        } else {
          overLay.classList.add('overlay--active');
          overLay.innerText = 'Произошла ошибка'
        }
      });

    }
  });

  function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
      valid = false;
    }

    if (!validateField(form.elements.phone)) {
      valid = false;
    }

    if (!validateField(form.elements.comment)) {
      valid = false;
    }

    return valid;

  }

  function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
  }

  //Всплывающее окно 
  const overLayClose = document.querySelector('.overlay__close');

  overLayClose.addEventListener('click', function (e) {
    overLay.style.display = 'none';
  });


  //Всплывающее меню
  const open = document.getElementById('screen-menu__open');
  const close = document.getElementById('menu-close');
  const hamburger = document.getElementById('hamburger__menu');

  close.addEventListener('click', function (e) {
    hamburger.style.display = 'none';
  });

  open.addEventListener('click', function (e) {
    hamburger.style.display = 'block';
  });


  //Бесконечный слайдер
  const right = document.querySelector(".slider__arrow-right");
  const left = document.querySelector(".slider__arrow-left");
  const sliderList = document.querySelector(".slider__list");

  right.addEventListener("click", function (e) {
    e.preventDefault();
    loop("right");
  });

  left.addEventListener("click", function (e) {
    e.preventDefault();
    loop("left");
  });

  function loop(direction) {
    if (direction === "right") {
      sliderList.appendChild(sliderList.firstElementChild);
    } else {
      sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
    }
  }

  // // аккордеон
  // const teamList = document.querySelector(".team__list");
  // const teamItem = document.querySelectorAll(".team__item");

  // teamList.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   for (let i = 0; i < teamItem.length; i++) {
  //     teamItem[i].classList.remove('team__item--active');
  //   }
  //   e.target.closest('.team__item').classList.add("team__item--active");
  // });


  //аккордеон закрытие
  const one = document.querySelectorAll('.team__item');

  for (let i = 0; i < one.length; i++) {
    one[i].addEventListener("click", toogleClass)
  }

  function toogleClass(e) {
    e.preventDefault();
    if (e.target.closest('.team__item').classList.contains("team__item--active") === false) {
      for (let i = 0; i < one.length; i++) {
        one[i].closest('.team__item').classList.remove("team__item--active");
      }
      e.target.closest('.team__item').classList.add("team__item--active");
    } else {
      e.target.closest('.team__item').classList.remove("team__item--active");
    };
  };


  //горизонтальный аккордеон закрытие
  const accordeonMenuItem = document.querySelectorAll('.accordeon-menu__item');

  for (let i = 0; i < accordeonMenuItem.length; i++) {
    accordeonMenuItem[i].addEventListener("click", toogle)
  }

  function toogle(e) {
    e.preventDefault();
    if (e.target.closest('.accordeon-menu__item').classList.contains("accordeon-menu__item--active") === false) {
      for (let i = 0; i < accordeonMenuItem.length; i++) {
        accordeonMenuItem[i].closest('.accordeon-menu__item').classList.remove("accordeon-menu__item--active");
      }
      e.target.closest('.accordeon-menu__item').classList.add("accordeon-menu__item--active");
    } else {
      e.target.closest('.accordeon-menu__item').classList.remove("accordeon-menu__item--active");
    };
  };



















  // const right = document.querySelector(".slider__arrow-right");
  // const left = document.querySelector(".slider__arrow-left");
  // const sliderList = document.querySelector(".slider__list");
  // const computed = getComputedStyle(sliderList);
  // console.log(computed);

  // right.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   let currentRight = parseInt(computed.right);

  //   if (!currentRight) {
  //     currentRight = 0;
  //   }

  //   if (currentRight < 3760) {
  //     sliderList.style.right = currentRight + 940 + 'px';
  //   }
  // });

  // left.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   let currentRight = parseInt(computed.right);

  //   if (!currentRight) {
  //     currentRight = 0;
  //   }

  //   if (currentRight > 0) {
  //     sliderList.style.right = currentRight - 940 + 'px';
  //   }
  // });


  // if (direction === "right") {
  //   sliderList.appendChild(sliderList.firstChild);
  // } else {
  //   sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
  // }
  // }


};

document.addEventListener("DOMContentLoaded", ready);









