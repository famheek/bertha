

export function speak(text, {rate: rate = 0.8, volume: volume = 1, pitch: pitch = 0.9, lang: lang = 'nl-NL'} = {}) {
  let voices = speechSynthesis.getVoices();
  let filteredVoices = voices
    .filter((voice) => voice.default && voice.lang.startsWith(lang))
    .concat(voices.filter((voice) => voice.lang.startsWith(lang)));
  if (filteredVoices.length === 0) {
    console.warn('No suitable text-to-speech voice found');
    console.log(speechSynthesis.getVoices())
  }
  // let defaultVoice = filteredVoices[0];

  var msg = new SpeechSynthesisUtterance();
  // msg.voice = defaultVoice;

  [msg.volume, msg.rate, msg.pitch, msg.lang] = [volume, rate, pitch, lang];
  msg.text = text;

  speechSynthesis.speak(msg);
}
