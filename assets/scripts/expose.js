// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornType = document.getElementById("horn-select");
  let hornImg = document.querySelector("img");
  let hornSound = document.getElementsByClassName("hidden")[0];

  hornType.addEventListener("change", function() {
    hornImg.src = "assets/images/" + hornType.value + ".svg";
    hornSound.src = "assets/audio/" + hornType.value + ".mp3";
  });

  let volumeSlider = document.getElementById("volume");
  let volumeDisplay = document.getElementById("volume-controls").querySelector("img");
  volumeSlider.addEventListener("input", function() {
    if (volumeSlider.value == 0) {
      volumeDisplay.src = "assets/icons/volume-level-0.svg";
    } else if (volumeSlider.value > 0 && volumeSlider.value < 33) {
      volumeDisplay.src = "assets/icons/volume-level-1.svg";
    } else if (volumeSlider.value >= 33 && volumeSlider.value < 67) {
      volumeDisplay.src = "assets/icons/volume-level-2.svg";
    } else if (volumeSlider.value >= 67) {
      volumeDisplay.src = "assets/icons/volume-level-3.svg";
    }
    hornSound.volume = volumeSlider.value/volumeSlider.max;
  });

  let button = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  button.addEventListener("click", function() {
    hornSound.play();
    if (hornType.value == "party-horn") {
      jsConfetti.addConfetti({
        emojis: ['🌈', '✨', '💫', '🌸'],
        emojiSize: 50,
        confettiNumber: 200,
     });
    }
  });
}
