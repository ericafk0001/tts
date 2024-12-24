# A simple text to speech app

This web app provides a text-to-speech and audio download functionality using JavaScript's Web Speech API. It utilizes the SpeechSynthesisUtterance API to convert user-provided text into audible speech, dynamically setting the voice based on user selection from the available voices on the system. While it includes an attempt to record and save the spoken output as a .wav file using the AudioContext and MediaRecorder APIs.

The approach is technically flawed because the Web Speech API does not provide direct access to its audio stream, making the audio download feature non-functional in its current form. I will be making this feature work in a future update to include another API.

![image](https://cloud-g0gazppdd-hack-club-bot.vercel.app/0image.png)
