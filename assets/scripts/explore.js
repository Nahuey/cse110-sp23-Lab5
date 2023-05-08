// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const select = document.getElementById("voice-select");
  const textbox = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  const img = document.querySelector("img");
  let voices = [];
  populateVoiceList();
  synth.onvoiceschanged = populateVoiceList;

  let text;
  textbox.addEventListener("input", function() {
    text = textbox.value;
  });

  let speech;
  select.addEventListener("change", function() {
    speech = select;
  });

  button.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption = speech;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == selectedOption.selectedOptions[0].getAttribute("data-name")) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.lang = selectedOption.selectedOptions[0].getAttribute("data-lang");
    synth.speak(utterThis);

    utterThis.addEventListener("start", function() {
      img.src = "/assets/images/smiling-open.png";
    });

    utterThis.addEventListener("end", function() {
      img.src = "/assets/images/smiling.png";
    });

  });

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-name", voices[i].name);
      option.setAttribute("data-lang", voices[i].lang);
      select.appendChild(option);
    }
  }
}