const progresses = document.querySelectorAll('.progress');
  for (let progress of progresses) {
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, white 100%)`
})
}

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenBtn = document.querySelector('.max');
const playBig = document.querySelector('.playBig');
const volumeSlider = document.querySelector('.volume_slider');


video.currentTime = 0;

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();

  if (video.play) {
      playBig.style.display = 'none'
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;

  this.paused ? (playBig.style.display = '') : ((playBig.style.display = 'none'));

}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function fullscreenVideo () {
    player.classList.toggle('fullcreenVideo')
    player.classList.contains('fullcreenVideo') ? playBig.style.left = '45%' : playBig.style.left = '40%'
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
fullscreenBtn.addEventListener('click', fullscreenVideo);
playBig.addEventListener('click', togglePlay)

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

document.addEventListener('keydown', function (event) {
  if (event.code === 'KeyF') {
    fullscreenVideo ();
  } else if (event.code === 'Space') {
    togglePlay();
  } else if (event.code === 'KeyM') {
    if (video.volume !== 0) {
      video.volume = 0;
    } else {
      video.volume = volumeSlider.value;
    }
  }  else if (event.code === 'Numpad0' || event.code === 'Digit0') {
      video.currentTime = 0;
  } else if (event.code === 'ArrowRight') {
    video.currentTime += 5;
  } else if (event.code === 'ArrowLeft') {
    video.currentTime -= 5;
  } else if (event.code === 'KeyL') {
    video.currentTime += 10;
  } else if (event.code === 'KeyJ') {
    video.currentTime -= 10;
  }
});