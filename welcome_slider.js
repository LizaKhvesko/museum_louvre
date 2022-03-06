const slidesContainer = document.querySelector('.slides');
const buttonNext = document.querySelector('.btn-next');
const buttonPrev = document.querySelector('.btn-prev');

function slider(imgs, prev, next) {
  const countText = document.querySelector('.count-text');
  let dots = document.querySelectorAll('.dot');
  let currentPosition;
  let slides = document.querySelectorAll('.slide');
  let slidesLength = slides.length;
  let slideSize = slides[0].offsetWidth;
  let firstSlide = slides[0];
  let lastSlide = slides[slidesLength - 1];

  let repeatFirst = firstSlide.cloneNode(true);
  let repeatLast = lastSlide.cloneNode(true);
  let count = 0;
  let allowShift = true;//перемещение
    //зацикленность
  imgs.appendChild(repeatFirst);
  imgs.insertBefore(repeatLast, firstSlide);
  imgs.style.left = `-${slideSize}px`;
    //перемещение
  prev.addEventListener('click', function () {
    shiftSlide(-1);
  });
  next.addEventListener('click', function () {
    shiftSlide(1);
  });

  dots[0].classList.add('active');

  //переключение по квадратам
  for (let dot of dots) {
    dot.addEventListener('click', showSlide);
  }

  function showSlide(event) {
    function getDotNumber(event) {
      let number = event.target.getAttribute('name');
      return number;
    }
    let slideNumber = getDotNumber(event);
    imgs.style.left = - (slideSize * slideNumber) + 'px';
    count = slideNumber -1;
    countSlides();
  }
    //номер слайда
  function countSlides() {
    let numberSlide = count + 1;
    if (numberSlide === 0 || numberSlide === 6) {
      numberSlide = 1;
    }
    if (count === -1) {
      numberSlide = 5;
    }
    countText.textContent = `0${numberSlide} | 05`;
    ///окрашиваем активный слайд
    function colorDots() {
      for (let dot of dots) {
        dot.classList.remove('active');
      }
      dots[numberSlide - 1].classList.add('active');
    }
    colorDots();
  }
    //пермещение
  function shiftSlide(dir, action) {
    imgs.classList.add('shifting');

    if (allowShift) {
      if (!action) {
        currentPosition = imgs.offsetLeft;
      }

      if (dir == 1) {
        imgs.style.left = currentPosition - slideSize + 'px';
        count++;
      } else if (dir == -1) {
        imgs.style.left = currentPosition + slideSize + 'px';
        count--;
      }
    }
    allowShift = false;
    countSlides();
    checkCount();
  }
  //зацикленность
  function checkCount() {
    imgs.classList.remove('shifting');

    if (count == -1) {
      imgs.style.left = -(slidesLength * slideSize) + 'px';
      count = slidesLength - 1;
    }

    if (count == slidesLength) {
      imgs.style.left = -(1 * slideSize) + 'px';
      count = 0;
    }

    allowShift = true;
  }
}
slider(slidesContainer, buttonPrev, buttonNext);