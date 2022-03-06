function slider() {
  const slider = document.querySelector('.explore-compare-slider');
  const sliderImg = document.querySelector('.explore-slider-img');
  const imgAfter = document.querySelector('.img-after');

    slider.addEventListener('change', handleCoordinates);
    slider.addEventListener('input', handleCoordinates);

  function handleCoordinates(e) {
    imgAfter.style.width = (+e.target.value) + 'px';
    sliderImg.style.left = (+e.target.value - 19) + 'px';
  }
}

slider();
