let blinkingImage;

function startBlinking() {
  blinkingImage = setInterval(() => {
    document.querySelector('.blinking-image').classList.toggle('blinking-image');
  }, 500);
}

function stopBlinking() {
  clearInterval(blinkingImage);
  document.querySelector('.blinking-image').classList.add('blinking-image');
}


