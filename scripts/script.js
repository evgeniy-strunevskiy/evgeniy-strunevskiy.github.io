function ready() {
  // //Вертикальный скролл Сабанцев
  // const sections = $('.section');
  // const display = $('.maincontent');

  // const performTransition = sectionEq => {
  //   const position = sectionEq * -100;

  //   sections
  //     .eq(sectionEq)
  //     .addClass('active')
  //     .siblings()
  //     .removeClass('active');

  //   display.css({
  //     transform: `translateY(${position}%)`
  //   });

  // }

  // const scrollToSection = direction => {
  //   const activeSection = sections.filter('.active');
  //   const nextSection = activeSection.next();
  //   const prevSection = activeSection.prev();

  //   if (direction === 'next' && nextSection.length) {
  //     performTransition(nextSection.index());
  //   }

  //   if (direction === 'prev' && prevSection.length) {
  //     performTransition(prevSection.index());
  //   }
  // };

  // $(window).on("wheel", e => {
  //   const deltaY = e.originalEvent.deltaY;

  //   if (deltaY > 0) {
  //     scrollToSection("next");
  //   }

  //   if (deltaY < 0) {
  //     scrollToSection("prev");
  //   }
  // });

  //Вертикальный скролл
  $('#fullpage').fullpage({
    menu: '#menu',
  });





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


  //Карта

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [52.09058992970443, 23.70227846134666],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../pic/icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
        hintContent: 'Собственный значок метки с контентом',
        balloonContent: 'А эта — новогодняя',
        iconContent: '12'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: '../pic/icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      });

    myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
    myMap.behaviors.disable('scrollZoom');
  });


};

document.addEventListener("DOMContentLoaded", ready);









