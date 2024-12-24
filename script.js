document.addEventListener("DOMContentLoaded", (event) => {
  const submitBtn = document.getElementById("submit-btn");
  const downloadBtn = document.getElementById("download-btn");
  const inputText = document.getElementById("input-text");

  // Function to speak the text
  function speak() {
    const textToSpeak = inputText.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voiceType = document.getElementById("voice");
    const voiceTypeValue = voiceType.value;

    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[voiceTypeValue]; // select voice
    speechSynthesis.speak(utterance);
  }

  // Function to create downloadable audio
  function downloadAudio() {
    const textToSpeak = inputText.value;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const audioContext = new AudioContext();
    const destination = audioContext.createMediaStreamDestination();
    const mediaRecorder = new MediaRecorder(destination.stream);

    const voiceType = document.getElementById("voice");
    const voiceTypeValue = voiceType.value;

    utterance.voice = speechSynthesis.getVoices()[voiceTypeValue];
    const source = audioContext.createMediaStreamSource(destination.stream);

    // Capture audio data
    mediaRecorder.ondataavailable = (event) => {
      const audioBlob = new Blob([event.data], { type: "audio/wav" });
      const audioURL = URL.createObjectURL(audioBlob);

      // Create a link to download the audio
      const link = document.createElement("a");
      link.href = audioURL;
      link.download = "speech.wav";
      link.click();
    };

    // Start recording
    mediaRecorder.start();
    utterance.onend = () => mediaRecorder.stop(); // Stop when speaking finishes
    speechSynthesis.speak(utterance);
  }

  // Event listeners
  submitBtn.addEventListener("click", function () {
    speak();
  });

  downloadBtn.addEventListener("click", function () {
    downloadAudio();
  });
});
